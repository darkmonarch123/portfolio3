import f1Shot from "@/assets/images/work/f1-telemetry.png";
import nairaxShot from "@/assets/images/work/nairax-signal.png";
import newhopeShot from "@/assets/images/work/newhope-hospital.png";
import pinnacleShot from "@/assets/images/work/pinnacle-inc.png";
import prodesignShot from "@/assets/images/work/prodesign-africa.png";
import uniccreationsShot from "@/assets/images/work/uniccreations.png";

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
    heading: "Things I've built.",
    subhead:
      "Self-directed projects across fintech, AI, healthcare and e-commerce.",
  },
  projects: [
    {
      id: "prodesign-africa",
      name: "ProDesign Africa",
      domain: "github.com/darkmonarch123/ProdesignAfrica",
      href: "https://github.com/darkmonarch123/ProdesignAfrica",
      featured: true,
      description:
        "A 3D architecture builder for African professionals — CAD tooling built around Nigerian plot standards, ARCON/LASDRI compliance and local material costs, from Lagos to Nairobi.",
      role: "Full stack — the 3D web builder, the compliance-aware plan editor, and the services behind it.",
      stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
      screenshot: {
        src: prodesignShot,
        alt: "Dark hero for Prodesign Africa reading 'Design buildings that belong in Africa', beside a floor-plan editor panel labelled Lekki Duplex.",
      },
      linkLabel: "View on GitHub",
    },
    {
      id: "pinnacle-inc",
      name: "Pinnacle Inc",
      domain: "github.com/darkmonarch123/PinnacleCorp",
      href: "https://github.com/darkmonarch123/PinnacleCorp",
      featured: false,
      description:
        "A paper-trading platform for African investors — real market data, a full order desk, and a $10,000 virtual balance to practice on ETFs, stocks and Nasdaq names risk-free.",
      role: "Full stack — trading interface, portfolio equity chart, and the order desk behind it.",
      stack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
      screenshot: {
        src: pinnacleShot,
        alt: "Pinnacle homepage headlined 'Elevate Your Wealth', with a portfolio equity chart card showing simulated gains and buying power.",
      },
      linkLabel: "View on GitHub",
    },
    // {
    //   id: "nairax-signal-pro",
    //   name: "NairaX Signal Pro",
    //   domain: "github.com/darkmonarch123",
    //   href: "https://github.com/darkmonarch123",
    //   featured: false,
    //   description:
    //     "A memecoin signal bot with a Telegram bot and web dashboard, monitoring Solana, BSC and Ethereum around the clock. Scans 340+ new coins an hour, scores each one across 7 signals, and alerts Nigerian users once a coin scores 70+ — free users get delayed alerts, premium subscribers get real-time unlimited alerts.",
    //   role: "Full stack — the scoring engine, the Telegram bot, and the web dashboard.",
    //   stack: ["Node.js", "TypeScript", "React", "PostgreSQL", "Docker"],
    //   screenshot: {
    //     src: nairaxShot,
    //     alt: "Placeholder screenshot for the NairaX Signal Pro memecoin bot dashboard.",
    //   },
    //   linkLabel: "View on GitHub",
    // },
    // {
    //   id: "newhope-hospital",
    //   name: "NewHope Hospital System",
    //   domain: "github.com/darkmonarch123",
    //   href: "https://github.com/darkmonarch123",
    //   featured: false,
    //   description:
    //     "A hospital management system that helps patients track appointments, cuts down paper trails, and makes ward sorting easier for staff.",
    //   role: "Full stack — appointment tracking, records, and ward-sorting workflows.",
    //   stack: ["React", "Node.js", "Express", "MongoDB"],
    //   screenshot: {
    //     src: newhopeShot,
    //     alt: "Placeholder screenshot for the NewHope hospital management system.",
    //   },
    //   linkLabel: "View on GitHub",
    // },
    {
      id: "uniccreations",
      name: "UNICCREATIONS",
      domain: "github.com/darkmonarch123/uniccreations-style-hub",
      href: "https://github.com/darkmonarch123/uniccreations-style-hub",
      featured: false,
      description:
        "A responsive, high-fidelity e-commerce storefront for a Lagos-made women's fashion brand — clean product cards, a full shop and custom-order flow, and a premium minimalist aesthetic across every page.",
      role: "Front end and back end — the storefront UI and the store logic behind it.",
      stack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      screenshot: {
        src: uniccreationsShot,
        alt: "UNIC Creations homepage reading 'Be You. Be UNIC.' beside a model in a dark green two-piece crepe set.",
      },
      linkLabel: "View on GitHub",
    },
    // {
    //   id: "f1-telemetry",
    //   name: "F1 Telemetry",
    //   domain: "github.com/darkmonarch123",
    //   href: "https://github.com/darkmonarch123",
    //   featured: false,
    //   description:
    //     "A Formula 1 telemetry web app for viewing live and historical race data.",
    //   role: "Full stack — the telemetry dashboard and the data layer behind it.",
    //   stack: ["React", "TypeScript", "Node.js"],
    //   screenshot: {
    //     src: f1Shot,
    //     alt: "Placeholder screenshot for the F1 Telemetry dashboard.",
    //   },
    //   linkLabel: "View on GitHub",
    // },
  ],
} as const satisfies WorkContent;
