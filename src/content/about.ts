import portrait from "@/assets/images/temiloluwa-portrait.jpg";

import type { AboutContent } from "./types";

export const ABOUT = {
  header: {
    id: "about",
    eyebrow: "About",
    heading: "Building reliable software for real-world problems.",
  },
  photo: {
    src: portrait,
    alt: "Portrait of Temiloluwa Emmanuel Oluwanifemi, software engineer based in Lagos, Nigeria.",
  },
  paragraphs: [
    [
      "I’m a software engineer based in Lagos, Nigeria, focused on building reliable, end-to-end products across AI, fintech, healthcare, and e-commerce. I started programming at 12, building web pages and JavaScript projects, and have been steadily expanding into full-stack systems, product engineering, and applied AI.",
    ],
    [
      "What draws me to engineering is the space between a difficult problem and a product people can actually use. I enjoy designing the underlying systems—data models, APIs, workflows, and interfaces—then shaping them into software that feels simple for the person using it.",
    ],
    [
      "I take ownership across the stack. That means building user interfaces, designing backend services, modeling data, integrating third-party systems, and thinking through how a feature behaves in production—not just whether it works locally.",
    ],
    [
      "My current focus is deepening my expertise in AI and machine learning, with a strong foundation in full-stack web engineering. I’m especially interested in building practical, dependable systems: software that handles real users, real data, and real constraints.",
    ],
    [
      "I’ve independently designed and shipped several products, including a 3D architecture and planning tool for African construction professionals, a paper-trading platform for African investors, a real-time collaborative workspace, and a hospital appointment-management system. Each project has strengthened how I approach product decisions, system design, and end-to-end delivery.",
    ],
    [
      "Outside of building, I spend time studying system design, following developments in AI, and exploring adjacent areas such as embedded systems. You can find my work on ",
      { text: "GitHub", href: "https://github.com/darkmonarch123" },
      " and my thoughts on ",
      { text: "X", href: "https://x.com/iam_temiloluwa7" },
      ".",
    ],
  ],
  quickBitsLead: "A few quick bits:",
  quickBits: [
    "Started coding at 12",
    "Based in Lagos, Nigeria (WAT)",
    "Full-stack software engineer",
    "Builds across AI, fintech, healthcare, and e-commerce",
    "Focused on system design and product engineering",
    "Comfortable owning features from UI to backend",
  ],
  closing:
    "I’m currently open to software engineering opportunities. If you’re building ambitious products and need an engineer who can own problems end to end, I’d love to talk.",
} as const satisfies AboutContent;