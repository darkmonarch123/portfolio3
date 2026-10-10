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
    "Software engineer in Lagos, Nigeria, building reliable full-stack products across AI, fintech, healthcare, and e-commerce. Focused on clean architecture, scalable systems, and shipping end to end.",
  keywords: [
    "Temiloluwa Emmanuel Oluwanifemi",
    "Software Engineer",
    "Full Stack Engineer",
    "AI Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Java Developer",
    "Spring Boot Developer",
    "Software Engineer Lagos",
    "Nigerian Software Engineer",
  ],
  ogTitle: "Temiloluwa Emmanuel Oluwanifemi — Software Engineer",
  ogDescription:
    "Software engineer in Lagos, Nigeria. I design, build, and ship full-stack products across AI, fintech, healthcare, and e-commerce.",
  ogImageAlt:
    "Temiloluwa Emmanuel Oluwanifemi, software engineer — Lagos, Nigeria",
  twitterTitle: "Temiloluwa Emmanuel Oluwanifemi — Software Engineer",
  twitterDescription:
    "Software engineer in Lagos, Nigeria. Building full-stack products across AI, fintech, healthcare, and e-commerce.",
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
  availability: {
    available: true,
    label: "Open to software engineering opportunities",
  },
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
    heading: "That page doesn’t exist.",
    body: "This site is a single-page portfolio, so there isn’t much to get lost in. Use the link below to return to the homepage.",
    link: { label: "Back to homepage", href: "/" },
  },
  errorPage: {
    title: "Something went wrong",
    heading: "Something went wrong.",
    body: "An unexpected error prevented this page from rendering. Please try again. If the issue persists, email [emmanueltemiloluwa441@yahoo.com](mailto:emmanueltemiloluwa441@yahoo.com) with details about what you were doing.",
    retryLabel: "Try again",
    link: { label: "Back to homepage", href: "/" },
    digestLabel: "Error reference",
  },
} as const satisfies SiteContent;