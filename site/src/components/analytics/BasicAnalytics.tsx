"use client";

import { useEffect } from "react";

const MEASUREMENT_ID = "G-RRNGWGVYEY";

declare global {
  interface Window {
    dataLayer?: IArguments[];
    gtag?: (...args: unknown[]) => void;
    jinlingAnalyticsInitialized?: boolean;
  }
}

export function BasicAnalytics() {
  useEffect(() => {
    // Preview builds and local development must not enter production reports.
    if (
      window.location.hostname !== "www.jinlingmetals.com" ||
      window.jinlingAnalyticsInitialized
    ) {
      return;
    }

    window.jinlingAnalyticsInitialized = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
      // Google tag's standard queue stores each call as an arguments object.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", MEASUREMENT_ID, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }, []);

  return null;
}
