export const SITE = {
  brand: "Steven Law — Web & AI Automations",
  tagline: "Websites & AI Automations that Actually Ship.",
  description: "I design, build, and automate so you get results faster.",
  
  // External Links
  calendly: "https://calendly.com/stelaw469/15-minute-ai-visibility-strategy-call",
  linkedin: "https://www.linkedin.com/in/steven-law-b918b530b/",
  portfolio: "https://github.com/slaw469",
  email: "hello@yourdomain.com",
  
  // Hero Media
  hero: {
    videoSrc: "/hero.mp4",        // Desktop only
    posterSrc: "/hero-poster.jpg" // Used everywhere as fallback
  },
  
  // Services
  services: [
    {
      title: "Bespoke Websites",
      value: "Crafting bespoke websites that reflect your brand's unique identity and drive engagement.",
      bullets: []
    },
    {
      title: "Elite Automations",
      value: "Implementing elite automation solutions to streamline workflows and boost productivity.",
      bullets: []
    },
    {
      title: "Strategic Consulting",
      value: "Providing strategic consulting to align technology with your business goals for optimal results.",
      bullets: []
    }
  ],
  
  // Process Steps
  process: [
    { step: "01", title: "Discover", description: "Understand your goals" },
    { step: "02", title: "Build", description: "Design & develop" },
    { step: "03", title: "Launch", description: "Deploy & automate" }
  ]
} as const;

