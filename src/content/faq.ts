import type { FaqContent } from "./types";

// No pricing on purpose: a rate on the page prices the work before the
// conversation that would justify it.
export const FAQ = {
  header: {
    id: "faq",
    eyebrow: "FAQ",
    heading: "Questions people ask before hiring me.",
    subhead: "Short answers. Anything else, email me.",
  },
  // Every <details> shares this name, so the browser closes one answer when
  // another opens — an accordion with zero JavaScript.
  groupName: "faq",
  items: [
    {
      id: "how-we-work",
      question: "How do we work together?",
      answer:
        "A short call or message thread to pin down what you actually need, then a plan before I write any code. After that you get working software, not a status update.",
    },
    {
      id: "engagement-types",
      question: "What kind of work do you take on?",
      answer:
        "Fixed-scope projects, or joining as an extra pair of hands on an existing product. I'll build the whole thing — front end, back end, and the AI or blockchain pieces if you need them.",
    },
    {
      id: "ai",
      question: "Can you build AI features?",
      answer:
        "Yes — that's where a lot of my current focus is. Practical AI tools built on real product needs, not AI for its own sake.",
    },
    {
      id: "blockchain",
      question: "Do you work with blockchain and crypto?",
      answer:
        "Yes — I've built Solidity contracts and a live memecoin signal bot monitoring Solana, BSC and Ethereum. Happy to talk through what you're building.",
    },
    {
      id: "design",
      question: "I don't have a designer. Is that a problem?",
      answer:
        "No. I've shipped UI without one before — send a reference or a rough idea and I'll turn it into a clean, consistent interface.",
    },
    {
      id: "stack",
      question: "What do you build with?",
      answer:
        "React, Next.js and TypeScript on the front end. Node.js, Express and PostgreSQL or MongoDB behind it. Python for AI/ML work, and Solidity or Rust for blockchain. If your stack is something else, tell me — I'd rather say it's not a fit than learn on your budget.",
    },
    {
      id: "timezone",
      question: "Where are you based, and will our hours overlap?",
      answer:
        "Lagos, Nigeria — WAT (UTC+1). That overlaps most of the working day with Europe and Africa, and the morning with the US East Coast. Email or chat day to day, calls when a call is faster.",
    },
    {
      id: "getting-started",
      question: "Are you free, and how do we start?",
      answer:
        "Yes, I'm taking on new work right now. Email emmanueltemiloluwa441@yahoo.com with what you're building and when you need it — if it's a fit, you get a plan back; if it isn't, I'll say so.",
    },
  ],
} as const satisfies FaqContent;
