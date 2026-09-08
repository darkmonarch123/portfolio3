import portrait from "@/assets/images/temiloluwa-portrait.jpg";

import type { AboutContent } from "./types";

export const ABOUT = {
  header: {
    id: "about",
    eyebrow: "About",
    heading: "Turning complexity into products people can use.",
  },
  photo: {
    src: portrait,
    alt: "",
  },
  paragraphs: [
    [
      "I've always loved systems and technology — until I found programming, and it clicked. I started at 12, writing basic web pages and JavaScript, and never really stopped. What keeps me hooked is building things with real complexity underneath: scalable applications, and lately, embedded systems for cars, aerospace and anything that has to hold up in the real world.",
    ],
    [
      "I care about problem-solving, but more than that, I care about turning complexity into a product an end user can actually pick up and use. That's the part of engineering I chase — not just making something work, but making it make sense to someone who isn't a developer.",
    ],
    [
      "My focus right now is going deeper into AI and machine learning, and blockchain — not as separate interests but as tools for the same goal: helping build software that makes the world a little safer and a little easier to use.",
    ],
    [
      "I've shipped a handful of projects on my own initiative — a 3D architecture builder for people with no design background, a stock trading platform for African investors, a Telegram-based memecoin signal bot, a hospital appointment system, and an e-commerce storefront where I worked both the front end and the back end.",
    ],
    [
      "When I'm not building, you'll usually find me learning something adjacent — reading about embedded systems, following what's shipping in AI, or poking around on ",
      { text: "GitHub", href: "https://github.com/darkmonarch123" },
      " and ",
      { text: "X", href: "https://x.com/iam_temiloluwa7" },
      ".",
    ],
  ],
  quickBitsLead: "A few quick bits:",
  quickBits: [
    "Started coding at 12",
    "Based in Lagos, Nigeria (WAT)",
    "Full stack — front end and back end",
    "Learning AI/ML and blockchain",
    "Interested in embedded systems",
    "Ships UI without waiting on a designer",
  ],
  closing:
    "One last thing: I'm taking on new work right now. Say hello — I don't bite.",
} as const satisfies AboutContent;
