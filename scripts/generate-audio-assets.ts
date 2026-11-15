import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const SAMPLE_RATE = 48000;

function writeStereoWav(filePath: string, left: Float32Array, right: Float32Array) {
  const numSamples = left.length;
  const numChannels = 2;
  const bitsPerSample = 16;
  const byteRate = (SAMPLE_RATE * numChannels * bitsPerSample) / 8;
  const blockAlign = (numChannels * bitsPerSample) / 8;
  const dataSize = numSamples * blockAlign;
  const buffer = Buffer.alloc(44 + dataSize);

  buffer.write("RIFF", 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write("WAVE", 8);
  buffer.write("fmt ", 12);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20);
  buffer.writeUInt16LE(numChannels, 22);
  buffer.writeUInt32LE(SAMPLE_RATE, 24);
  buffer.writeUInt32LE(byteRate, 28);
  buffer.writeUInt16LE(blockAlign, 32);
  buffer.writeUInt16LE(bitsPerSample, 34);
  buffer.write("data", 36);
  buffer.writeUInt32LE(dataSize, 40);

  let offset = 44;
  for (let i = 0; i < numSamples; i++) {
    const l = Math.max(-0.98, Math.min(0.98, left[i]));
    const r = Math.max(-0.98, Math.min(0.98, right[i]));
    buffer.writeInt16LE(Math.round(l * 32767), offset);
    buffer.writeInt16LE(Math.round(r * 32767), offset + 2);
    offset += 4;
  }
  writeFileSync(filePath, buffer);
}

// Deterministic PRNG for reproducible audio synthesis
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generateImpact(outDir: string) {
  const duration = 0.85;
  const len = Math.floor(SAMPLE_RATE * duration);
  const L = new Float32Array(len);
  const R = new Float32Array(len);
  const rand = mulberry32(101);
  let phase = 0;

  for (let i = 0; i < len; i++) {
    const t = i / SAMPLE_RATE;
    const freq = 140 * Math.exp(-t * 14) + 46;
    phase += (2 * Math.PI * freq) / SAMPLE_RATE;
    const sub = Math.sin(phase) * Math.exp(-t * 4.5);
    const punch = Math.sin(2 * Math.PI * 240 * t) * Math.exp(-t * 28) * 0.5;
    const air = (rand() * 2 - 1) * Math.exp(-t * 18) * 0.35;
    const sample = (sub * 0.8 + punch + air) * 0.85;
    L[i] = sample;
    R[i] = sample;
  }
  writeStereoWav(join(outDir, "sfx", "impact.wav"), L, R);
}

function generatePop(outDir: string) {
  const duration = 0.22;
  const len = Math.floor(SAMPLE_RATE * duration);
  const L = new Float32Array(len);
  const R = new Float32Array(len);
  let phase = 0;

  for (let i = 0; i < len; i++) {
    const t = i / SAMPLE_RATE;
    const freq = 520 + 680 * Math.exp(-t * 45);
    phase += (2 * Math.PI * freq) / SAMPLE_RATE;
    const env = Math.exp(-t * 26);
    const s = Math.sin(phase) * env * 0.75;
    L[i] = s;
    R[i] = s;
  }
  writeStereoWav(join(outDir, "sfx", "pop.wav"), L, R);
}

function generateGlitch(outDir: string) {
  const duration = 0.42;
  const len = Math.floor(SAMPLE_RATE * duration);
  const L = new Float32Array(len);
  const R = new Float32Array(len);
  const rand = mulberry32(404);

  for (let i = 0; i < len; i++) {
    const t = i / SAMPLE_RATE;
    const gate = Math.floor(t * 28) % 2 === 0 ? 1 : 0.25;
    const sq = Math.sin(2 * Math.PI * (t < 0.16 ? 880 : 1320) * t) > 0 ? 1 : -1;
    const bitNoise = (rand() * 2 - 1) * 0.6;
    const env = Math.exp(-t * 7.5) * gate;
    L[i] = (sq * 0.35 + bitNoise * 0.65) * env * 0.55;
    R[i] = (sq * 0.35 - bitNoise * 0.65) * env * 0.55;
  }
  writeStereoWav(join(outDir, "sfx", "glitch.wav"), L, R);
}

function generateKeyboardTyping(outDir: string) {
  const duration = 2.4;
  const len = Math.floor(SAMPLE_RATE * duration);
  const L = new Float32Array(len);
  const R = new Float32Array(len);
  const rand = mulberry32(888);

  // Trigger rapid mechanical keystrokes at realistic irregular intervals
  let cursor = Math.floor(0.05 * SAMPLE_RATE);
  while (cursor < len - Math.floor(0.08 * SAMPLE_RATE)) {
    const pitch = 950 + rand() * 850;
    const pan = 0.35 + rand() * 0.3;
    const clickLen = Math.floor(0.035 * SAMPLE_RATE);
    for (let j = 0; j < clickLen && cursor + j < len; j++) {
      const jt = j / SAMPLE_RATE;
      const body = Math.sin(2 * Math.PI * pitch * jt) * Math.exp(-jt * 160);
      const thock = Math.sin(2 * Math.PI * 220 * jt) * Math.exp(-jt * 110) * 0.6;
      const transient = (rand() * 2 - 1) * Math.exp(-jt * 280) * 0.8;
      const s = (body * 0.45 + thock + transient * 0.55) * 0.55;
      L[cursor + j] += s * (1 - pan * 0.3);
      R[cursor + j] += s * (0.7 + pan * 0.3);
    }
    const stepMs = 75 + rand() * 95;
    cursor += Math.floor((stepMs / 1000) * SAMPLE_RATE);
  }
  writeStereoWav(join(outDir, "sfx", "keyboard-typing.wav"), L, R);
}

