export const site = {
  name: "Elí Gonzalez",
  title: "Elí Gonzalez · Data Scientist, AI Engineer & Builder",
  description:
    "I'm curious about how businesses work, and how data and AI can be used to understand, improve, or build them. Notes from someone who likes turning fuzzy ideas into real products, experiments, and companies.",
  url: "https://eligoze75.github.io",
  linkedin: "https://www.linkedin.com/in/el%C3%AD-gonz%C3%A1lez-zequeida/",
  medium: "https://medium.com/@eligoze75",
  email: "eligoze75@gmail.com",
};

export const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: site.medium, label: "Writing", external: true },
];

export const hero = {
  headline: "I turn ideas into products.",
  intro: [
    "I've spent the last several years moving between startups, machine learning systems, growth experiments, AI products, and a few businesses of my own. What ties it together is figuring out how things work, how they grow, and where data and AI can have a meaningful impact.",
    "What keeps me interested is the possibility of turning ideas into things that people actually use. Whether it's a fraud model evaluating thousands of decisions every day or a product reaching its first users, I find the greatest satisfaction in seeing technology move beyond prototypes and into the real world.",
  ],
  pillars: ["Data Science", "AI", "Products", "Entrepreneurship"],
  avatar: "/img/portfolio_website_pic.png",
};

export const brewo = {
  id: "brewo",
  name: "Brewo",
  badge: "Live product · Founder",
  tagline: "An AI-powered newsletter for Latin American startups, tech & finance",
  logo: "/img/brewo_cup_logo.png",
  cupLogo: "/img/brewo_cup_logo.png",
  description:
    "Brewo began with a simple question: what if a small crew of AI agents could research and write a genuinely good newsletter every day? So I built it. The idea, the product, and the pipeline behind each issue, covering startups, tech, and finance across Latin America.",
  contributions: [
    "A small crew of AI agents that research, summarize, translate, and draft each issue.",
    "The whole product around it: site, subscriptions, payments, and delivery.",
    "Constant tinkering based on what subscribers actually open and read.",
  ],
  tags: ["Gen AI", "RAG", "Multi-agent workflows", "Product development", "Growth"],
  links: {
    site: "https://brewo.io",
    subscribe: "https://brewo.io/subscribe",
  },
};

export type Project = {
  id: string;
  title: string;
  tag: string;
  meta: string;
  description: string;
  href?: string;
  cta: string;
  logo?: string;
  logos?: { src: string; alt: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "munchgo",
    title: "MunchGo, a multi-brand ghost kitchen",
    tag: "Founder",
    meta: "Mexico City · Food delivery",
    description:
      "A delivery-only kitchen in Mexico City running three brands out of one space: MunchGo, WingsEat, and Munchin' Dogs. I chose the menus, pricing, and positioning by digging through Yelp and maps data to find gaps the competition had left open.",
    cta: "Founder & operator",
    featured: true,
    logos: [
      { src: "/img/munchgo_logo.png", alt: "MunchGo" },
      { src: "/img/wingseat_logo.png", alt: "WingsEat" },
      { src: "/img/munchindogs_logo.png", alt: "Munchin' Dogs" },
    ],
  },
  {
    id: "megumi",
    title: "Megumi",
    tag: "Open source",
    meta: "Python · PyPI",
    description:
      "An open-source Python package for feature selection. I built it mostly because I kept rewriting the same selection code on every project and figured others probably did too.",
    href: "https://pypi.org/project/megumi/",
    cta: "View on PyPI",
    logo: "/img/Megumi_Icon.png",
  },
  {
    id: "amazon-insightcart",
    title: "Amazon_InsightCart",
    tag: "RAG",
    meta: "Streamlit · Python",
    description:
      "A shopping assistant that searches Amazon products with hybrid retrieval and re-ranking, then answers in plain language with the sources to back it up.",
    href: "https://github.com/Eligoze75/Amazon_InsightCart/tree/master",
    cta: "View on GitHub",
    logo: "/img/Amazon_InsightCart.png",
  },
  {
    id: "aieo",
    title: "AiEO-Visibility-Challenge",
    tag: "Team",
    meta: "LLM evals · Python",
    description:
      "An experiment in how well GPT, Gemini, and Claude actually know Canadian life and business, using the same prompts, parallel runs, and BM25-based scoring to compare them fairly.",
    href: "https://github.com/Eligoze75/AiEO-Visibility-Challenge/tree/master",
    cta: "View on GitHub",
    logo: "/img/Aeio_visibility_challenge.png",
  },
  {
    id: "food-pulse",
    title: "Canada Food Pulse",
    tag: "Dashboard",
    meta: "Plotly Dash · Yelp",
    description:
      "An interactive map of Canada's food scene built from public Yelp data. A small excuse to poke at a question I find fun: what makes a place worth opening?",
    href: "https://859f9c80-f35f-4f6b-9d73-70e74c5e85e2.plotly.app/",
    cta: "Open live app",
    logo: "/img/food_pulse.png",
  },
];

export const experience = [
  {
    company: "Kueski",
    role: "Senior Data Scientist",
    domain: "Fintech · Fraud & Risk",
    logo: "/img/kueski_logo.svg",
    darkBg: false,
  },
  {
    company: "Rappi",
    role: "Growth Data Scientist",
    domain: "On-demand delivery unicorn · Growth",
    logo: "/img/rappi_logo.jpeg",
    darkBg: false,
  },
  {
    company: "Heineken",
    role: "Growth Data Scientist",
    domain: "CPG · B2B e-commerce · Growth",
    logo: "/img/Heineken-Logo.png",
    darkBg: false,
  },
  {
    company: "Insaite",
    role: "Data Science Sales Engineer",
    domain: "AI startup · Strategy & consulting",
    logo: "/img/insaite_logo.png",
    darkBg: false,
  },
  {
    company: "Axity",
    role: "Junior Data Scientist",
    domain: "Digital transformation · Consulting",
    logo: "/img/axity_logo.png",
    darkBg: true,
  },
];

