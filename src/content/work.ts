import f1Shot from "@/assets/images/work/f1-telemetry.png";
import nairaxShot from "@/assets/images/work/nairax-signal.png";
import newhopeShot from "@/assets/images/work/newhope-hospital.png";
import pinnacleShot from "@/assets/images/work/pinnacle-inc.png";
import prodesignShot from "@/assets/images/work/prodesign-africa.png";
import uniccreationsShot from "@/assets/images/work/uniccreations.png";
import foremanShot from "@/assets/images/work/foreman.png";

import type { WorkContent } from "./types";

// Screenshot alt text never repeats the project name — the card's heading sits
// right below the image, and a screen reader would say the name twice.
//
// NOTE: NairaX Signal Pro, NewHope Hospital System and F1 Telemetry still use
// generated placeholder screenshots — swap the files in
// src/assets/images/work/ for real screenshots when you have them.
export const WORK = {
  header: {
  id: "work",
  eyebrow: "Work",
  heading: "Engineering projects.",
  subhead:
    "Self-directed software projects across AI, healthcare, and e-commerce—focused on building reliable, scalable systems.",
},
 projects: [
  {
    id: "prodesign-africa",
    name: "ProDesign Africa",
    domain: "github.com/darkmonarch123/ProdesignAfrica",
    href: "https://prodesignafrica.vercel.app/",
    featured: false,
    description:
      "A web-based 3D architecture and planning tool built for African construction professionals. It supports Nigerian plot standards, ARCON/LASDRI-aligned compliance checks, and localized material-cost estimates, helping users move from concept to buildable plans.",
    role: "Full-stack engineer — built the 3D web builder, compliance-aware plan editor, and supporting backend services.",
    stack: [
      "React",
      "TypeScript",
      "Spring Boot",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Tailwind CSS",
      "Zustand",
    ],
    screenshot: {
      src: prodesignShot,
      alt: "Dark hero for ProDesign Africa reading 'Design buildings that belong in Africa', beside a floor-plan editor panel labelled Lekki Duplex.",
    },
    linkLabel: "View live demo",
  },
  {
    id: "pinnacle-inc",
    name: "Pinnacle Inc",
    domain: "github.com/darkmonarch123/PinnacleCorp",
    href: "https://pinnacle-corp.vercel.app/",
    featured: false,
    description:
      "A paper-trading platform that lets African investors practice trading ETFs, U.S. stocks, and Nasdaq-listed companies with a $10,000 virtual portfolio. It integrates real-time market data with order placement, position tracking, and portfolio performance visualization.",
    role: "Full-stack engineer — designed the trading interface, portfolio equity chart, and order-management workflow.",
    stack: [
      "React",
      "TypeScript",
      "Java",
      "Spring Boot",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Tailwind CSS",
      "Chart.js",
      "Twelve Data",
      "Clerk",
    ],
    screenshot: {
      src: pinnacleShot,
      alt: "Pinnacle homepage headlined 'Elevate Your Wealth', with a portfolio equity chart card showing simulated gains and buying power.",
    },
    linkLabel: "View live demo",
  },
  {
    id: "foreman",
    name: "Foreman",
    domain: "github.com/darkmonarch123/Foreman",
    href: "https://foreman-xtor.onrender.com",
    featured: true,
    description:
      "A real-time collaborative visual workspace for brainstorming, project planning, diagrams, and team coordination. Users can create boards from templates, add notes, shapes, arrows, and drawings, collaborate with role-based access, comment, follow activity, and export boards as PNG.",
    role: "Full-stack engineer — built the collaborative workspace UI, real-time synchronization, and board-management logic.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "WebSockets",
    ],
    screenshot: {
      src: foremanShot,
      alt: "Foreman homepage reading 'Collaborate in real-time', beside a visual workspace with sticky notes and drawings.",
    },
    linkLabel: "View live demo",
  },
],
} as const satisfies WorkContent;
