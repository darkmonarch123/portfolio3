import type { TrustBarContent } from "./types";

// No client logos yet — every mark renders as a text wordmark instead
// (TrustMarkItem falls back to text when `logo` is omitted). Swap in real
// logos here once you have them.
export const TRUST_BAR = {
  intro: "Projects I've shipped",
  marks: [
    {
      name: "ProDesign Africa",
      href: "https://github.com/darkmonarch123/ProdesignAfrica",
    },
    {
      name: "Pinnacle Inc",
      href: "https://github.com/darkmonarch123/PinnacleCorp",
    },
    { name: "NairaX Signal Pro", href: "https://github.com/darkmonarch123" },
    {
      name: "NewHope Hospital System",
      href: "https://github.com/darkmonarch123",
    },
    {
      name: "UNICCREATIONS",
      href: "https://github.com/darkmonarch123/uniccreations-style-hub",
    },
    { name: "F1 Telemetry", href: "https://github.com/darkmonarch123" },
    { name: "Foreman", href: "https://github.com/darkmonarch123/Foreman" }
  ],
} as const satisfies TrustBarContent;
