import type { CapabilitiesContent } from "./types";

// `icon` is a string, not a component — importing icon components here would
// pull the whole content layer into the browser bundle. The name-to-icon map
// lives in src/components/primitives/icon.tsx.
export const CAPABILITIES = {
  header: {
    id: "services",
    eyebrow: "Capabilities",
    heading: "What I build.",
    subhead:
      "Full-stack web and mobile products, backend APIs, and practical AI features.",
  },
  items: [
    {
      id: "full-stack",
      icon: "layers",
      title: "Full-stack product development",
      body: "Building complete web and mobile applications with React, Next.js, TypeScript, Node.js, Spring Boot, and PostgreSQL—from interface to API to database.",
    },
    {
      id: "backend",
      icon: "server",
      title: "Backend APIs and data modeling",
      body: "Designing REST APIs, business logic, authentication, and database models for products such as trading platforms, management systems, and customer-facing apps.",
    },
    {
      id: "ai-ml",
      icon: "bot",
      title: "Applied AI and ML",
      body: "Building practical AI features, including prediction systems, sentiment analysis, recommendations, and AI-assisted product workflows.",
    },
    {
      id: "java-desktop",
      icon: "monitor",
      title: "Java and desktop software",
      body: "Developing Java applications and JavaFX tools for management systems, internal workflows, and desktop product interfaces.",
    },
    {
      id: "devops",
      icon: "cloud",
      title: "Deployment and tooling",
      body: "Containerizing applications with Docker and learning modern deployment practices, including Kubernetes and CI/CD workflows.",
    },
  ],
} as const satisfies CapabilitiesContent;