export const estimatorConfig = {
  projectTypes: [
    {
      id: "business",
      label: "Business website",
      description: "A professional website for your company.",
      base: 8500,
    },
    {
      id: "portfolio",
      label: "Portfolio / personal",
      description:
        "Showcase your work, experience, or personal brand.",
      base: 7500,
    },
    {
      id: "landing",
      label: "Landing page",
      description:
        "A focused page designed around one goal.",
      base: 5000,
    },
    {
      id: "store",
      label: "Online store",
      description:
        "Sell products or services online.",
      base: 15000,
    },
    {
      id: "application",
      label: "Web application",
      description:
        "A custom platform or internal business system.",
      base: 20000,
    },
  ],

  pages: [
    {
      id: "1-4",
      label: "1–4 pages",
      description: "A focused website with essential pages.",
      adjustment: 0,
    },
    {
      id: "5-7",
      label: "5–7 pages",
      description: "A more complete business website.",
      adjustment: 3500,
    },
    {
      id: "8-10",
      label: "8–10 pages",
      description: "A larger content-driven website.",
      adjustment: 7000,
    },
    {
      id: "10-plus",
      label: "10+ pages",
      description: "A large website with extensive content.",
      adjustment: 10000,
    },
  ],

  designs: [
    {
      id: "clean",
      label: "Clean & professional",
      description:
        "Simple, polished, and focused on clarity.",
      adjustment: 0,
    },
    {
      id: "modern",
      label: "Modern & interactive",
      description:
        "More visual interaction, animation, and personality.",
      adjustment: 2500,
    },
    {
      id: "premium",
      label: "Premium / highly customized",
      description:
        "A highly tailored visual experience.",
      adjustment: 5000,
    },
  ],

  features: [
    {
      id: "contact",
      label: "Contact forms",
      description:
        "Let visitors easily send inquiries.",
      adjustment: 500,
    },
    {
      id: "booking",
      label: "Booking system",
      description:
        "Allow customers to schedule appointments.",
      adjustment: 2500,
    },
    {
      id: "cms",
      label: "CMS / editable content",
      description:
        "Manage website content without editing code.",
      adjustment: 3000,
    },
    {
      id: "payments",
      label: "Online payments",
      description:
        "Accept payments through your website.",
      adjustment: 4000,
    },
    {
      id: "accounts",
      label: "User accounts",
      description:
        "Allow customers to register and log in.",
      adjustment: 5000,
    },
    {
      id: "dashboard",
      label: "Dashboard",
      description:
        "Provide an admin or management dashboard.",
      adjustment: 6000,
    },
    {
      id: "animations",
      label: "Animations & interactions",
      description:
        "Add motion and interactive experiences.",
      adjustment: 1500,
    },
    {
      id: "analytics",
      label: "Analytics",
      description:
        "Track traffic and website performance.",
      adjustment: 500,
    },
  ],

  timelines: [
    {
      id: "flexible",
      label: "I'm flexible",
      description: "No strict deadline.",
      adjustment: 0,
    },
    {
      id: "1-2-months",
      label: "1–2 months",
      description: "A normal project timeline.",
      adjustment: 0,
    },
    {
      id: "2-4-weeks",
      label: "2–4 weeks",
      description:
        "I'd like to launch relatively soon.",
      adjustment: 2500,
    },
    {
      id: "under-2-weeks",
      label: "Under 2 weeks",
      description:
        "I need a fast turnaround.",
      adjustment: 5000,
    },
  ],

  /*
   * These are PACKAGE STARTING PRICES.
   *
   * They are NOT the calculator's final prices.
   */
  packages: {
    starter: {
      id: "starter",
      name: "Starter",
      startingPrice: 8500,
      description:
        "For focused websites and simple digital experiences.",
      bestFor: [
        "Landing pages",
        "Portfolio websites",
        "Small business websites",
        "1–4 page websites",
      ],
    },

    business: {
      id: "business",
      name: "Business",
      startingPrice: 15000,
      description:
        "For growing businesses that need more pages and functionality.",
      bestFor: [
        "Growing businesses",
        "Service companies",
        "Content-driven websites",
        "Websites with integrations",
      ],
    },

    professional: {
      id: "professional",
      name: "Professional",
      startingPrice: 25000,
      description:
        "For advanced and highly customized digital experiences.",
      bestFor: [
        "Advanced websites",
        "Web applications",
        "Dashboards",
        "Custom integrations",
      ],
    },
  },
};