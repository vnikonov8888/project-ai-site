// Client-side target traffic detection and tracking utilities.
// All functions are safe to call only in browser context (useEffect / event handlers).

export const TRACK_URL = process.env.NEXT_PUBLIC_FUNNEL_TRACKING_URL ?? "";
export const TARGET_BOT_URL = "https://t.me/projectailessonbot?start=target";

const SESSION_ID_KEY = "_pa_sid";
const VISIT_SENT_KEY = "_pa_v";
const CLICK_SENT_KEY = "_pa_c";

export function isTargetVisitor(): boolean {
  const p = new URLSearchParams(window.location.search);
  return (
    p.get("utm_source") === "meta" ||
    p.get("utm_medium") === "paid_social" ||
    p.has("fbclid")
  );
}

export function getSessionId(): string {
  let sid = sessionStorage.getItem(SESSION_ID_KEY) ?? "";
  if (!sid) {
    sid = Math.random().toString(36).slice(2) + Date.now().toString(36);
    sessionStorage.setItem(SESSION_ID_KEY, sid);
  }
  return sid;
}

export async function postTrackEvent(
  event: "target_site_visit" | "target_bot_click",
  sid: string,
): Promise<void> {
  if (!TRACK_URL) return;
  try {
    await fetch(`${TRACK_URL}/track`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event, session_id: sid }),
    });
  } catch {
    // silent — tracking must never break the page
  }
}

export function firePixelEvent(name: string): void {
  const fbq = (window as unknown as { fbq?: (t: string, n: string) => void })
    .fbq;
  if (typeof fbq === "function") fbq("trackCustom", name);
}

// Deduplication helpers (one fire per browser session)
export function markVisitSent(): void {
  sessionStorage.setItem(VISIT_SENT_KEY, "1");
}
export function wasVisitSent(): boolean {
  return !!sessionStorage.getItem(VISIT_SENT_KEY);
}
export function markClickSent(): void {
  sessionStorage.setItem(CLICK_SENT_KEY, "1");
}
export function wasClickSent(): boolean {
  return !!sessionStorage.getItem(CLICK_SENT_KEY);
}
