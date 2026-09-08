import type { SiteContent } from "./types";

export const SITE = {
  wordmark: "Temiloluwa Oluwanifemi",
  name: "Temiloluwa Emmanuel Oluwanifemi",
  // Rendered verbatim into the OG image and JSON-LD. Keep it short or the OG
  // line wraps.
  jobTitle: "Software Engineer",
  url: "https://temiloluwa.dev",
  title: "Temiloluwa Emmanuel Oluwanifemi — Software Engineer in Lagos, Nigeria",
  titleTemplate: "%s | Temiloluwa Emmanuel Oluwanifemi",
  description:
    "Software engineer in Lagos, Nigeria, writing clean full-stack code and building practical AI, fintech and e-commerce products across web, mobile and blockchain.",
  keywords: [
    "Temiloluwa Emmanuel Oluwanifemi",
    "Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Solidity Developer",
    "Web Developer Lagos",
    "Nigerian Software Engineer",
  ],
  ogTitle: "Temiloluwa Emmanuel Oluwanifemi — I build practical software end to end.",
  ogDescription:
    "Software engineer in Lagos, Nigeria. Full-stack web, AI tools, fintech and blockchain products, from idea to shipped product.",
  ogImageAlt: "Temiloluwa Emmanuel Oluwanifemi, software engineer — Lagos, Nigeria",
  twitterTitle: "Temiloluwa Emmanuel Oluwanifemi — I build practical software end to end.",
  twitterDescription:
    "Software engineer in Lagos, Nigeria. Full-stack web, AI tools, fintech and blockchain products.",
  twitterHandle: "@iam_temiloluwa7",
  locale: "en_US",
  themeColor: "white",
  locationLabel: "Lagos, Nigeria · WAT (UTC+1)",
  locality: "Lagos",
  region: "Lagos",
  countryCode: "NG",
  timeZone: "Africa/Lagos",
  email: "emmanueltemiloluwa441@yahoo.com",
  emailHref: "mailto:emmanueltemiloluwa441@yahoo.com",
  phoneLabel: "+234 704 876 7396",
  // Written by hand, not derived from phoneLabel — a string replace only swaps
  // the first match and once left a space in the number.
  phoneHref: "tel:+2347048767396",
  cv: {
    label: "Download CV",
    href: "/files/temiloluwa-oluwanifemi-software-engineer.pdf",
  },
  // One record read by both hero and footer, so they can never disagree. If
  // this flips to false: label becomes "Booked until <Month>" and the green
  // dot is not rendered at all. The wording is also hand-written in places
  // this record does not drive — update them too: hero.ts terminal status
  // line, faq.ts "getting-started" answer, about.ts closing, and the
  // description/ogDescription/twitterDescription strings above.
  availability: { available: true, label: "Available for new projects" },
  social: [
    {
      label: "GitHub",
      href: "https://github.com/darkmonarch123",
      icon: "github",
    },
    { label: "X", href: "https://x.com/iam_temiloluwa7", icon: "x" },
  ],
  repoUrl: "https://github.com/darkmonarch123/port",
  figmaTemplateUrl:
    "https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop",
  skipLinkLabel: "Skip to main content",
  mainLandmarkLabel: "Main content",
  notFound: {
    title: "Page not found",
    heading: "That page doesn't exist.",
    body: "The whole site lives on a single page, so there is not much to get lost in. The link below takes you back to it.",
    link: { label: "Back to the homepage", href: "/" },
  },
  errorPage: {
    title: "Something went wrong",
    heading: "Something went wrong.",
    body: "An unexpected error stopped this page from rendering. Trying again usually fixes it. If it keeps happening, email emmanueltemiloluwa441@yahoo.com and tell me what you were doing.",
    retryLabel: "Try again",
    link: { label: "Back to the homepage", href: "/" },
    digestLabel: "Error reference",
  },
} as const satisfies SiteContent;