function generateCorporateTechBGM(outDir: string) {
  // 120 BPM => 0.5s per beat, 2.0s per bar. 8 bars = 16.0s seamless loop.
  const bpm = 120;
  const beatSec = 60 / bpm;
  const duration = 16.0;
  const len = Math.floor(SAMPLE_RATE * duration);
  const L = new Float32Array(len);
  const R = new Float32Array(len);
  const rand = mulberry32(2026);

  // Clean uplifting progression: Am9 -> Fmaj7 -> Cmaj9 -> G6
  const chords = [
    [220.0, 261.63, 329.63, 392.0, 493.88], // Am9
    [174.61, 220.0, 261.63, 329.63, 392.0], // Fmaj7
    [130.81, 196.0, 246.94, 293.66, 329.63], // Cmaj9
    [196.0, 246.94, 293.66, 329.63, 392.0], // G6
  ];
  const bassRoots = [110.0, 87.31, 65.41, 98.0];
  const arpOrder = [0, 2, 1, 3, 2, 4, 3, 1];

  // Lowpass state for smooth warm pad + bass
  let padLpL = 0;
  let padLpR = 0;

  for (let i = 0; i < len; i++) {
    const t = i / SAMPLE_RATE;
    const bar = Math.floor(t / 4.0) % 4;
    const chord = chords[bar];
    const bassFreq = bassRoots[bar];
    const beatPos = (t % beatSec) / beatSec;
    const sixteenthIdx = Math.floor(t / (beatSec / 4));
    const sixteenthPos = (t % (beatSec / 4)) / (beatSec / 4);

    // Sidechain ducking on quarter-note beats
    const sidechain = 0.45 + 0.55 * Math.min(1, beatPos * 2.2);

    // 1. Soft punchy electronic kick on every beat
    const kickEnv = Math.exp(-beatPos * 14);
    const kickFreq = 48 + 85 * Math.exp(-beatPos * 22);
    const kick = Math.sin(2 * Math.PI * kickFreq * (t % beatSec)) * kickEnv * 0.42;

    // 2. Crisp light hi-hat on 8th-note offbeats
    const eighthPos = (t % (beatSec / 2)) / (beatSec / 2);
    const isOffbeat = Math.floor(t / (beatSec / 2)) % 2 === 1;
    const hatAmp = isOffbeat ? 0.08 : 0.03;
    const hat = (rand() * 2 - 1) * Math.exp(-eighthPos * 24) * hatAmp;

    // 3. Soft clap/snap on beats 2 & 4
    const twoBarBeat = Math.floor(t / beatSec) % 4;
    const clapEnv = twoBarBeat === 1 || twoBarBeat === 3 ? Math.exp(-beatPos * 18) : 0;
    const clap = (rand() * 2 - 1) * clapEnv * 0.1;

    // 4. Warm sub/pulse bass on 8th notes
    const bassEnv = Math.exp(-eighthPos * 5.5) * sidechain;
    const bass =
      (Math.sin(2 * Math.PI * bassFreq * t) * 0.7 +
        Math.sin(2 * Math.PI * bassFreq * 2 * t) * 0.2) *
      bassEnv *
      0.24;

    // 5. Modern corporate tech pluck arpeggio (16th-note pulse)
    const arpNote = chord[arpOrder[sixteenthIdx % arpOrder.length]];
    const arpEnv = Math.exp(-sixteenthPos * 7.0) * sidechain;
    const arpSig =
      (Math.sin(2 * Math.PI * arpNote * t) * 0.75 +
        Math.sin(2 * Math.PI * arpNote * 2 * t) * 0.18) *
      arpEnv *
      0.16;

    // 6. Warm stereo pad
    let padSumL = 0;
    let padSumR = 0;
    for (let k = 0; k < 4; k++) {
      const f = chord[k];
      padSumL += Math.sin(2 * Math.PI * (f * 0.998) * t + k);
      padSumR += Math.sin(2 * Math.PI * (f * 1.002) * t + k * 0.7);
    }
    padLpL = padLpL * 0.96 + (padSumL * 0.04 * sidechain) * 0.08;
    padLpR = padLpR * 0.96 + (padSumR * 0.04 * sidechain) * 0.08;

    const arpPan = sixteenthIdx % 2 === 0 ? 0.65 : 0.35;
    L[i] = kick + bass + hat * 0.9 + clap + padLpL + arpSig * arpPan;
    R[i] = kick + bass + hat * 1.1 + clap + padLpR + arpSig * (1 - arpPan);
  }

  // Tiny 15ms crossfade at loop boundaries for zero click
  const fadeSamples = Math.floor(0.015 * SAMPLE_RATE);
  for (let i = 0; i < fadeSamples; i++) {
    const g = i / fadeSamples;
    L[i] *= g;
    R[i] *= g;
    L[len - 1 - i] *= g;
    R[len - 1 - i] *= g;
  }

  writeStereoWav(join(outDir, "bgm", "tech-corporate-loop.wav"), L, R);
}

const audioOut = join(process.cwd(), "public", "audio");
mkdirSync(join(audioOut, "sfx"), { recursive: true });
mkdirSync(join(audioOut, "bgm"), { recursive: true });

generateImpact(audioOut);
generatePop(audioOut);
generateGlitch(audioOut);
generateKeyboardTyping(audioOut);
generateCorporateTechBGM(audioOut);
console.log("Generated procedural SFX and corporate electronic tech BGM in public/audio!");

