import type { Testimonial, TestimonialsContent } from "./types";

const NO_TESTIMONIALS: readonly Testimonial[] = [];

// No testimonials yet — the array is intentionally empty. Add entries here
// once you have real quotes from people you've worked with; each needs a
// name, title, quote and avatar (a photo or a set of initials).
export const TESTIMONIALS = {
  header: {
    id: "testimonials",
    eyebrow: "Testimonials",
    heading: "What it's like to work with me.",
    subhead:
      "Just starting to collect these — check back soon, or ask me directly for references.",
  },
  items: NO_TESTIMONIALS,
} as const satisfies TestimonialsContent;
