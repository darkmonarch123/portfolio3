import type { CapabilitiesContent } from "./types";

// `icon` is a string, not a component — importing icon components here would
// pull the whole content layer into the browser bundle. The name-to-icon map
// lives in src/components/primitives/icon.tsx.
export const CAPABILITIES = {
  header: {
    id: "services",
    eyebrow: "Services",
    heading: "What you can hand me.",
    subhead:
      "AI features, a full-stack product, or a blockchain component. All three work.",
  },
  items: [
    {
      id: "ai",
      icon: "bot",
      title: "Practical AI tools",
      body: "AI features built around a real product need — from signal-scoring engines to assistants — using Python, PyTorch and OpenCV alongside Claude Code and the usual APIs.",
    },
    {
      id: "product",
      icon: "layers",
      title: "The whole product, front to back",
      body: "React and Next.js on top, Node.js and Express underneath, PostgreSQL or MongoDB holding the data. One person owns both ends, so nothing falls through the gap between them.",
    },
    {
      id: "design",
      icon: "pen-tool",
      title: "Blockchain and beyond",
      body: "Solidity contracts and Rust when the product needs a chain underneath it — plus the ordinary web app wrapped around it, so the whole thing ships as one product, not two.",
    },
  ],
} as const satisfies CapabilitiesContent;
