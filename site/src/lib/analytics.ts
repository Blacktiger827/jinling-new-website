export const GA4_MEASUREMENT_ID = "G-RRNGWGVYEY";
export const ANALYTICS_CONSENT_KEY = "jinling-analytics-consent-v1";
export const ANALYTICS_CONSENT_EVENT = "jinling:analytics-consent";

type Consent = "accepted" | "declined" | "pending" | "unknown";
type ContactEvent = "email_click" | "phone_click" | "whatsapp_click" | "inquiry_draft_prepared";
type AnalyticsWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };

let memoryConsent: Consent = "pending";
let initialized = false;
let previousLocation = "";

function analyticsWindow() { return window as AnalyticsWindow; }
function isProduction() {
  return typeof window !== "undefined" && window.location.hostname === "www.jinlingmetals.com";
}

export function getAnalyticsConsent(): Consent {
  if (typeof window === "undefined") return "unknown";
  if (memoryConsent === "accepted" || memoryConsent === "declined") return memoryConsent;
  try {
    const saved = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
    if (!saved) return memoryConsent;
    const parsed = JSON.parse(saved);
    if (parsed.expires > Date.now() && (parsed.value === "accepted" || parsed.value === "declined")) return parsed.value;
    return "pending";
  } catch { return memoryConsent; }
}

export function subscribeToAnalyticsConsent(listener: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === ANALYTICS_CONSENT_KEY || event.key === null) {
      memoryConsent = "pending";
      listener();
    }
  };
  window.addEventListener(ANALYTICS_CONSENT_EVENT, listener);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(ANALYTICS_CONSENT_EVENT, listener);
    window.removeEventListener("storage", onStorage);
  };
}

function clearAnalyticsCookies() {
  const names = document.cookie.split(";").map((part) => part.trim().split("=")[0]);
  for (const name of names) {
    if (name !== "_ga" && name !== "_ga_RRNGWGVYEY") continue;
    for (const domain of ["", "www.jinlingmetals.com", ".www.jinlingmetals.com", "jinlingmetals.com", ".jinlingmetals.com"]) {
      document.cookie = `${name}=; Max-Age=0; Path=/;${domain ? ` Domain=${domain};` : ""} SameSite=Lax; Secure`;
    }
  }
}

export function applyAnalyticsConsent() {
  if (!isProduction()) return;
  const allowed = getAnalyticsConsent() === "accepted";
  const target = analyticsWindow();
  (target as unknown as Record<string, unknown>)[`ga-disable-${GA4_MEASUREMENT_ID}`] = !allowed;
  if (initialized) target.gtag?.("consent", "update", {
    analytics_storage: allowed ? "granted" : "denied",
    ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied",
  });
  if (!allowed) { previousLocation = ""; clearAnalyticsCookies(); }
}

export function setAnalyticsConsent(value: "accepted" | "declined") {
  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, JSON.stringify({ value, expires: Date.now() + 180 * 24 * 60 * 60 * 1000 }));
    memoryConsent = "pending";
  } catch { memoryConsent = value; }
  applyAnalyticsConsent();
  window.dispatchEvent(new Event(ANALYTICS_CONSENT_EVENT));
}

function safePageLocation() {
  const url = new URL(window.location.href);
  const path = /^\/[a-z0-9/_-]*$/i.test(url.pathname) ? url.pathname : "/";
  const safe = new URL(path, "https://www.jinlingmetals.com");
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_id", "utm_content", "utm_term"]) {
    const value = url.searchParams.get(key);
    if (value && value.length <= 100 && !/@|\d{7,}/.test(value) && /^[a-z0-9 ._+-]+$/i.test(value)) safe.searchParams.set(key, value);
  }
  return safe.href;
}

function safeReferrer() {
  try {
    const referrer = new URL(document.referrer);
    if (!/^https?:$/.test(referrer.protocol)) return "";
    if (referrer.hostname === "www.jinlingmetals.com" && /^\/[a-z0-9/_-]*$/i.test(referrer.pathname)) return `${referrer.origin}${referrer.pathname}`;
    return `${referrer.origin}/`;
  } catch { return ""; }
}

function initializeAnalytics() {
  if (!isProduction() || getAnalyticsConsent() !== "accepted") return false;
  if (initialized) return true;
  const target = analyticsWindow();
  target.dataLayer = target.dataLayer || [];
  // Match Google's command queue format (IArguments rather than an event object).
  // eslint-disable-next-line prefer-rest-params
  target.gtag = function () { target.dataLayer?.push(arguments); };
  target.gtag("consent", "default", { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
  target.gtag("consent", "update", { analytics_storage: "granted" });
  target.gtag("js", new Date());
  // Keep page context global: a value set in config would override later global
  // updates and attribute automatic scroll/video/download events to the first page.
  target.gtag("set", { page_location: safePageLocation(), page_referrer: safeReferrer() });
  target.gtag("config", GA4_MEASUREMENT_ID, {
    send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false,
    cookie_flags: "SameSite=Lax;Secure",
  });
  initialized = true;
  applyAnalyticsConsent();
  const script = document.createElement("script");
  script.id = "jinling-ga4";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script);
  return true;
}

// Disable Enhanced measurement's browser-history page views for this stream.
// Also disable automatic form interactions/outbound clicks/site search. Scroll,
// supported video and public file download measurement can remain enabled.
export function trackPageView() {
  if (!initializeAnalytics()) return;
  const location = safePageLocation();
  if (location === previousLocation) return;
  const parameters = { page_location: location, page_referrer: previousLocation || safeReferrer(), page_title: document.title };
  analyticsWindow().gtag?.("set", parameters);
  analyticsWindow().gtag?.("event", "page_view", { ...parameters, send_to: GA4_MEASUREMENT_ID });
  previousLocation = location;
}

export function trackContactIntent(event: ContactEvent, placement: "header" | "footer" | "body" | "quote_form") {
  if (!initializeAnalytics()) return;
  analyticsWindow().gtag?.("event", event, {
    send_to: GA4_MEASUREMENT_ID, page_location: safePageLocation(), contact_placement: placement,
    // Never include link URLs, mail subjects/bodies, link text, or form values.
  });
}

export function handleContactClick(event: MouseEvent) {
  if (event.button !== 0 || !(event.target instanceof Element)) return;
  const link = event.target.closest<HTMLAnchorElement>("a[href]");
  if (!link) return;
  let kind: ContactEvent;
  try {
    const url = new URL(link.href, window.location.href);
    if (url.protocol === "mailto:") kind = "email_click";
    else if (url.protocol === "tel:") kind = "phone_click";
    else if (url.protocol === "https:" && (url.hostname === "wa.me" || url.hostname === "api.whatsapp.com")) kind = "whatsapp_click";
    else return;
  } catch { return; }
  trackContactIntent(kind, link.closest("header") ? "header" : link.closest("footer") ? "footer" : "body");
}
