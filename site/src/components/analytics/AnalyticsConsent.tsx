"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { applyAnalyticsConsent, getAnalyticsConsent, handleContactClick, setAnalyticsConsent, subscribeToAnalyticsConsent, trackPageView } from "@/lib/analytics";

const OPEN_PREFERENCES_EVENT = "jinling:open-analytics-preferences";
const serverConsent = () => "unknown" as const;

export function AnalyticsPreferencesButton() {
  return (
    <button type="button" className="cursor-pointer transition-colors hover:text-gray-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent" onClick={() => window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT))}>
      Cookie settings
    </button>
  );
}

export function AnalyticsConsent() {
  const consent = useSyncExternalStore(subscribeToAnalyticsConsent, getAnalyticsConsent, serverConsent);
  const pathname = usePathname();
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  useEffect(() => {
    const open = () => setPreferencesOpen(true);
    window.addEventListener(OPEN_PREFERENCES_EVENT, open);
    document.addEventListener("click", handleContactClick, true);
    return () => {
      window.removeEventListener(OPEN_PREFERENCES_EVENT, open);
      document.removeEventListener("click", handleContactClick, true);
    };
  }, []);

  useEffect(() => {
    applyAnalyticsConsent();
    if (consent !== "accepted") return;
    const frame = window.requestAnimationFrame(trackPageView);
    return () => window.cancelAnimationFrame(frame);
  }, [consent, pathname]);

  if (consent !== "pending" && !preferencesOpen) return null;

  function choose(value: "accepted" | "declined") {
    setAnalyticsConsent(value);
    setPreferencesOpen(false);
  }

  return (
    <section role="region" aria-label="Analytics cookie preferences" className="fixed inset-x-3 bottom-3 z-[80] mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-5 text-brand-dark shadow-xl sm:inset-x-6 sm:bottom-6 sm:p-6">
      <h2 className="text-base font-semibold">Analytics cookies</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        With your permission, we use Google Analytics to understand which pages are useful and how visitors contact us.
        You can change your choice using Cookie settings in the footer.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => choose("accepted")} className="cursor-pointer rounded-md border border-brand-dark bg-brand-dark px-4 py-2.5 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark">
          Allow analytics
        </button>
        <button type="button" onClick={() => choose("declined")} className="cursor-pointer rounded-md border border-slate-400 bg-white px-4 py-2.5 text-sm font-semibold text-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark">
          Decline
        </button>
      </div>
    </section>
  );
}
