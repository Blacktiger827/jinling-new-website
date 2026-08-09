"use client";

import { useState } from "react";

type CopyEmailButtonProps = {
  email: string;
};

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={copyEmail}
      className="bg-brand-accent px-4 py-2.5 text-sm font-semibold text-brand-dark transition hover:bg-brand-accent-hover"
    >
      {copied ? "Copied" : "Copy Email"}
    </button>
  );
}
