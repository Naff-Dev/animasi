import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  buildAccountsCurlSnippet,
  buildCreatePostCurlSnippet,
  clearServerLogs,
  deleteTebarPost,
  fetchAccounts,
  fetchEpisodes,
  fetchHealth,
  fetchMediaLibrary,
  fetchPosts,
  fetchYouTubeQuota,
  formatBytes,
  generateUuid,
  getDefaultScheduleInputValue,
  publishTebarPost,
  retryTebarPost,
  subscribeActivityLogs,
  uploadCustomFileToTebar,
  uploadEpisodeVideoToTebar,
} from "./api";
import { AccountsSelector } from "./components/AccountsSelector";
import { ActivityLogPanel } from "./components/ActivityLogPanel";
import { ConfirmPublishModal } from "./components/ConfirmPublishModal";
import { PostsHistoryPanel } from "./components/PostsHistoryPanel";
import { ComponentErrorBoundary } from "./ComponentErrorBoundary";
import {
  CalendarIcon,
  CheckIcon,
  CopyIcon,
  RefreshIcon,
  SendIcon,
  TerminalIcon,
  TrashIcon,
  UploadIcon,
  VideoIcon,
} from "./icons";
import {
  PLATFORM_LIMITS,
  type ActivityLogEntry,
  type AsyncState,
  type CreatePostPayload,
  type EpisodePublishItem,
  type ServerHealthResponse,
  type TebarAccount,
  type TebarMedia,
  type TebarPostRecord,
  type UploadProgressSnapshot,
  type YouTubeUploadQuota,
} from "./types";

type CaptionTab = "main" | "threads" | "youtube";

