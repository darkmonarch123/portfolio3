import type { StaticImageData } from "next/image";

import bootstrapLogo from "@/assets/images/tech/bootstrap.svg";
import cLogo from "@/assets/images/tech/c.svg";
import claudecodeLogo from "@/assets/images/tech/claudecode.svg";
import css3Logo from "@/assets/images/tech/css3.svg";
import dockerLogo from "@/assets/images/tech/docker.svg";
import expressLogo from "@/assets/images/tech/express.svg";
import gitLogo from "@/assets/images/tech/git.svg";
import gitlabLogo from "@/assets/images/tech/gitlab.svg";
import html5Logo from "@/assets/images/tech/html5.svg";
import javaLogo from "@/assets/images/tech/java.svg";
import javascriptLogo from "@/assets/images/tech/javascript.svg";
import kafkaLogo from "@/assets/images/tech/kafka.svg";
import kubernetesLogo from "@/assets/images/tech/kubernetes.svg";
import mongodbLogo from "@/assets/images/tech/mongodb.svg";
import nextjsLogo from "@/assets/images/tech/nextjs.svg";
import nodejsLogo from "@/assets/images/tech/nodejs.svg";
import numpyLogo from "@/assets/images/tech/numpy.svg";
import opencvLogo from "@/assets/images/tech/opencv.svg";
import pandasLogo from "@/assets/images/tech/pandas.svg";
import postgresqlLogo from "@/assets/images/tech/postgresql.svg";
import postmanLogo from "@/assets/images/tech/postman.svg";
import pythonLogo from "@/assets/images/tech/python.svg";
import pytorchLogo from "@/assets/images/tech/pytorch.svg";
import reactLogo from "@/assets/images/tech/react.svg";
import rustLogo from "@/assets/images/tech/rust.svg";
import solidityLogo from "@/assets/images/tech/solidity.svg";
import springbootLogo from "@/assets/images/tech/springboot.svg";
import tailwindcssLogo from "@/assets/images/tech/tailwindcss.svg";
import typescriptLogo from "@/assets/images/tech/typescript.svg";

import type { TechContent } from "./types";

// Next.js types every "*.svg" import as `any`, and a project-level override
// does not stick (tried). This record is the one place that gets fixed.
const LOGOS: Readonly<Record<string, StaticImageData>> = {
  bootstrap: bootstrapLogo,
  c: cLogo,
  claudecode: claudecodeLogo,
  css3: css3Logo,
  docker: dockerLogo,
  express: expressLogo,
  git: gitLogo,
  gitlab: gitlabLogo,
  html5: html5Logo,
  java: javaLogo,
  javascript: javascriptLogo,
  kafka: kafkaLogo,
  kubernetes: kubernetesLogo,
  mongodb: mongodbLogo,
  nextjs: nextjsLogo,
  nodejs: nodejsLogo,
  numpy: numpyLogo,
  opencv: opencvLogo,
  pandas: pandasLogo,
  postgresql: postgresqlLogo,
  postman: postmanLogo,
  python: pythonLogo,
  pytorch: pytorchLogo,
  react: reactLogo,
  rust: rustLogo,
  solidity: solidityLogo,
  springboot: springbootLogo,
  tailwindcss: tailwindcssLogo,
  typescript: typescriptLogo,
};

export const TECH = {
  header: {
    id: "stack",
    eyebrow: "Stack",
    heading: "The tools I reach for.",
    subhead:
      "Started with HTML, CSS and JS at 12. These are the ones I'd be happy to be judged on now — React Native and JavaFX round out mobile and desktop, without logos of their own here.",
  },
  groups: [
    {
      id: "frontend",
      title: "Frontend",
      descriptor: "Where I started, and still where most sites begin.",
      items: [
        { name: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML", logo: LOGOS.html5 },
        { name: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS", logo: LOGOS.css3 },
        {
          name: "JavaScript",
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          logo: LOGOS.javascript,
        },
        {
          name: "TypeScript",
          href: "https://www.typescriptlang.org/",
          logo: LOGOS.typescript,
        },
        { name: "React", href: "https://react.dev/", logo: LOGOS.react },
        { name: "Next.js", href: "https://nextjs.org/", logo: LOGOS.nextjs },
        {
          name: "Tailwind CSS",
          href: "https://tailwindcss.com/",
          logo: LOGOS.tailwindcss,
        },
        {
          name: "Bootstrap",
          href: "https://getbootstrap.com/",
          logo: LOGOS.bootstrap,
        },
      ],
    },
    {
      id: "backend",
      title: "Backend",
      descriptor: "APIs and services behind the interface.",
      items: [
        { name: "Node.js", href: "https://nodejs.org/en", logo: LOGOS.nodejs },
        {
          name: "Express",
          href: "https://expressjs.com/",
          logo: LOGOS.express,
        },
        { name: "Java", href: "https://www.java.com/", logo: LOGOS.java },
        {
          name: "Spring Boot",
          href: "https://spring.io/projects/spring-boot",
          logo: LOGOS.springboot,
        },
        { name: "C", href: "https://en.wikipedia.org/wiki/C_(programming_language)", logo: LOGOS.c },
      ],
    },
    {
      id: "mobile-blockchain",
      title: "Mobile & Blockchain",
      descriptor: "React Native and JavaFX for apps, Solidity and Rust for chains.",
      items: [
        { name: "Solidity", href: "https://soliditylang.org/", logo: LOGOS.solidity },
        { name: "Rust", href: "https://www.rust-lang.org/", logo: LOGOS.rust },
      ],
    },
    {
      id: "data-ai",
      title: "Data & AI",
      descriptor: "The stack I'm going deeper on right now.",
      items: [
        { name: "Python", href: "https://www.python.org/", logo: LOGOS.python },
        {
          name: "pandas",
          href: "https://pandas.pydata.org/",
          logo: LOGOS.pandas,
        },
        { name: "NumPy", href: "https://numpy.org/", logo: LOGOS.numpy },
        {
          name: "PyTorch",
          href: "https://pytorch.org/",
          logo: LOGOS.pytorch,
        },
        {
          name: "OpenCV",
          href: "https://opencv.org/",
          logo: LOGOS.opencv,
        },
        {
          name: "Claude Code",
          href: "https://claude.com/product/claude-code",
          logo: LOGOS.claudecode,
        },
      ],
    },
    {
      id: "data-infra",
      title: "Data & Infra",
      descriptor: "Where the data lives and how it ships.",
      items: [
        {
          name: "PostgreSQL",
          href: "https://www.postgresql.org/",
          logo: LOGOS.postgresql,
        },
        {
          name: "MongoDB",
          href: "https://www.mongodb.com/",
          logo: LOGOS.mongodb,
        },
        {
          name: "Apache Kafka",
          href: "https://kafka.apache.org/",
          logo: LOGOS.kafka,
        },
        { name: "Docker", href: "https://www.docker.com/", logo: LOGOS.docker },
        {
          name: "Kubernetes",
          href: "https://kubernetes.io/",
          logo: LOGOS.kubernetes,
        },
      ],
    },
    {
      id: "tooling",
      title: "Tooling",
      descriptor: "Build it, ship it, keep it working.",
      items: [
        { name: "Git", href: "https://git-scm.com/", logo: LOGOS.git },
        { name: "GitLab", href: "https://gitlab.com/", logo: LOGOS.gitlab },
        { name: "Postman", href: "https://www.postman.com/", logo: LOGOS.postman },
      ],
    },
  ],
} as const satisfies TechContent;
