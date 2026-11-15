#!/usr/bin/env node
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

export const AI_STUDIO_URL = 'https://aistudio.google.com/generate-speech?model=gemini-3.8-flash-tts';
export const CDP_PORT = Number(process.env.AISTUDIO_CDP_PORT || process.env.FLOW_MCP_CDP_PORT || 9333);
export const CDP_URL = `http://127.0.0.1:${CDP_PORT}`;

// Use shared Google-logged-in profile directory so user session is preserved
export const PROFILE_DIR = process.env.AISTUDIO_CHROME_PROFILE || join(homedir(), '.flow-mcp', 'chrome-profile');

const CHROME_PATHS = [
  process.env.CHROME_PATH,
  process.env.FLOW_MCP_CHROME,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  process.env.LOCALAPPDATA ? `${process.env.LOCALAPPDATA}\\Google\\Chrome\\Application\\chrome.exe` : undefined,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
].filter(Boolean);

export function getChromeExecutable() {
  const p = CHROME_PATHS.find(p => p && existsSync(p));
  if (!p) throw new Error('Google Chrome executable not found.');
  return p;
}

export async function isCdpRunning() {
  try {
    const res = await fetch(`${CDP_URL}/json/version`, { signal: AbortSignal.timeout(1500) });
    return res.ok;
  } catch {
    return false;
  }
}

export async function launchChromeWithCdp() {
  if (await isCdpRunning()) return;
  const chromePath = getChromeExecutable();
  mkdirSync(PROFILE_DIR, { recursive: true });

  const child = spawn(
    chromePath,
    [
      `--user-data-dir=${PROFILE_DIR}`,
      `--remote-debugging-port=${CDP_PORT}`,
      '--no-first-run',
      '--no-default-browser-check',
      AI_STUDIO_URL,
    ],
    { detached: true, stdio: 'ignore' }
  );
  child.unref();

  for (let i = 0; i < 30; i++) {
    if (await isCdpRunning()) return;
    await new Promise(r => setTimeout(r, 500));
  }
  throw new Error(`Chrome started but CDP port ${CDP_PORT} was unreachable.`);
}

export async function getPlaywrightPage() {
  await launchChromeWithCdp();
  const browser = await chromium.connectOverCDP(CDP_URL);
  const context = browser.contexts()[0] || (await browser.newContext());

  let page = context.pages().find(p => p.url().includes('aistudio.google.com/generate-speech'));
  if (!page) {
    page = await context.newPage();
  } else {
    await page.bringToFront();
  }

  return { browser, context, page };
}

/**
 * Generate speech via AI Studio Speech Generator Playground
 */
export async function generateSpeech({
  text,
  voice = 'Puck',
  outputPath,
  timeoutSeconds = 60,
}) {
  if (!text || typeof text !== 'string') {
    throw new Error('Text parameter is required.');
  }

  const { page } = await getPlaywrightPage();

  // 1. Navigate to generate-speech playground
  if (!page.url().includes('aistudio.google.com/generate-speech')) {
    await page.goto(AI_STUDIO_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });
  } else {
    // If already on page, reload or navigate fresh to get "Create new dialog" card
    await page.goto(AI_STUDIO_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });
  }
  await page.waitForTimeout(2500);

  // 2. Click "Create new dialog" card
  const createCard = await page.waitForSelector(
    '[data-testid="create-new-dialog-card"], mat-card.create-dialog-card',
    { timeout: 15000 }
  );
  await createCard.click();
  await page.waitForTimeout(1500);

  // 3. Change Speaker Voice if specified
  if (voice) {
    const speakerBtn = await page
      .locator('button:has-text("Speaker 1 -"), button.speaker-button, button:has(.speaker-alias-input)')
      .first();

    if ((await speakerBtn.count()) > 0) {
      await speakerBtn.click();
      await page.waitForTimeout(800);

      const searchInput = await page.locator('.voice-search-input input, input[placeholder*="Search"]').first();
      if ((await searchInput.count()) > 0) {
        await searchInput.fill(voice);
        await page.waitForTimeout(800);

        const voiceCard = await page
          .locator(`button.voice-card-content:has-text("${voice}"), [aria-label="${voice}"]`)
          .first();

        if ((await voiceCard.count()) > 0) {
          await voiceCard.click();
          await page.waitForTimeout(500);
        }
      }

      // Close speaker settings panel
      const closeBtn = await page.locator('button[aria-label="Close panel"]').first();
      if ((await closeBtn.count()) > 0) {
        await closeBtn.click();
        await page.waitForTimeout(500);
      }
    }
  }

  // 4. Fill text into dialog textarea
  const textarea = await page.waitForSelector(
    'textarea[aria-label="Speech block text"], textarea.textarea',
    { timeout: 10000 }
  );
  await textarea.fill(text);
  await page.waitForTimeout(400);

  // 5. Submit with Ctrl+Enter
  await textarea.press('Control+Enter');

  // 6. Wait for audio generation to complete (download button present, duration > 0.5s, length > 30000)
  let audioBase64 = null;
  let duration = 0;
  const deadline = Date.now() + timeoutSeconds * 1000;

  while (Date.now() < deadline) {
    await page.waitForTimeout(1000);

    const audioInfo = await page.evaluate(() => {
      const audio = document.querySelector('audio');
      const downloadBtn = document.querySelector('button.download-button, button[aria-label="Download"]');
      if (audio && audio.src && audio.src.startsWith('data:audio/wav;base64,')) {
        const b64 = audio.src.replace('data:audio/wav;base64,', '');
        // When generation is done, download button exists, duration is > 0.5s and base64 payload is complete
        if (downloadBtn && audio.duration > 0.5 && b64.length > 20000) {
          return {
            base64: b64,
            duration: audio.duration,
          };
        }
      }
      return null;
    });

    if (audioInfo && audioInfo.base64) {
      audioBase64 = audioInfo.base64;
      duration = audioInfo.duration;
      break;
    }
  }

  if (!audioBase64) {
    throw new Error(`Timeout (${timeoutSeconds}s) waiting for speech generation in AI Studio playground.`);
  }

  const audioBuffer = Buffer.from(audioBase64, 'base64');
  let finalPath = outputPath;

  if (finalPath) {
    mkdirSync(dirname(finalPath), { recursive: true });
    writeFileSync(finalPath, audioBuffer);
  }

  return {
    success: true,
    voice,
    duration,
    bytes: audioBuffer.length,
    outputPath: finalPath ? resolve(finalPath) : undefined,
    base64: finalPath ? undefined : audioBase64,
  };
}