function formatYouTubeShortsTitle(rawTitle: string, appendShortsTag: boolean): string {
  const base = rawTitle.trim();
  if (!base) return "";
  if (!appendShortsTag) return base.slice(0, 100);
  if (/#shorts\b/i.test(base)) return base.slice(0, 100);
  const suffix = " #Shorts";
  const maxBase = 100 - suffix.length;
  return `${base.slice(0, maxBase).trimEnd()}${suffix}`;
}

function parseYouTubeTags(rawTags: string): string[] {
  return rawTags
    .split(/[,\n]/)
    .map((tag) => tag.replace(/^#/, "").trim())
    .filter(Boolean)
    .slice(0, 15);
}

function extractEpisodeNumberFromName(name?: string | null): string | null {
  if (!name) return null;
  const match = name.match(/(?:^|[^A-Z0-9])EP(\d{2})(?:[^A-Z0-9]|$)/i);
  return match ? match[1] : null;
}

function isMismatchedEpisodeMedia(media: TebarMedia, episode: EpisodePublishItem): boolean {
  const mediaEp = extractEpisodeNumberFromName(media.original_name);
  return Boolean(mediaEp && mediaEp !== episode.episodeNumber);
}

interface ToastMessage {
  id: string;
  kind: "success" | "error" | "info";
  text: string;
}

export const SocialPublisherApp: React.FC = () => {
  const [health, setHealth] = useState<ServerHealthResponse | null>(null);
  const [episodesState, setEpisodesState] = useState<AsyncState<EpisodePublishItem[]>>({
    status: "loading",
  });
  const [accountsState, setAccountsState] = useState<AsyncState<TebarAccount[]>>({
    status: "loading",
  });
  const [postsState, setPostsState] = useState<AsyncState<TebarPostRecord[]>>({
    status: "loading",
  });

  const [selectedEpisodeId, setSelectedEpisodeId] = useState<string>("");
  const [selectedAccountIds, setSelectedAccountIds] = useState<string[]>([]);
  const [showVideoPlayer, setShowVideoPlayer] = useState<boolean>(false);

  const [activeCaptionTab, setActiveCaptionTab] = useState<CaptionTab>("main");
  const [mainCaption, setMainCaption] = useState<string>("");
  const [threadsOverrideEnabled, setThreadsOverrideEnabled] = useState<boolean>(true);
  const [threadsCaption, setThreadsCaption] = useState<string>("");
  const [igFormat, setIgFormat] = useState<"feed" | "story">("feed");
  const [igShareToFeed, setIgShareToFeed] = useState<boolean>(true);
  const [firstComment, setFirstComment] = useState<string>("");

  const [fbVideoAs, setFbVideoAs] = useState<"reel" | "video">("reel");
  const [fbFirstComment, setFbFirstComment] = useState<string>("");
  const [fbLink, setFbLink] = useState<string>("");

  const [ytTitle, setYtTitle] = useState<string>("");
  const [ytIncludeShortsTagInTitle, setYtIncludeShortsTagInTitle] = useState<boolean>(true);
  const [ytDescriptionOverrideEnabled, setYtDescriptionOverrideEnabled] = useState<boolean>(true);
  const [ytDescription, setYtDescription] = useState<string>("");
  const [ytPrivacy, setYtPrivacy] = useState<"public" | "unlisted" | "private">("public");
  const [ytCategoryId, setYtCategoryId] = useState<string>("28");
  const [ytTagsInput, setYtTagsInput] = useState<string>("Shorts, ITSupport, ErrorTerus, FaktaITSupport");
  const [ytMadeForKids, setYtMadeForKids] = useState<boolean>(false);
  const [ytSyntheticMedia, setYtSyntheticMedia] = useState<boolean>(true);
  const [ytNotifySubscribers, setYtNotifySubscribers] = useState<boolean>(true);
  const [ytQuota, setYtQuota] = useState<YouTubeUploadQuota | null>(null);

  const [attachedMedia, setAttachedMedia] = useState<TebarMedia[]>([]);
  const [libraryMedia, setLibraryMedia] = useState<TebarMedia[]>([]);
  const [isUploadingMedia, setIsUploadingMedia] = useState<boolean>(false);
  const [uploadingEpisodeId, setUploadingEpisodeId] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [activityLogs, setActivityLogs] = useState<ActivityLogEntry[]>([]);
  const [streamConnected, setStreamConnected] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<UploadProgressSnapshot | null>(null);

  const [scheduleEnabled, setScheduleEnabled] = useState<boolean>(false);
  const [scheduleInput, setScheduleInput] = useState<string>(getDefaultScheduleInputValue);
  const [idempotencyKey, setIdempotencyKey] = useState<string>(() => generateUuid());
  const [showCurlInspector, setShowCurlInspector] = useState<boolean>(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const [confirmOpen, setConfirmOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const toastTimerRef = useRef<number | null>(null);
  const selectedEpisodeIdRef = useRef<string>("");

  const showToast = useCallback((kind: ToastMessage["kind"], text: string) => {
    if (toastTimerRef.current !== null) {
      window.clearTimeout(toastTimerRef.current);
    }
    setToast({ id: String(Date.now()), kind, text });
    toastTimerRef.current = window.setTimeout(() => {
      setToast(null);
    }, 5200);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current !== null) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const applyEpisodeToComposer = useCallback((episode: EpisodePublishItem) => {
    const previousId = selectedEpisodeIdRef.current;
    const isSwitchingEpisode = Boolean(previousId && previousId !== episode.id);
    selectedEpisodeIdRef.current = episode.id;
    setSelectedEpisodeId(episode.id);
    if (isSwitchingEpisode) {
      setAttachedMedia((prev) => prev.filter((item) => !isMismatchedEpisodeMedia(item, episode)));
      setUploadError(null);
      setUploadProgress(null);
    }
    setMainCaption(episode.socialCaption.instagramReels);
    setThreadsCaption(episode.socialCaption.threads);
    const defaultComment = episode.socialCaption.firstComment ?? "";
    setFirstComment(defaultComment);
    setFbFirstComment(defaultComment);
    setYtTitle(
      episode.socialCaption.youtubeShorts?.title ??
        `${episode.title} (Fakta IT Support #${episode.episodeNumber})`,
    );
    setYtDescription(
      episode.socialCaption.youtubeShorts?.description ??
        `${episode.socialCaption.instagramReels}\n\n#Shorts`,
    );
    setYtTagsInput(
      [
        "Shorts",
        ...episode.socialCaption.hashtags.map((tag) => tag.replace(/^#/, "")),
      ]
        .slice(0, 12)
        .join(", "),
    );
    setIdempotencyKey(generateUuid());
  }, []);

  const loadHealthAndEpisodes = useCallback(async () => {
    setEpisodesState({ status: "loading" });
    const [healthRes, epsRes] = await Promise.allSettled([
      fetchHealth(),
      fetchEpisodes(),
    ]);
    setHealth(healthRes.status === "fulfilled" ? healthRes.value : null);

    if (epsRes.status === "rejected") {
      setEpisodesState({
        status: "error",
        message:
          epsRes.reason instanceof Error
            ? epsRes.reason.message
            : "Gagal memuat daftar episode.",
      });
      return;
    }
    const eps = epsRes.value;
    if (eps.length === 0) {
      setEpisodesState({
        status: "empty",
        message: "Belum ada episode terdaftar di src/data/episodes/index.ts.",
      });
      return;
    }
    setEpisodesState({ status: "success", data: eps });
    const currentSelected = selectedEpisodeIdRef.current
      ? eps.find((item) => item.id === selectedEpisodeIdRef.current)
      : undefined;
    if (!currentSelected) {
      // On initial load, pre-select the latest rendered episode (e.g. EP 02)
      const latestRendered = [...eps].reverse().find((item) => item.videoExists);
      applyEpisodeToComposer(latestRendered ?? eps[eps.length - 1] ?? eps[0]);
    }
  }, [applyEpisodeToComposer]);

  const loadAccounts = useCallback(async () => {
    setAccountsState({ status: "loading" });
    try {
      const accounts = await fetchAccounts();
      if (accounts.length === 0) {
        setAccountsState({
          status: "empty",
          message: "Hubungkan akun Instagram, Threads, atau platform lain di dashboard Tebar.",
        });
        return;
      }
      setAccountsState({ status: "success", data: accounts });
      setSelectedAccountIds((prev) => {
        if (prev.length > 0) return prev;
        return accounts
          .filter((a) => a.status === "active" && !a.plan_suspended)
          .map((a) => a.id);
      });
    } catch (err) {
      setAccountsState({
        status: "error",
        message: err instanceof Error ? err.message : "Gagal terhubung ke Tebar /v1/accounts.",
      });
    }
  }, []);

  const appendClientLog = useCallback(
    (
      level: ActivityLogEntry["level"],
      stage: ActivityLogEntry["stage"],
      message: string,
      detail?: string,
    ) => {
      setActivityLogs((prev) => [
        ...prev.slice(-249),
        {
          id: generateUuid(),
          ts: new Date().toISOString(),
          level,
          stage,
          message,
          ...(detail ? { detail } : {}),
        },
      ]);
    },
    [],
  );

  const loadMediaLibrary = useCallback(async () => {
    try {
      const items = await fetchMediaLibrary(8);
      setLibraryMedia(items.filter((m) => m.status === "ready"));
    } catch {
      // Optional library list; ignore silently if key not ready
    }
  }, []);

  const loadPosts = useCallback(async () => {
    setPostsState({ status: "loading" });
    try {
      const posts = await fetchPosts(15);
      if (posts.length === 0) {
        setPostsState({
          status: "empty",
          message: "Belum ada postingan di workspace ini. Kirim postingan pertamamu di panel kiri.",
        });
        return;
      }
      setPostsState({ status: "success", data: posts });
    } catch (err) {
      setPostsState({
        status: "error",
        message: err instanceof Error ? err.message : "Gagal memuat riwayat post Tebar.",
      });
    }
  }, []);

  useEffect(() => {
    void loadHealthAndEpisodes();
    void loadAccounts();
    void loadPosts();
    void loadMediaLibrary();
  }, [loadAccounts, loadHealthAndEpisodes, loadMediaLibrary, loadPosts]);

  useEffect(() => {
    const unsubscribe = subscribeActivityLogs({
      onConnectionChange: setStreamConnected,
      onInit: ({ logs, uploadProgress: snap }) => {
        setActivityLogs(logs);
        if (snap) {
          setUploadProgress(snap);
        }
      },
      onLog: (entry) => {
        setActivityLogs((prev) =>
          prev.some((existing) => existing.id === entry.id)
            ? prev
            : [...prev.slice(-249), entry],
        );
      },
      onUploadProgress: (snap) => {
        setUploadProgress(snap);
      },
    });
    return unsubscribe;
  }, []);

  const hasPublishingPost = useMemo(() => {
    if (postsState.status !== "success") return false;
    return postsState.data.some((p) => p.status === "publishing");
  }, [postsState]);

  useEffect(() => {
    if (!hasPublishingPost) return;
    let cancelled = false;
    const timer = window.setInterval(async () => {
      if (cancelled) return;
      try {
        const latest = await fetchPosts(15);
        if (cancelled) return;
        setPostsState(
          latest.length === 0
            ? {
                status: "empty",
                message: "Belum ada postingan di workspace ini.",
              }
            : { status: "success", data: latest },
        );
        const stillPublishing = latest.some((p) => p.status === "publishing");
        if (!stillPublishing) {
          appendClientLog(
            "success",
            "posts",
            "Semua antrian 'publishing' selesai diproses oleh Tebar.",
          );
        }
      } catch {
        // retry on next interval
      }
    }, 3500);
    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, [appendClientLog, hasPublishingPost]);

  const handleClearLogs = useCallback(async () => {
    setActivityLogs([]);
    setUploadProgress(null);
    try {
      await clearServerLogs();
    } catch {
      // ignore if stream disconnected
    }
  }, []);

  const activeEpisode = useMemo(() => {
    if (episodesState.status !== "success") return null;
    return episodesState.data.find((e) => e.id === selectedEpisodeId) ?? episodesState.data[0] ?? null;
  }, [episodesState, selectedEpisodeId]);

  const selectedAccounts = useMemo(() => {
    if (accountsState.status !== "success") return [];
    return accountsState.data.filter((a) => selectedAccountIds.includes(a.id));
  }, [accountsState, selectedAccountIds]);

  const hasInstagramTarget = useMemo(
    () => selectedAccounts.some((a) => a.platform === "instagram"),
    [selectedAccounts],
  );
  const hasThreadsTarget = useMemo(
    () => selectedAccounts.some((a) => a.platform === "threads"),
    [selectedAccounts],
  );
  const hasFacebookTarget = useMemo(
    () => selectedAccounts.some((a) => a.platform === "facebook"),
    [selectedAccounts],
  );
  const hasYouTubeTarget = useMemo(
    () => selectedAccounts.some((a) => a.platform === "youtube"),
    [selectedAccounts],
  );

  useEffect(() => {
    if (!hasYouTubeTarget) return;
    let cancelled = false;
    void fetchYouTubeQuota().then((quota) => {
      if (!cancelled && quota) {
        setYtQuota(quota);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [hasYouTubeTarget]);

  const resolvedYtTitle = useMemo(
    () =>
      formatYouTubeShortsTitle(
        ytTitle || activeEpisode?.title || "Satu Hari Satu Fakta IT Support",
        ytIncludeShortsTagInTitle,
      ),
    [activeEpisode?.title, ytIncludeShortsTagInTitle, ytTitle],
  );

  const resolvedYtDescription = useMemo(() => {
    const base = ytDescriptionOverrideEnabled && ytDescription.trim()
      ? ytDescription.trim()
      : mainCaption.trim();
    if (!base) return "";
    if (ytIncludeShortsTagInTitle && !/#shorts\b/i.test(base)) {
      return `${base}\n\n#Shorts`.slice(0, PLATFORM_LIMITS.youtube.maxChars);
    }
    return base.slice(0, PLATFORM_LIMITS.youtube.maxChars);
  }, [mainCaption, ytDescription, ytDescriptionOverrideEnabled, ytIncludeShortsTagInTitle]);

  const scheduledAtIso = useMemo(() => {
    if (!scheduleEnabled || !scheduleInput) return null;
    const ms = Date.parse(scheduleInput);
    if (Number.isNaN(ms)) return null;
    return new Date(ms).toISOString();
  }, [scheduleEnabled, scheduleInput]);

  const postPayload = useMemo<CreatePostPayload>(() => {
    const mediaIds = attachedMedia.map((m) => m.id);
    const targets = selectedAccounts.map((acc) => {
      if (acc.platform === "instagram") {
        const igOptions: Record<string, unknown> = { format: igFormat };
        if (igFormat === "feed") {
          igOptions.share_to_feed = igShareToFeed;
        }
        if (firstComment.trim() && igFormat === "feed") {
          igOptions.first_comment = firstComment.trim().slice(0, 2200);
        }
        return {
          account_id: acc.id,
          options: igOptions,
        };
      }
      if (acc.platform === "threads") {
        const customContent =
          threadsOverrideEnabled && threadsCaption.trim() ? threadsCaption.trim() : undefined;
        return {
          account_id: acc.id,
          ...(customContent ? { content: customContent } : {}),
        };
      }
      if (acc.platform === "facebook") {
        const fbOptions: Record<string, unknown> = {
          video_as: fbVideoAs,
        };
        if (fbFirstComment.trim()) {
          fbOptions.first_comment = fbFirstComment.trim().slice(0, 8000);
        }
        if (fbLink.trim()) {
          fbOptions.link = fbLink.trim();
        }
        return {
          account_id: acc.id,
          options: fbOptions,
        };
      }
      if (acc.platform === "youtube") {
        const parsedTags = parseYouTubeTags(ytTagsInput);
        return {
          account_id: acc.id,
          ...(resolvedYtDescription ? { content: resolvedYtDescription } : {}),
          options: {
            title: resolvedYtTitle,
            made_for_kids: ytMadeForKids,
            privacy: ytPrivacy,
            ...(ytCategoryId ? { category_id: ytCategoryId } : {}),
            ...(parsedTags.length > 0 ? { tags: parsedTags } : {}),
            contains_synthetic_media: ytSyntheticMedia,
            notify_subscribers: ytNotifySubscribers,
          },
        };
      }
      return { account_id: acc.id };
    });

    return {
      content: mainCaption.trim(),
      ...(mediaIds.length > 0 ? { media_ids: mediaIds } : {}),
      ...(scheduledAtIso ? { scheduled_at: scheduledAtIso } : {}),
      targets,
    };
  }, [
    attachedMedia,
    fbFirstComment,
    fbLink,
    fbVideoAs,
    firstComment,
    igFormat,
    igShareToFeed,
    mainCaption,
    resolvedYtDescription,
    resolvedYtTitle,
    scheduledAtIso,
    selectedAccounts,
    threadsCaption,
    threadsOverrideEnabled,
    ytCategoryId,
    ytMadeForKids,
    ytNotifySubscribers,
    ytPrivacy,
    ytSyntheticMedia,
    ytTagsInput,
  ]);

  const handleToggleAccount = (accountId: string) => {
    setSelectedAccountIds((prev) =>
      prev.includes(accountId) ? prev.filter((id) => id !== accountId) : [...prev, accountId],
    );
  };

  const handleSelectAllActive = () => {
    if (accountsState.status !== "success") return;
    setSelectedAccountIds(
      accountsState.data
        .filter((a) => a.status === "active" && !a.plan_suspended)
        .map((a) => a.id),
    );
  };

  const handleCopyText = async (key: string, value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      showToast("success", `${label} berhasil disalin.`);
      window.setTimeout(() => setCopiedKey(null), 1800);
    } catch {
      showToast("error", "Clipboard tidak diizinkan browser.");
    }
  };

  const handleToggleHashtag = (tag: string) => {
    setMainCaption((prev) => {
      if (prev.includes(tag)) {
        return prev
          .replace(new RegExp(`\\s*${tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "g"), "")
          .trim();
      }
      const sep = prev.endsWith("\n") || prev.length === 0 ? "" : " ";
      return `${prev}${sep}${tag}`;
    });
  };

  const handleUploadEpisodeMedia = async (targetEpisode: EpisodePublishItem) => {
    if (isUploadingMedia) return;
    if (targetEpisode.id !== selectedEpisodeIdRef.current) {
      applyEpisodeToComposer(targetEpisode);
    }
    const jobId = generateUuid();
    setUploadingEpisodeId(targetEpisode.id);
    setIsUploadingMedia(true);
    setUploadError(null);
    setUploadProgress({
      jobId,
      fileName: targetEpisode.videoFile,
      totalBytes: targetEpisode.videoSizeBytes,
      uploadedBytes: 0,
      percent: 1,
      phase: "reading",
      statusText: `Memulai upload EP${targetEpisode.episodeNumber} ke proxy lokal...`,
      updatedAt: new Date().toISOString(),
    });
    appendClientLog(
      "info",
      "upload",
      `Meminta server mengupload ${targetEpisode.videoFile} (${formatBytes(targetEpisode.videoSizeBytes)})...`,
    );
    try {
      const uploaded = await uploadEpisodeVideoToTebar(targetEpisode.id, jobId);
      setAttachedMedia((prev) => [
        ...prev.filter((m) => m.id !== uploaded.id && !isMismatchedEpisodeMedia(m, targetEpisode)),
        uploaded,
      ]);
      void loadMediaLibrary();
      showToast(
        "success",
        `Video EP${targetEpisode.episodeNumber} siap dilampirkan (${uploaded.status}).`,
      );
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Upload video episode gagal.";
      setUploadError(msg);
      appendClientLog("error", "upload", `Upload video gagal: ${msg}`);
      showToast("error", msg);
    } finally {
      setIsUploadingMedia(false);
      setUploadingEpisodeId(null);
    }
  };

  const handleCustomFilePick = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file || isUploadingMedia) return;
    const isImage = file.type.startsWith("image/");
    const maxBytes = isImage ? 8 * 1024 * 1024 : 300 * 1024 * 1024;
    if (file.size > maxBytes) {
      const msg = isImage
        ? "Ukuran gambar melebihi batas 8 MB Tebar API."
        : "Ukuran video melebihi batas maksimum 300 MB Tebar API.";
      setUploadError(msg);
      appendClientLog("error", "upload", msg, `file=${file.name}`);
      showToast("error", msg);
      return;
    }
    const jobId = generateUuid();
    setIsUploadingMedia(true);
    setUploadError(null);
    setUploadProgress({
      jobId,
      fileName: file.name,
      totalBytes: file.size,
      uploadedBytes: 0,
      percent: 1,
      phase: "client_transfer",
      statusText: "Mengirim file dari browser ke server lokal...",
      updatedAt: new Date().toISOString(),
    });
    appendClientLog(
      "info",
      "upload",
      `Mengirim file "${file.name}" (${formatBytes(file.size)}) dari browser ke proxy lokal...`,
    );
    try {
      const uploaded = await uploadCustomFileToTebar(file, jobId, (loaded, total) => {
        const pct = Math.min(99, Math.round((loaded / Math.max(1, total)) * 100));
        setUploadProgress((prev) =>
          prev && prev.jobId === jobId && prev.phase === "client_transfer"
            ? {
                ...prev,
                uploadedBytes: loaded,
                percent: Math.round(pct * 0.15),
                statusText: `Transfer browser -> proxy lokal: ${pct}%`,
                updatedAt: new Date().toISOString(),
              }
            : prev,
        );
      });
      setAttachedMedia((prev) => [...prev.filter((m) => m.id !== uploaded.id), uploaded]);
      void loadMediaLibrary();
      showToast("success", `${file.name} berhasil diupload (${uploaded.status}).`);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Gagal mengupload file.";
      setUploadError(msg);
      appendClientLog("error", "upload", `Upload "${file.name}" gagal: ${msg}`);
      showToast("error", msg);
    } finally {
      setIsUploadingMedia(false);
    }
  };

  const validationError = useMemo(() => {
    if (selectedAccounts.length === 0) {
      return "Pilih minimal satu akun sosial media tujuan.";
    }
    if (activeEpisode) {
      const mismatchedVideo = attachedMedia.find((m) =>
        isMismatchedEpisodeMedia(m, activeEpisode),
      );
      if (mismatchedVideo) {
        const videoEp = extractEpisodeNumberFromName(mismatchedVideo.original_name) ?? "?";
        return `Video terlampir (${mismatchedVideo.original_name}) adalah EP ${videoEp}, sedangkan episode terpilih adalah EP ${activeEpisode.episodeNumber}. Upload MP4 EP ${activeEpisode.episodeNumber} terlebih dahulu.`;
      }
    }
    if (!mainCaption.trim() && attachedMedia.length === 0) {
      return "Tulis caption atau lampirkan video episode terlebih dahulu.";
    }
    if (hasInstagramTarget && attachedMedia.length === 0) {
      return `Instagram membutuhkan minimal 1 video/gambar terlampir. Klik 'Upload EP ${activeEpisode?.episodeNumber ?? ""} (Terpilih)' di Panel Episode atau Lampiran Media.`;
    }
    if (hasYouTubeTarget) {
      const hasVideo = attachedMedia.some((m) => m.type === "video");
      if (!hasVideo) {
        return "YouTube Shorts membutuhkan minimal 1 file video MP4 terlampir. Upload MP4 episode di Panel 1 terlebih dahulu.";
      }
      if (!resolvedYtTitle.trim()) {
        return "Judul YouTube Shorts wajib diisi (1-100 karakter).";
      }
    }
    if (hasFacebookTarget && fbLink.trim() && !/^https?:\/\//i.test(fbLink.trim())) {
      return "Tautan pendukung Facebook harus diawali http:// atau https://.";
    }
    if (
      hasThreadsTarget &&
      ((threadsOverrideEnabled ? threadsCaption : mainCaption).trim().length >
        PLATFORM_LIMITS.threads.maxChars)
    ) {
      return `Caption Threads melebihi batas ${PLATFORM_LIMITS.threads.maxChars} karakter.`;
    }
    if (scheduleEnabled && (!scheduledAtIso || Date.parse(scheduledAtIso) < Date.now())) {
      return "Pilih tanggal dan jam jadwal di masa depan.";
    }
    return null;
  }, [
    activeEpisode,
    attachedMedia,
    fbLink,
    hasFacebookTarget,
    hasInstagramTarget,
    hasThreadsTarget,
    hasYouTubeTarget,
    mainCaption,
    resolvedYtTitle,
    scheduleEnabled,
    scheduledAtIso,
    selectedAccounts.length,
    threadsCaption,
    threadsOverrideEnabled,
  ]);

  const handleOpenConfirm = () => {
    if (validationError) {
      showToast("error", validationError);
      return;
    }
    setConfirmOpen(true);
  };

  const handleConfirmPublish = async () => {
    if (isSubmitting || validationError) return;
    setIsSubmitting(true);
    try {
      const created = await publishTebarPost(postPayload, idempotencyKey);
      setConfirmOpen(false);
      setIdempotencyKey(generateUuid());
      showToast(
        "success",
        created.status === "scheduled"
          ? "Postingan berhasil dijadwalkan di Tebar."
          : "Postingan berhasil dikirim ke antrian Tebar.",
      );
      await loadPosts();
    } catch (err) {
      showToast(
        "error",
        err instanceof Error ? err.message : "Gagal mengirim postingan ke Tebar API.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRetryPost = async (postId: string) => {
    try {
      await retryTebarPost(postId);
      showToast("success", "Permintaan kirim ulang dikirim ke Tebar.");
      await loadPosts();
    } catch (err) {
      showToast("error", err instanceof Error ? err.message : "Gagal retry postingan.");
    }
  };

  const handleDeletePost = async (postId: string) => {
    try {
      await deleteTebarPost(postId);
      showToast("success", "Postingan terjadwal dibatalkan.");
      await loadPosts();
    } catch (err) {
      showToast("error", err instanceof Error ? err.message : "Gagal membatalkan post.");
    }
  };

  const currentCaptionText =
    activeCaptionTab === "threads"
      ? threadsCaption
      : activeCaptionTab === "youtube"
        ? resolvedYtDescription
        : mainCaption;
  const igCharCount = mainCaption.length;
  const threadsCharCount = (threadsOverrideEnabled ? threadsCaption : mainCaption).length;
  const youtubeCharCount = resolvedYtDescription.length;

  const targetModeLabels = useMemo(() => {
    const map: Record<string, string> = {};
    for (const acc of selectedAccounts) {
      if (acc.platform === "instagram") {
        map[acc.id] = igFormat === "story" ? "Story" : "Reels";
      } else if (acc.platform === "facebook") {
        map[acc.id] = fbVideoAs === "reel" ? "Reels" : "Video Feed";
      } else if (acc.platform === "youtube") {
        map[acc.id] = `Shorts (${ytPrivacy})`;
      } else if (acc.platform === "threads" && threadsOverrideEnabled) {
        map[acc.id] = "Caption Khusus";
      }
    }
    return map;
  }, [fbVideoAs, igFormat, selectedAccounts, threadsOverrideEnabled, ytPrivacy]);

  return (
    <div className="app-shell">
      <header className="top-bar">
        <div className="top-bar-inner">
          <div className="brand-block">
            <img
              src="/assets/character-preview.png"
              alt="Maskot 3D IT Support Specialist"
              className="brand-avatar"
              width={48}
              height={48}
            />
            <div className="min-w-0">
              <div className="brand-kicker">ERROR TERUS STUDIO / TEBAR API V1</div>
              <h1 className="page-title">Halaman Posting Sosmed</h1>
            </div>
          </div>

          <nav className="top-nav" aria-label="Navigasi Studio">
            <div className={`api-pill ${health?.apiKeyConfigured ? "api-ok" : "api-warn"}`}>
              <span className="api-dot" aria-hidden="true" />
              <span>
                {health?.apiKeyConfigured
                  ? `Tebar API Aktif (${health.apiKeyHint})`
                  : "Menunggu TEBAR_API_KEY .env"}
              </span>
            </div>

            <a
              href="http://localhost:3000/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              Remotion Studio
            </a>

            <a
              href="http://localhost:4173/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              Viewer 3D 360°
            </a>
          </nav>
        </div>
      </header>

      {toast && (
        <div
          className={`toast-banner toast-${toast.kind}`}
          role="status"
          aria-live="polite"
        >
          <span>{toast.text}</span>
          <button
            type="button"
            className="toast-close"
            onClick={() => setToast(null)}
            aria-label="Tutup notifikasi"
          >
            Tutup
          </button>
        </div>
      )}

      <main className="main-grid">
        <div className="composer-col">
          {/* PANEL 1: EPISODE & VIDEO READY */}
          <ComponentErrorBoundary title="Panel Episode Bermasalah" onReset={loadHealthAndEpisodes}>
            <section className="panel" aria-labelledby="episodes-heading">
              <div className="panel-head">
                <div className="min-w-0">
                  <h2 id="episodes-heading" className="panel-title">
                    1. Episode & Caption Otomatis
                  </h2>
                  <p className="muted-copy">
                    Pilih episode untuk memuat video render + caption Reels & Threads siap pakai.
                  </p>
                </div>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={loadHealthAndEpisodes}
                >
                  <RefreshIcon size={15} />
                  <span>Scan Episode</span>
                </button>
              </div>

              {episodesState.status === "loading" && (
                <div className="skeleton-card" aria-busy="true" />
              )}

              {episodesState.status === "error" && (
                <div className="state-box state-error" role="alert">
                  <p className="state-title">Gagal memuat episode</p>
                  <p className="muted-copy">{episodesState.message}</p>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={loadHealthAndEpisodes}
                  >
                    Coba Lagi
                  </button>
                </div>
              )}

              {episodesState.status === "empty" && (
                <div className="state-box" role="status">
                  <p className="state-title">Belum ada episode</p>
                  <p className="muted-copy">{episodesState.message}</p>
                </div>
              )}

              {episodesState.status === "success" && (
                <div className="episode-list">
                  {episodesState.data.map((ep) => {
                    const active = ep.id === activeEpisode?.id;
                    const isUploadingThisEp = isUploadingMedia && uploadingEpisodeId === ep.id;
                    return (
                      <div
                        key={ep.id}
                        className={`episode-card ${active ? "is-active" : ""}`}
                      >
                        <div
                          className="episode-main episode-select-main"
                          onClick={() => {
                            if (!active) {
                              applyEpisodeToComposer(ep);
                              showToast("info", `EP ${ep.episodeNumber} dipilih & dimuat ke editor.`);
                            }
                          }}
                        >
                          <div className="episode-meta-row">
                            <span className="episode-num">EP {ep.episodeNumber}</span>
                            {active && (
                              <span className="episode-selected-badge">
                                <CheckIcon size={12} />
                                <span>Terpilih</span>
                              </span>
                            )}
                            <span className="episode-topic">{ep.topic}</span>
                            <span
                              className={`duration-tag ${ep.meetsMinDuration ? "dur-ok" : "dur-note"}`}
                              data-numeric="true"
                            >
                              {ep.durationSec} detik (Target seri: {ep.minDurationTargetSec}+ detik)
                            </span>
                          </div>
                          <h3 className="episode-title">{ep.title}</h3>
                          <div className="episode-file-row">
                            <VideoIcon size={15} />
                            <code>{ep.videoFile}</code>
                            <span className="file-size" data-numeric="true">
                              {ep.videoExists
                                ? `Siap upload (${formatBytes(ep.videoSizeBytes)})`
                                : "Belum dirender"}
                            </span>
                          </div>
                        </div>

                        <div className="episode-actions">
                          <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                            onClick={() => {
                              applyEpisodeToComposer(ep);
                              showToast(
                                "info",
                                active
                                  ? `Caption EP ${ep.episodeNumber} direset ulang.`
                                  : `EP ${ep.episodeNumber} dipilih & caption dimuat ke editor.`,
                              );
                            }}
                          >
                            {active ? "Muat Ulang Caption" : `Pilih EP ${ep.episodeNumber}`}
                          </button>
                          {ep.videoExists && ep.videoPreviewUrl && (
                            <button
                              type="button"
                              className="btn btn-ghost btn-sm"
                              onClick={() => {
                                if (!active) {
                                  applyEpisodeToComposer(ep);
                                  setShowVideoPlayer(true);
                                } else {
                                  setShowVideoPlayer((prev) => !prev);
                                }
                              }}
                            >
                              {showVideoPlayer && active ? "Tutup Video" : "Pratinjau MP4"}
                            </button>
                          )}
                          <button
                            type="button"
                            className={`btn ${active ? "btn-primary" : "btn-secondary"} btn-sm`}
                            disabled={!ep.videoExists || isUploadingMedia}
                            onClick={() => handleUploadEpisodeMedia(ep)}
                          >
                            <UploadIcon size={15} />
                            <span>
                              {isUploadingThisEp
                                ? `Mengupload EP ${ep.episodeNumber} (${uploadProgress?.percent ?? 0}%)...`
                                : active
                                  ? `Upload EP ${ep.episodeNumber} (Terpilih)`
                                  : `Upload EP ${ep.episodeNumber}`}
                            </span>
                          </button>
                        </div>

                        {(uploadingEpisodeId ? uploadingEpisodeId === ep.id : active) && uploadProgress && (
                          <div className="inline-upload-banner" role="status" aria-live="polite">
                            <div className="inline-upload-top" data-numeric="true">
                              <span>{uploadProgress.statusText}</span>
                              <strong>{uploadProgress.percent}%</strong>
                            </div>
                            <div className="upload-bar-track">
                              <div
                                className="upload-bar-fill"
                                style={{
                                  width: `${Math.min(100, Math.max(0, uploadProgress.percent))}%`,
                                }}
                              />
                            </div>
                          </div>
                        )}

                        {showVideoPlayer && active && ep.videoPreviewUrl && (
                          <div className="video-preview-wrap">
                            <video
                              src={ep.videoPreviewUrl}
                              controls
                              preload="metadata"
                              className="episode-video-player"
                              width={270}
                              height={480}
                            />
                            <div className="video-caption-note">
                              <p className="summary-label">CTA Akhir Permanen Aktif di Render</p>
                              <p className="muted-copy">
                                Video ini menyertakan outro permanen <strong>ERROR TERUS (@error_terusya)</strong> lengkap dengan ajakan Like, Komen, Share, dan Follow.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          </ComponentErrorBoundary>

          {/* PANEL 2: ACCOUNTS SELECTOR */}
          <ComponentErrorBoundary title="Panel Akun Tebar Bermasalah" onReset={loadAccounts}>
            <AccountsSelector
              state={accountsState}
              selectedIds={selectedAccountIds}
              onToggle={handleToggleAccount}
              onSelectAllActive={handleSelectAllActive}
              onRefresh={loadAccounts}
            />
          </ComponentErrorBoundary>

          {/* PANEL 3: CAPTION EDITOR, MEDIA & SCHEDULE */}
          <ComponentErrorBoundary title="Panel Editor Post Bermasalah">
            <section className="panel" aria-labelledby="composer-heading">
              <div className="panel-head">
                <div className="min-w-0">
                  <h2 id="composer-heading" className="panel-title">
                    3. Editor Caption, Media & Jadwal
                  </h2>
                  <p className="muted-copy">
                    Target endpoint: <code>POST https://api.tebar.app/v1/posts</code>
                  </p>
                  {activeEpisode && (
                    <div className="composer-episode-pill" data-testid="composer-active-episode">
                      <CheckIcon size={13} />
                      <span>
                        Episode Terpilih: EP {activeEpisode.episodeNumber} ({activeEpisode.topic})
                      </span>
                    </div>
                  )}
                </div>

                <div className="head-actions">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() =>
                      handleCopyText("caption", currentCaptionText, "Caption")
                    }
                  >
                    {copiedKey === "caption" ? <CheckIcon size={15} /> : <CopyIcon size={15} />}
                    <span>Salin Caption</span>
                  </button>
                </div>
              </div>

              <div className="caption-tabs-bar">
                <div className="tab-group" role="tablist" aria-label="Pilih versi caption">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeCaptionTab === "main"}
                    className={`tab-btn ${activeCaptionTab === "main" ? "active" : ""}`}
                    onClick={() => setActiveCaptionTab("main")}
                  >
                    Caption Utama / Reels
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeCaptionTab === "threads"}
                    className={`tab-btn ${activeCaptionTab === "threads" ? "active" : ""}`}
                    onClick={() => setActiveCaptionTab("threads")}
                  >
                    Khusus Threads
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeCaptionTab === "youtube"}
                    className={`tab-btn ${activeCaptionTab === "youtube" ? "active" : ""}`}
                    onClick={() => setActiveCaptionTab("youtube")}
                  >
                    Khusus YouTube Shorts
                  </button>
                </div>

                {activeCaptionTab === "threads" && (
                  <label className="inline-toggle">
                    <input
                      type="checkbox"
                      checked={threadsOverrideEnabled}
                      onChange={(e) => setThreadsOverrideEnabled(e.target.checked)}
                    />
                    <span>Gunakan caption berbeda untuk Threads</span>
                  </label>
                )}

                {activeCaptionTab === "youtube" && (
                  <label className="inline-toggle">
                    <input
                      type="checkbox"
                      checked={ytDescriptionOverrideEnabled}
                      onChange={(e) => setYtDescriptionOverrideEnabled(e.target.checked)}
                    />
                    <span>Gunakan deskripsi khusus YouTube Shorts</span>
                  </label>
                )}
              </div>

              <div className="textarea-wrap">
                {activeCaptionTab === "main" ? (
                  <>
                    <label htmlFor="main-caption-input" className="sr-only">
                      Caption Utama dan Instagram Reels serta Facebook Reels
                    </label>
                    <textarea
                      id="main-caption-input"
                      rows={9}
                      maxLength={5000}
                      className="caption-textarea"
                      placeholder="Tulis caption episode di sini..."
                      value={mainCaption}
                      onChange={(e) => setMainCaption(e.target.value)}
                    />
                  </>
                ) : activeCaptionTab === "threads" ? (
                  <>
                    <label htmlFor="threads-caption-input" className="sr-only">
                      Caption Khusus Threads
                    </label>
                    <textarea
                      id="threads-caption-input"
                      rows={6}
                      maxLength={500}
                      disabled={!threadsOverrideEnabled}
                      className="caption-textarea"
                      placeholder="Caption ringkas percakapan untuk Threads (maksimal 500 karakter)..."
                      value={threadsOverrideEnabled ? threadsCaption : mainCaption}
                      onChange={(e) => setThreadsCaption(e.target.value)}
                    />
                  </>
                ) : (
                  <>
                    <label htmlFor="youtube-desc-input" className="sr-only">
                      Deskripsi Khusus YouTube Shorts
                    </label>
                    <textarea
                      id="youtube-desc-input"
                      rows={7}
                      maxLength={5000}
                      disabled={!ytDescriptionOverrideEnabled}
                      className="caption-textarea"
                      placeholder="Deskripsi YouTube Shorts lengkap dengan hashtag #Shorts..."
                      value={ytDescriptionOverrideEnabled ? ytDescription : mainCaption}
                      onChange={(e) => setYtDescription(e.target.value)}
                    />
                  </>
                )}

                <div className="counters-row" data-numeric="true">
                  <span
                    className={`counter-chip ${igCharCount > PLATFORM_LIMITS.instagram.maxChars ? "over-limit" : ""}`}
                  >
                    Instagram: {igCharCount} / {PLATFORM_LIMITS.instagram.maxChars}
                  </span>
                  <span
                    className={`counter-chip ${hasThreadsTarget && threadsCharCount > PLATFORM_LIMITS.threads.maxChars ? "over-limit" : ""}`}
                  >
                    Threads{hasThreadsTarget ? " (Aktif)" : ""}: {threadsCharCount} /{" "}
                    {PLATFORM_LIMITS.threads.maxChars}
                  </span>
                  <span
                    className={`counter-chip ${hasYouTubeTarget && youtubeCharCount > PLATFORM_LIMITS.youtube.maxChars ? "over-limit" : ""}`}
                  >
                    YouTube{hasYouTubeTarget ? " Shorts" : ""}: {youtubeCharCount} /{" "}
                    {PLATFORM_LIMITS.youtube.maxChars}
                  </span>
                  <span className="counter-chip">Tebar API Max: 5000</span>
                </div>
              </div>

              {activeEpisode && activeCaptionTab === "main" && (
                <div className="hashtag-row" aria-label="Hashtag cepat episode">
                  <span className="hashtag-label">Hashtag Episode:</span>
                  {activeEpisode.socialCaption.hashtags.map((tag) => {
                    const included = mainCaption.includes(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        className={`tag-pill ${included ? "included" : ""}`}
                        onClick={() => handleToggleHashtag(tag)}
                      >
                        {included ? <CheckIcon size={12} /> : <span>+</span>}
                        <span>{tag}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Instagram-specific options when an Instagram account is targeted */}
              {hasInstagramTarget && (
                <div className="sub-card">
                  <div className="sub-card-head">
                    <h3 className="sub-card-title">Opsi Instagram Reels & Feed</h3>
                  </div>
                  <div className="options-grid">
                    <div className="field-block">
                      <label htmlFor="ig-format-select" className="field-label">
                        Format Instagram
                      </label>
                      <select
                        id="ig-format-select"
                        className="text-input"
                        value={igFormat}
                        onChange={(e) =>
                          setIgFormat(e.target.value === "story" ? "story" : "feed")
                        }
                      >
                        <option value="feed">Reels / Feed Post</option>
                        <option value="story">Instagram Story</option>
                      </select>
                    </div>

                    {igFormat === "feed" && (
                      <div className="field-block">
                        <span className="field-label">Tampilkan di Grid Profil</span>
                        <label className="checkbox-box">
                          <input
                            type="checkbox"
                            checked={igShareToFeed}
                            onChange={(e) => setIgShareToFeed(e.target.checked)}
                          />
                          <span>Share Reels ke Feed (`share_to_feed`)</span>
                        </label>
                      </div>
                    )}
                  </div>

                  {igFormat === "feed" && (
                    <div className="field-block mt-sm">
                      <label htmlFor="ig-first-comment" className="field-label">
                        Komentar Pertama Otomatis (Opsional - Instagram First Comment)
                      </label>
                      <input
                        id="ig-first-comment"
                        type="text"
                        maxLength={2200}
                        className="text-input"
                        placeholder="Contoh: Jujur sekarang lagi buka berapa tab Chrome?"
                        value={firstComment}
                        onChange={(e) => setFirstComment(e.target.value)}
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Facebook Reels / Video options */}
              {hasFacebookTarget && (
                <div className="sub-card">
                  <div className="sub-card-head">
                    <h3 className="sub-card-title">Opsi Facebook Page (Reels & Video)</h3>
                  </div>
                  <div className="options-grid">
                    <div className="field-block">
                      <label htmlFor="fb-video-as" className="field-label">
                        Mode Upload Video (`video_as`)
                      </label>
                      <select
                        id="fb-video-as"
                        className="text-input"
                        value={fbVideoAs}
                        onChange={(e) =>
                          setFbVideoAs(e.target.value === "video" ? "video" : "reel")
                        }
                      >
                        <option value="reel">Facebook Reels (9:16 Rekomendasi)</option>
                        <option value="video">Video Feed Biasa</option>
                      </select>
                    </div>

                    <div className="field-block">
                      <label htmlFor="fb-link-input" className="field-label">
                        Tautan Pendukung Opsional (`link`)
                      </label>
                      <input
                        id="fb-link-input"
                        type="url"
                        className="text-input"
                        placeholder="https://youtube.com/@error_terusya (Opsional)"
                        value={fbLink}
                        onChange={(e) => setFbLink(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="field-block mt-sm">
                    <label htmlFor="fb-first-comment" className="field-label">
                      Komentar Pertama Facebook (Opsional)
                    </label>
                    <input
                      id="fb-first-comment"
                      type="text"
                      maxLength={8000}
                      className="text-input"
                      placeholder="Contoh: Menurut kamu bagian IT kantor paling sering diminta tolong apa?"
                      value={fbFirstComment}
                      onChange={(e) => setFbFirstComment(e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* YouTube Shorts dedicated options */}
              {hasYouTubeTarget && (
                <div className="sub-card">
                  <div className="sub-card-head">
                    <h3 className="sub-card-title">Opsi YouTube Shorts (Upload ke @error_terusya)</h3>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => setActiveCaptionTab("youtube")}
                    >
                      Edit Deskripsi Shorts
                    </button>
                  </div>

                  <div className="shorts-ready-banner">
                    <div className="shorts-ready-badges">
                      <span className="shorts-pill">YOUTUBE SHORTS READY</span>
                      <span>
                        Rasio 9:16 • Durasi{" "}
                        {activeEpisode ? `${activeEpisode.durationSec.toFixed(1)}s` : "Shorts"} ({"<="} 180s)
                      </span>
                    </div>
                    {ytQuota && ytQuota.limit !== undefined && (
                      <span className="quota-pill" data-numeric="true">
                        Kuota Hari Ini: {ytQuota.remaining ?? Math.max(0, ytQuota.limit - (ytQuota.used ?? 0))} / {ytQuota.limit}
                      </span>
                    )}
                  </div>

                  <div className="field-block mt-sm">
                    <label htmlFor="yt-shorts-title" className="field-label">
                      Judul YouTube Shorts (`options.title` — {resolvedYtTitle.length}/100 karakter)
                    </label>
                    <input
                      id="yt-shorts-title"
                      type="text"
                      maxLength={100}
                      className="text-input"
                      placeholder="Judul menarik untuk YouTube Shorts (maks 100 karakter)..."
                      value={ytTitle}
                      onChange={(e) => setYtTitle(e.target.value)}
                    />
                  </div>

                  <div className="options-grid mt-sm">
                    <div className="field-block">
                      <label htmlFor="yt-privacy-select" className="field-label">
                        Visibilitas (`privacy`)
                      </label>
                      <select
                        id="yt-privacy-select"
                        className="text-input"
                        value={ytPrivacy}
                        onChange={(e) => {
                          const val = e.target.value;
                          setYtPrivacy(
                            val === "unlisted" || val === "private" ? val : "public",
                          );
                        }}
                      >
                        <option value="public">Public (Tayang Publik)</option>
                        <option value="unlisted">Unlisted (Hanya Link)</option>
                        <option value="private">Private (Pribadi)</option>
                      </select>
                    </div>

                    <div className="field-block">
                      <label htmlFor="yt-category-select" className="field-label">
                        Kategori YouTube (`category_id`)
                      </label>
                      <select
                        id="yt-category-select"
                        className="text-input"
                        value={ytCategoryId}
                        onChange={(e) => setYtCategoryId(e.target.value)}
                      >
                        <option value="28">Science & Technology (28)</option>
                        <option value="27">Education (27)</option>
                        <option value="23">Comedy (23)</option>
                        <option value="24">Entertainment (24)</option>
                        <option value="22">People & Blogs (22)</option>
                      </select>
                    </div>
                  </div>

                  <div className="field-block mt-sm">
                    <label htmlFor="yt-tags-input" className="field-label">
                      Tag YouTube Shorts (`tags`, pisahkan dengan koma — maks 15 tag)
                    </label>
                    <input
                      id="yt-tags-input"
                      type="text"
                      className="text-input"
                      placeholder="Shorts, ITSupport, ErrorTerus, TipsKomputer"
                      value={ytTagsInput}
                      onChange={(e) => setYtTagsInput(e.target.value)}
                    />
                  </div>

                  <div className="options-grid mt-sm">
                    <label className="checkbox-box">
                      <input
                        type="checkbox"
                        checked={ytIncludeShortsTagInTitle}
                        onChange={(e) => setYtIncludeShortsTagInTitle(e.target.checked)}
                      />
                      <span>Sisipkan tag `#Shorts` otomatis di judul & deskripsi</span>
                    </label>

                    <label className="checkbox-box">
                      <input
                        type="checkbox"
                        checked={ytSyntheticMedia}
                        onChange={(e) => setYtSyntheticMedia(e.target.checked)}
                      />
                      <span>Tandai konten AI / animasi (`contains_synthetic_media`)</span>
                    </label>

                    <label className="checkbox-box">
                      <input
                        type="checkbox"
                        checked={ytNotifySubscribers}
                        onChange={(e) => setYtNotifySubscribers(e.target.checked)}
                      />
                      <span>Kirim notifikasi ke subscriber (`notify_subscribers`)</span>
                    </label>

                    <label className="checkbox-box">
                      <input
                        type="checkbox"
                        checked={ytMadeForKids}
                        onChange={(e) => setYtMadeForKids(e.target.checked)}
                      />
                      <span>Konten khusus anak-anak (`made_for_kids`)</span>
                    </label>
                  </div>
                </div>
              )}

              {/* Media Upload & Attachment Bar */}
              <div className="sub-card">
                <div className="sub-card-head">
                  <div>
                    <h3 className="sub-card-title">Lampiran Media (`media_ids`)</h3>
                    <p className="muted-copy">
                      Upload video chunked s/d 300 MB (atau gambar max 8 MB) dengan live progress di panel log.
                    </p>
                  </div>
                  <div className="head-actions">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="video/mp4,video/quicktime,image/png,image/jpeg,image/webp"
                      className="sr-only"
                      onChange={handleCustomFilePick}
                    />
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      disabled={isUploadingMedia}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <UploadIcon size={15} />
                      <span>Upload File Lain</span>
                    </button>
                  </div>
                </div>

                {uploadError && (
                  <p className="inline-error" role="alert">
                    {uploadError}
                  </p>
                )}

                {attachedMedia.length === 0 ? (
                  <div className="empty-media-drop">
                    <span>
                      Belum ada media terupload ke Tebar untuk{" "}
                      <strong>
                        {activeEpisode ? `EP ${activeEpisode.episodeNumber}` : "episode"}
                      </strong>
                      : <code>{activeEpisode?.videoFile || "video episode"}</code>.
                    </span>
                    {activeEpisode?.videoExists && (
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        disabled={isUploadingMedia}
                        onClick={() => handleUploadEpisodeMedia(activeEpisode)}
                      >
                        <UploadIcon size={15} />
                        <span>
                          {isUploadingMedia && uploadingEpisodeId === activeEpisode.id
                            ? `Mengupload EP ${activeEpisode.episodeNumber} (${uploadProgress?.percent ?? 0}%)...`
                            : `Upload EP ${activeEpisode.episodeNumber} (Terpilih) ke Tebar`}
                        </span>
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="media-chip-list">
                    {attachedMedia.map((media) => (
                      <div key={media.id} className="media-chip">
                        {media.poster_url ? (
                          <img
                            src={media.poster_url}
                            alt={media.original_name || "Poster media"}
                            className="media-thumb"
                            width={44}
                            height={58}
                          />
                        ) : (
                          <div className="media-thumb-fallback">
                            <VideoIcon size={18} />
                          </div>
                        )}
                        <div className="media-chip-info">
                          <div className="media-chip-name">
                            {media.original_name || `Media ${media.type}`}
                          </div>
                          <div className="media-chip-meta" data-numeric="true">
                            Status: <strong>{media.status}</strong> /{" "}
                            {media.size_bytes ? formatBytes(media.size_bytes) : media.mime_type}
                          </div>
                          <code className="media-id-code">{media.id}</code>
                        </div>
                        <button
                          type="button"
                          className="btn btn-danger-outline btn-sm"
                          onClick={() =>
                            setAttachedMedia((prev) => prev.filter((m) => m.id !== media.id))
                          }
                          aria-label="Hapus lampiran media"
                        >
                          <TrashIcon size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {libraryMedia.length > 0 && (
                  <div className="library-reuse-row">
                    <span className="hashtag-label">
                      Media Ready di Library Tebar (1 klik lampirkan ulang):
                    </span>
                    <div className="library-reuse-chips">
                      {libraryMedia.slice(0, 5).map((item) => {
                        const isAttached = attachedMedia.some((a) => a.id === item.id);
                        return (
                          <button
                            key={item.id}
                            type="button"
                            className={`tag-pill ${isAttached ? "included" : ""}`}
                            onClick={() => {
                              if (isAttached) return;
                              setAttachedMedia((prev) => [...prev, item]);
                              appendClientLog(
                                "info",
                                "upload",
                                `Melampirkan media ready dari Library Tebar: ${item.original_name || item.id}`,
                                `media_id=${item.id}`,
                              );
                            }}
                          >
                            {isAttached ? <CheckIcon size={12} /> : <span>+</span>}
                            <span>
                              {(item.original_name || item.id).slice(0, 32)} (
                              {item.size_bytes ? formatBytes(item.size_bytes) : item.type})
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Timing & Idempotency */}
              <div className="options-grid">
                <div className="sub-card">
                  <div className="sub-card-head">
                    <h3 className="sub-card-title">Waktu Publikasi</h3>
                  </div>
                  <div className="timing-modes">
                    <button
                      type="button"
                      className={`mode-btn ${!scheduleEnabled ? "active" : ""}`}
                      onClick={() => setScheduleEnabled(false)}
                    >
                      <SendIcon size={15} />
                      <span>Publish Sekarang</span>
                    </button>
                    <button
                      type="button"
                      className={`mode-btn ${scheduleEnabled ? "active" : ""}`}
                      onClick={() => setScheduleEnabled(true)}
                    >
                      <CalendarIcon size={15} />
                      <span>Jadwalkan</span>
                    </button>
                  </div>

                  {scheduleEnabled && (
                    <div className="field-block mt-sm">
                      <label htmlFor="schedule-datetime" className="field-label">
                        Tanggal & Jam Tayang (Waktu Lokal)
                      </label>
                      <input
                        id="schedule-datetime"
                        type="datetime-local"
                        className="text-input"
                        value={scheduleInput}
                        onChange={(e) => setScheduleInput(e.target.value)}
                      />
                    </div>
                  )}
                </div>

                <div className="sub-card">
                  <div className="sub-card-head">
                    <h3 className="sub-card-title">Idempotency-Key & API</h3>
                  </div>
                  <p className="muted-copy">
                    Mencegah duplikasi post otomatis saat koneksi ulang.
                  </p>
                  <div className="idempotency-row">
                    <code className="idem-code">{idempotencyKey}</code>
                    <button
                      type="button"
                      className="btn btn-ghost btn-sm"
                      onClick={() => setIdempotencyKey(generateUuid())}
                      aria-label="Buat ulang Idempotency-Key"
                    >
                      <RefreshIcon size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Collapsible cURL Inspector */}
              <div className="curl-accordion">
                <button
                  type="button"
                  className="curl-toggle-btn"
                  aria-expanded={showCurlInspector}
                  onClick={() => setShowCurlInspector((prev) => !prev)}
                >
                  <span className="curl-toggle-label">
                    <TerminalIcon size={16} />
                    <span>Lihat / Salin Perintah cURL (`accounts` & `posts`)</span>
                  </span>
                  <span>{showCurlInspector ? "Sembunyikan" : "Tampilkan"}</span>
                </button>

                {showCurlInspector && (
                  <div className="curl-panel">
                    <div className="curl-block">
                      <div className="curl-block-head">
                        <span>1. Ambil Daftar Akun</span>
                        <button
                          type="button"
                          className="btn btn-ghost btn-sm"
                          onClick={() =>
                            handleCopyText("curl-acc", buildAccountsCurlSnippet(), "cURL accounts")
                          }
                        >
                          Salin
                        </button>
                      </div>
                      <pre className="curl-pre">{buildAccountsCurlSnippet()}</pre>
                    </div>

                    <div className="curl-block">
                      <div className="curl-block-head">
                        <span>2. Publish / Schedule Post</span>
                        <button
                          type="button"
                          className="btn btn-ghost btn-sm"
                          onClick={() =>
                            handleCopyText(
                              "curl-post",
                              buildCreatePostCurlSnippet(postPayload, idempotencyKey),
                              "cURL post",
                            )
                          }
                        >
                          Salin
                        </button>
                      </div>
                      <pre className="curl-pre">
                        {buildCreatePostCurlSnippet(postPayload, idempotencyKey)}
                      </pre>
                    </div>
                  </div>
                )}
              </div>

              {validationError && (
                <div className="validation-banner" role="status">
                  {validationError}
                </div>
              )}

              {/* Desktop Submit Action Footer */}
              <div className="composer-footer desktop-only-actions">
                <span className="muted-copy" data-numeric="true">
                  {selectedAccounts.length} akun terpilih / {attachedMedia.length} media terlampir
                </span>
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  disabled={isSubmitting || isUploadingMedia}
                  onClick={handleOpenConfirm}
                >
                  <SendIcon size={17} />
                  <span>
                    {scheduleEnabled ? "Review & Jadwalkan" : "Review & Publish Post"}
                  </span>
                </button>
              </div>
            </section>
          </ComponentErrorBoundary>
        </div>

        {/* RIGHT RAIL: LIVE LOGS + LIVE POST QUEUE & HISTORY */}
        <div className="history-col">
          <ComponentErrorBoundary title="Panel Log Aktivitas Bermasalah">
            <ActivityLogPanel
              logs={activityLogs}
              streamConnected={streamConnected}
              uploadProgress={uploadProgress}
              onClear={handleClearLogs}
            />
          </ComponentErrorBoundary>

          <ComponentErrorBoundary title="Panel Riwayat Post Bermasalah" onReset={loadPosts}>
            <PostsHistoryPanel
              state={postsState}
              onRefresh={loadPosts}
              onRetryPost={handleRetryPost}
              onDeletePost={handleDeletePost}
            />
          </ComponentErrorBoundary>
        </div>
      </main>

      {/* Mobile Sticky Bottom Action Bar in Ergonomic Thumb Zone */}
      <div className="mobile-sticky-bar">
        <div className="mobile-sticky-meta" data-numeric="true">
          <strong>{selectedAccounts.length} akun</strong>
          <span>{attachedMedia.length > 0 ? "MP4 Ready" : "Belum ada video"}</span>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          disabled={isSubmitting || isUploadingMedia}
          onClick={handleOpenConfirm}
        >
          <SendIcon size={16} />
          <span>{scheduleEnabled ? "Jadwalkan" : "Publish"}</span>
        </button>
      </div>

      <ConfirmPublishModal
        open={confirmOpen}
        isSubmitting={isSubmitting}
        scheduleEnabled={scheduleEnabled}
        scheduledAtIso={scheduledAtIso}
        selectedAccounts={selectedAccounts}
        mediaList={attachedMedia}
        captionPreview={mainCaption.trim()}
        youtubeTitlePreview={hasYouTubeTarget ? resolvedYtTitle : undefined}
        targetModeLabels={targetModeLabels}
        onCancel={() => setConfirmOpen(false)}
        onConfirm={handleConfirmPublish}
      />
    </div>
  );
};
