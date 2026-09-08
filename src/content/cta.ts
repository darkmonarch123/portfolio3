import type { CtaContent } from "./types";

// Every contact row keeps a real href — clickable, not just displayed text.
export const CTA = {
  id: "contact",
  eyebrow: "Contact",
  heading: "Got something you want built?",
  subhead:
    "Tell me what you're working on. I'll tell you honestly whether I'm the right person for it — and what it would take.",
  primary: {
    label: "Start a project",
    href: "mailto:emmanueltemiloluwa441@yahoo.com",
  },
  secondary: {
    label: "Download CV",
    href: "/files/temiloluwa-oluwanifemi-software-engineer.pdf",
  },
  contactsLead: "You'll also find me here.",
  contacts: [
    {
      id: "email",
      label: "Email",
      value: "emmanueltemiloluwa441@yahoo.com",
      href: "mailto:emmanueltemiloluwa441@yahoo.com",
      copyLabel: "Copy email address",
      copiedLabel: "Copied!",
    },
    {
      id: "phone",
      label: "Phone",
      value: "+234 704 876 7396",
      href: "tel:+2347048767396",
      copyLabel: "Copy phone number",
      copiedLabel: "Copied!",
    },
  ],
} as const satisfies CtaContent;