// -------------------------------------------------------------
// MCP Server Initialization
// -------------------------------------------------------------
const server = new McpServer({
  name: 'aistudio-tts-mcp',
  version: '1.0.0',
});

// Tool: aistudio_generate_speech
server.tool(
  'aistudio_generate_speech',
  'Generate realistic speech using Google AI Studio Playground (gemini-3.8-flash-tts) by automating Chrome with the user\'s logged-in Google session.',
  {
    text: z.string().describe('Voice-over or dialogue text to speak'),
    voice: z
      .string()
      .optional()
      .default('Puck')
      .describe('Character voice name (e.g. Puck, Charon, Aoede, Kore, Fenrir, Bodi, Fola)'),
    outputPath: z
      .string()
      .optional()
      .describe('Target file path where the generated .wav file should be saved'),
    timeoutSeconds: z
      .number()
      .optional()
      .default(60)
      .describe('Timeout in seconds waiting for generation (default 60)'),
  },
  async ({ text, voice, outputPath, timeoutSeconds }) => {
    try {
      const res = await generateSpeech({ text, voice, outputPath, timeoutSeconds });
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(
              {
                status: 'success',
                message: `Audio speech generated successfully via Google AI Studio playground with voice "${res.voice}".`,
                duration_seconds: res.duration,
                bytes: res.bytes,
                output_path: res.outputPath,
              },
              null,
              2
            ),
          },
        ],
      };
    } catch (err) {
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({ status: 'error', error: err.message }, null, 2),
          },
        ],
        isError: true,
      };
    }
  }
);

// Tool: aistudio_check_status
server.tool(
  'aistudio_check_status',
  'Check status of Chrome CDP connection and Google AI Studio session.',
  {},
  async () => {
    const running = await isCdpRunning();
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(
            {
              cdp_running: running,
              cdp_port: CDP_PORT,
              profile_dir: PROFILE_DIR,
              playground_url: AI_STUDIO_URL,
              note: running
                ? 'Chrome CDP aktif dan siap digunakan untuk generate speech.'
                : 'Chrome CDP belum aktif. Panggil aistudio_launch_browser atau jalankan generate_speech untuk membuka otomatis.',
            },
            null,
            2
          ),
        },
      ],
    };
  }
);

// Tool: aistudio_launch_browser
server.tool(
  'aistudio_launch_browser',
  'Launch or open Chrome with remote debugging on port 9333 pointing to Google AI Studio Speech Playground.',
  {},
  async () => {
    await launchChromeWithCdp();
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(
            {
              status: 'success',
              cdp_port: CDP_PORT,
              url: AI_STUDIO_URL,
              message: 'Google Chrome berhasil dibuka pada playground AI Studio.',
            },
            null,
            2
          ),
        },
      ],
    };
  }
);

// Standalone CLI or MCP Server execution support
const isMain = process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url));

if (isMain) {
  if (process.argv.includes('--test')) {
    console.log('Running test CLI speech generation...');
    const out = join(homedir(), 'Desktop', 'aistudio_test.wav');
    generateSpeech({
      text: 'Halo, ini pengujian langsung MCP Google AI Studio Speech Generator.',
      voice: 'Puck',
      outputPath: out,
    })
      .then(res => {
        console.log('SUCCESS:', res);
        process.exit(0);
      })
      .catch(err => {
        console.error('FAILED:', err);
        process.exit(1);
      });
  } else {
    // Connect stdio transport for MCP protocol
    const transport = new StdioServerTransport();
    await server.connect(transport);
  }
}
