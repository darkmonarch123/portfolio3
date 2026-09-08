import type { FooterContent } from "./types";

export const FOOTER = {
  landmarkLabel: "Site footer",
  brand: {
    wordmark: "Temiloluwa Oluwanifemi",
    tagline: "Software Engineer. Full-stack code, practical AI tools.",
    location: "Lagos, Nigeria · WAT (UTC+1)",
  },
  columns: [
    {
      id: "sections",
      heading: "Sections",
      // This column holds the only links to #services and #stack anywhere on
      // the site — remove a row and that section becomes unreachable
      // (check-anchors fails).
      links: [
        { label: "Services", href: "#services" },
        { label: "Work", href: "#work" },
        { label: "About", href: "#about" },
        { label: "Stack", href: "#stack" },
        { label: "Experience", href: "#experience" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      id: "connect",
      heading: "Connect",
      links: [
        { label: "Email", href: "mailto:emmanueltemiloluwa441@yahoo.com" },
        { label: "Phone", href: "tel:+2347048767396" },
        { label: "GitHub", href: "https://github.com/darkmonarch123" },
        { label: "X", href: "https://x.com/iam_temiloluwa7" },
        {
          label: "LinkedIn",
          href: "https://ng.linkedin.com/in/temiloluwa-emmanuel-oluwanifemi-9628532a7",
        },
      ],
    },
    {
      id: "resources",
      heading: "Resources",
      links: [
        {
          label: "Download CV",
          href: "/files/temiloluwa-oluwanifemi-software-engineer.pdf",
        },
        {
          label: "Source code",
          href: "https://github.com/darkmonarch123/port",
        },
        { label: "llms.txt", href: "/llms.txt" },
      ],
    },
  ],
  copyright: {
    symbol: "©",
    owner: "Temiloluwa Emmanuel Oluwanifemi",
    separator: "·",
    // Renders as "© {year} Temiloluwa Emmanuel Oluwanifemi · Designed and
    // coded in Lagos, Nigeria." The year comes from src/lib/now.ts, never
    // stored here.
    segments: [
      "Designed and ",
      { text: "coded", href: "https://github.com/darkmonarch123/port" },
      " in Lagos, Nigeria.",
    ],
  },
} as const satisfies FooterContent;