export const about = {
  title: "About me",
  facts: [
    { label: "Based in", value: "Vancouver, BC" },
    { label: "Experience", value: "6+ years" },
    { label: "Currently", value: "Master of Data Science" },
  ],
  paragraphs: [
    "Hi, I'm Elí.",
    "I'm a data scientist, AI engineer, and entrepreneur who enjoys turning messy questions into useful products, systems, and decisions.",
    "Over the years I've worked across fraud prevention, growth experimentation, machine learning, and AI products in startups, fintech, marketplaces, and consumer businesses. What keeps me interested is the challenge of understanding a problem, identifying what matters, and turning ideas into something people actually use.",
    "The work I'm most proud of isn't necessarily the most technical. It's the products, models, and systems that ended up influencing real decisions and reaching real people, whether that's a fraud model evaluating thousands of applications, an experiment shaping product strategy, or an AI product finding its first users.",
    "When I'm not working, I'm usually building something: AI products, open-source software, side businesses, or writing about what I learn along the way.",
  ],
};

export const workTimeline = [
  {
    company: "Kueski",
    tag: "BNPL Fintech · Mexico",
    role: "Senior Data Scientist",
    logo: "/img/kueski_logo.svg",
    darkBg: false,
    body: "Owned production fraud ML end to end. Cut false positives by 65% and fraud losses by 70%, and added graph analysis to surface fraud rings that single-account models kept missing.",
  },
  {
    company: "Heineken",
    tag: "Global CPG · B2B e-commerce",
    role: "Growth Data Scientist",
    logo: "/img/Heineken-Logo.png",
    darkBg: false,
    body: "Ran a subscription experiment that lifted revenue 16%, and built an NLP pipeline that sorted incoming customer reviews to the right team in under two minutes.",
  },
  {
    company: "Rappi",
    tag: "Unicorn · On-demand super app",
    role: "Growth Data Scientist",
    logo: "/img/rappi_logo.jpeg",
    darkBg: false,
    body: "Built marketing attribution to see which channels actually paid off, and ran A/B tests on vendors and creatives with causal impact analysis to separate signal from noise.",
  },
  {
    company: "Insaite",
    tag: "AI startup · Mexico",
    role: "Data Science Sales Engineer",
    logo: "/img/insaite_logo.png",
    darkBg: false,
    body: "Sat between data science and the sales conversation, scoping ML solutions and explaining, in plain terms, what they'd actually do for a C-level client's business.",
  },
  {
    company: "Axity",
    tag: "Digital transformation consultancy",
    role: "Junior Data Scientist",
    logo: "/img/axity_logo.png",
    darkBg: true,
    body: "My first role in data. EDA and feature engineering on client projects, where I learned to ask the right questions before reaching for a model.",
  },
];

export const education = [
  {
    degree: "Master of Data Science",
    school: "University of British Columbia · Vancouver, BC · 2025–2026",
    logo: "/img/ubc_logo.png",
  },
  {
    degree: "Data Science & Machine Learning Certification",
    school: "Massachusetts Institute of Technology · 2022",
    logo: "/img/MIT_logo.svg",
  },
  {
    degree: "Bachelor of Actuarial Sciences",
    school: "Universidad Nacional Autónoma de México · Mexico City · 2020",
    logo: "/img/unam_logo.svg",
  },
];

export const expertise = [
  {
    name: "Machine Learning",
    blurb:
      "Training models that hold up outside a notebook: fraud, risk, NLP, and the unglamorous production parts that decide whether any of it matters.",
    items: ["Python", "scikit-learn", "Fraud & risk", "NLP", "Feature engineering"],
  },
  {
    name: "Generative AI",
    blurb:
      "LLM-powered products and agentic workflows. Fun precisely because the whole field is still half figured out.",
    items: ["LLMs", "RAG", "Multi-agent workflows", "Claude / GPT", "Evals"],
  },
  {
    name: "Experimentation & Causal Inference",
    blurb:
      "A/B tests, causal impact, and the constant, healthy fight against fooling yourself with a misleading chart.",
    items: ["A/B testing", "Causal inference", "Attribution", "Statistics"],
  },
  {
    name: "Product Analytics",
    blurb:
      "Understanding how a product is actually used, then turning that into decisions someone can act on.",
    items: ["SQL", "Growth metrics", "Dashboards", "Plotly Dash"],
  },
  {
    name: "Product Development",
    blurb:
      "Taking an idea all the way to something people can open in a browser and use.",
    items: ["Next.js", "Supabase", "Stripe", "Full-stack"],
  },
  {
    name: "Entrepreneurship",
    blurb:
      "Starting things, pricing them, and learning the parts of a business the spreadsheet never warns you about.",
    items: ["Founding", "Operations", "Go-to-market", "Pricing"],
  },
  {
    name: "Open Source Software",
    blurb:
      "Packaging the useful bits of my work so other people can pick them up and skip the boring part.",
    items: ["Python packaging", "PyPI", "Docs", "Testing"],
  },
];

export const now = {
  logo: "/img/ubc_logo.png",
  text: "Doing my Master of Data Science at UBC, digging into ML systems, LLM applications, and the analytics that help products and teams make better calls. Still building things on the side.",
};
