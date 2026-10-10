import type { FaqContent } from "./types";

export const FAQ = {
  header: {
    id: "faq",
    eyebrow: "FAQ",
    heading: "Questions people ask.",
    subhead: "Short answers about my work, stack, and availability.",
  },
  // Every <details> shares this name, so the browser closes one answer when
  // another opens — an accordion with zero JavaScript.
  groupName: "faq",
  items: [
    {
      id: "what-i-build",
      question: "What kind of software do you build?",
      answer:
        "I build full-stack web and mobile products, backend APIs, management systems, and practical AI features. My recent work spans AI, fintech, healthcare, and e-commerce.",
    },
    {
      id: "engineering-focus",
      question: "What is your engineering focus?",
      answer:
        "I enjoy owning features end to end: designing the interface, building the API and data model, integrating external services, and thinking through how the feature behaves in production.",
    },
    {
      id: "ai",
      question: "Can you build AI features?",
      answer:
        "Yes. I focus on practical AI—prediction systems, sentiment analysis, recommendations, and AI-assisted workflows that solve a clear product problem.",
    },
    {
      id: "stack",
      question: "What technologies do you work with?",
      answer:
        "React, Next.js, TypeScript, Node.js, Express, PostgreSQL, and MongoDB on the web side. I also work with Java, Spring Boot, JavaFX, Python, and AI/ML tools such as PyTorch and OpenCV.",
    },
    {
      id: "design",
      question: "Do you work with designers?",
      answer:
        "Yes. I can implement designs from Figma or other design systems, and I’m comfortable building clean, accessible interfaces when a dedicated designer isn’t available.",
    },
    {
      id: "learning",
      question: "What are you learning next?",
      answer:
        "I’m deepening my knowledge of AI/ML, system design, testing, and deployment practices, including Docker, Kubernetes, and CI/CD.",
    },
    {
      id: "timezone",
      question: "Where are you based, and will your hours overlap?",
      answer:
        "I’m based in Lagos, Nigeria (WAT, UTC+1). My hours overlap well with Europe and Africa, and with mornings on the US East Coast.",
    },
    {
      id: "getting-started",
      question: "Are you open to opportunities?",
      answer:
        "Yes. I’m open to software engineering roles and selective collaborations. Email [emmanueltemiloluwa441@yahoo.com](mailto:emmanueltemiloluwa441@yahoo.com) with details about the role or project.",
    },
  ],
} as const satisfies FaqContent;