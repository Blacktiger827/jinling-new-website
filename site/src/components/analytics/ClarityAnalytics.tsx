"use client";

import { useEffect } from "react";

const CLARITY_PROJECT_ID = "zbc9l7zfqe";

type ClarityQueue = ((...args: unknown[]) => void) & {
  q?: IArguments[];
};

declare global {
  interface Window {
    clarity?: ClarityQueue;
    jinlingClarityInitialized?: boolean;
  }
}

export function ClarityAnalytics() {
  useEffect(() => {
    if (
      window.location.hostname !== "www.jinlingmetals.com" ||
      window.jinlingClarityInitialized
    ) {
      return;
    }

    window.jinlingClarityInitialized = true;
    window.clarity = window.clarity || function () {
      // Preserve the argument queue format used by the vendor's standard tag.
      // eslint-disable-next-line prefer-rest-params
      (window.clarity!.q = window.clarity!.q || []).push(arguments);
    };

    // Queue denied storage before loading the tag, including outside the EEA.
    // This limits Clarity to page-level analysis without Clarity cookies.
    window.clarity("consentv2", {
      ad_Storage: "denied",
      analytics_Storage: "denied",
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}?ref=bwt`;
    document.head.appendChild(script);
  }, []);

  return null;
}
