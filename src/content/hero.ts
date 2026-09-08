import headshot from "@/assets/images/temiloluwa-headshot.jpg";

import type { HeroContent } from "./types";

export const HERO = {
  id: "hero",
  eyebrow: "Software Engineer · Lagos, Nigeria",
  headlineLead: "Hi, I'm Temiloluwa",
  // Separate from headlineLead so it can sit in its own span — animated by
  // CSS, hidden from screen readers.
  wave: "👋",
  headlineClaim: "I build practical software end to end.",
  subhead:
    "I write clean full-stack code and build practical AI tools — from fintech and healthcare platforms to blockchain signal bots. Started coding at 12, still chasing the same thing: turning complexity into something people can actually use.",
  primary: { label: "Start a project", href: "#contact" },
  secondary: { label: "See my work", href: "#work" },
  location: "Lagos, Nigeria · WAT (UTC+1)",
  // Empty alt on purpose: the photo sits right beside the name in the <h1>,
  // and describing it would make a screen reader say the name twice.
  portrait: { src: headshot, alt: "" },
  // Hard limit: 32 characters per visible line — the typewriter clip is
  // text-length × 1ch and never wraps (white-space: pre), so a longer line
  // clips at the card edge on a 375px phone. One code point per terminal
  // cell: no emoji or wide glyphs here.
  terminal: {
    title: "temiloluwa@dev",
    lines: [
      { kind: "prompt", text: "find a dev who ships end to end" },
      { kind: "result", text: "Found 1 match: Temiloluwa" },
      { kind: "branch", text: "Full stack · React · Node · AI" },
      { kind: "branch", text: "Solidity · Rust · Python" },
      { kind: "branch", text: "prodesignafrica — 3D builder" },
      { kind: "branch", text: "pinnacle inc — stock trading" },
      { kind: "status", text: "Available for new projects" },
      { kind: "prompt", text: "hire him", cursor: true },
    ],
  },
} as const satisfies HeroContent;
