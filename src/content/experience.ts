import type { StaticImageData } from "next/image";

import uniccreationsLogo from "@/assets/images/companies/uniccreations.png";

import type { ExperienceContent } from "./types";

// Same "*.svg" typing fix as tech.ts.
const LOGOS: Readonly<Record<string, StaticImageData>> = {
  uniccreations: uniccreationsLogo,
};

// No formal employment yet — the record below is the real, hands-on
// experience I have: building a full product for UNICCREATIONS. Dates are
// approximate; update startISO/endISO to the actual months once you have
// them.
export const EXPERIENCE = {
  header: {
    id: "experience",
    eyebrow: "Experience",
    heading: "Learning by building, not by title.",
    subhead:
      "No formal job yet — the experience so far comes from shipping real projects, start to finish.",
  },
  roles: [
    {
      id: "uniccreations",
      company: "UNICCREATIONS",
      position: "Frontend & Backend Developer",
      logo: LOGOS.uniccreations,
      startISO: "2025-01",
      endISO: "present",
      bullets: [
        "Built a responsive, high-fidelity e-commerce storefront for a Nigerian women's fashion brand, front end and back end.",
        "Matched an existing visual reference precisely — layout, spacing, typography, product cards, filters and navigation stayed consistent page to page.",
        "Owned both the UI and the store logic behind it, without a separate designer or backend hire.",
      ],
    },
  ],
} as const satisfies ExperienceContent;
