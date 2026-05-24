import {
  Bot,
  Code2,
  Globe,
  MessageSquare,
  LayoutDashboard,
  Sparkles,
  Search,
  PenTool,
  Rocket,
  Headphones,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Briefcase,
  GitFork,
  Camera,
  Zap,
  Shield,
  TrendingUp,
  Layers,
  Gauge,
  Smartphone,
  Brain,
  Cpu,
  Workflow,
  BarChart3,
  Cloud,
  Lock,
  Timer,
  Clock,
  DollarSign,
  Users,
  RefreshCw,
  FileText,
  Settings,
  Lightbulb,
  Target,
  LineChart,
  Palette,
  MonitorSmartphone,
  Server,
  Database,
  Share2,
  ShoppingCart,
  CreditCard,
  Bell,
  Activity,
  PieChart,
  Table,
  Filter,
  Sliders,
  Blocks,
  Route,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  slug: string;
};

export const services: Service[] = [
  {
    icon: Bot,
    title: "AI Automation",
    slug: "ai-automation",
    description:
      "Streamline your workflows with intelligent automation agents that handle repetitive tasks, process data and make smart decisions 24/7.",
  },
  {
    icon: Code2,
    title: "SaaS Development",
    slug: "saas-development",
    description:
      "Custom SaaS platforms built from the ground up with scalable architecture, seamless APIs and beautiful user experiences.",
  },
  {
    icon: Globe,
    title: "Web Development",
    slug: "web-development",
    description:
      "High-performance websites and web applications built with modern frameworks, optimized for speed, SEO and conversion.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    slug: "ai-chatbots",
    description:
      "Intelligent conversational agents that engage customers, answer questions and drive conversions around the clock.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & Tools",
    slug: "dashboards-tools",
    description:
      "Custom internal tools and analytics dashboards that give you real-time insights and control over your business operations.",
  },
];

export type Project = {
  slug: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
  client: string;
  year: string;
  role: string;
  overview: {
    challenge: string;
    solution: string;
  };
  features: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  results: {
    value: number;
    suffix: string;
    label: string;
  }[];
  nextProjectSlug: string;
};

export const projects: Project[] = [
  {
    slug: "xaubot-v2",
    image: "/project1.png",
    title: "XAUBOT v2",
    description:
      "Automated XAU/USD trading bot on MetaTrader 5 + Python with live Flask dashboard. First profitable version: +$160 over 50 trades at 52% win rate.",
    tags: ["Python", "MetaTrader 5", "Flask", "Pandas"],
    client: "Personal Project",
    year: "2026",
    role: "Full-stack Development & Algorithm Design",
    overview: {
      challenge:
        "Building a consistently profitable algorithmic trading bot for XAU/USD on FTMO prop firm demo accounts. V1 was net negative — the bot fired trades against the trend due to a critical inversion bug in the H1 trend filter, costing weeks of P&L before diagnosis.",
      solution:
        "Rewrote the entry logic with a corrected H1 trend filter as the primary gating condition, added an asymmetric SHORT bias boost (+15/−5), introduced a break-even trigger at 0.90, and built a real-time Flask dashboard at localhost:5000 for live monitoring. V2 shipped May 2026 as the first profitable iteration.",
    },
    features: [
      {
        icon: TrendingUp,
        title: "Multi-Timeframe Analysis",
        description:
          "Pulls live OHLCV data from MT5 and runs H1 trend direction + M15 entry confirmation scoring, ensuring no trade fires against the dominant trend.",
      },
      {
        icon: Cpu,
        title: "Asymmetric Bias Engine",
        description:
          "Custom directional scoring with a +15 SHORT boost vs −5 LONG penalty, tuned specifically for XAUUSD behavior in bearish H1 conditions.",
      },
      {
        icon: LineChart,
        title: "Break-Even Management",
        description:
          "Automated SL-to-entry movement when profit reaches 90% of TP target, locking in safety on high-conviction setups without cutting winners short.",
      },
      {
        icon: LayoutDashboard,
        title: "Real-Time Flask Dashboard",
        description:
          "Live equity curve visualization, trade log, session breakdown, and bot config panel running on localhost:5000 for instant regime detection.",
      },
    ],
    results: [
      { value: 160, suffix: "$", label: "Net Profit (50 Trades)" },
      { value: 52, suffix: "%", label: "Win Rate (26W / 24L)" },
      { value: 92, suffix: "$", label: "Best Session (NY)" },
      { value: 1, suffix: "", label: "Bug Fix That Unlocked Profit" },
    ],
    nextProjectSlug: "zyn-consultancy",
  },
  {
    slug: "zyn-consultancy",
    image: "/project2.png",
    title: "Zyn Consultancy",
    description:
      "Complete WordPress website for a Dubai-based Tax & Business Advisory LLC — built to generate leads, establish authority, and rank for competitive UAE tax keywords.",
    tags: ["WordPress", "Elementor Pro", "SEO", "Cloudflare"],
    client: "Zyn Consultancy LLC",
    year: "2025",
    role: "Full Website Design & Development",
    overview: {
      challenge:
        "Dubai's professional services market is saturated. Tax and consulting firms compete heavily on Google for high-intent keywords like 'VAT consultant Dubai' and 'corporate tax UAE.' The client had no existing web presence and needed to go from zero to a credible, converting website that could stand next to established firms.",
      solution:
        "Built a complete WordPress site from scratch with custom theme design, 10+ pages of SEO-optimized content, lead capture forms, and consultation booking flow. Launched in 7 weeks with LocalBusiness schema, Core Web Vitals optimization, and Cloudflare CDN — live at zynconsultancy.com.",
    },
    features: [
      {
        icon: Search,
        title: "SEO Architecture & Schema",
        description:
          "Keyword-mapped service pages with LocalBusiness, FAQ, and Service schema markup targeting competitive UAE tax keywords — planned before a single page was built.",
      },
      {
        icon: MessageCircle,
        title: "Lead Generation System",
        description:
          "WPForms consultation booking forms with email notifications and CRM webhook integration. Clear, low-friction CTAs on every page drive inbound consultation requests.",
      },
      {
        icon: Zap,
        title: "Performance Optimized",
        description:
          "WP Rocket caching, image optimization, and Cloudflare CDN delivering Core Web Vitals targets — LCP under 2.5s, CLS under 0.1 across all pages.",
      },
      {
        icon: Headphones,
        title: "Client Training & Handover",
        description:
          "Admin training video and written documentation enabling the client to independently update services, publish blog posts, and manage enquiries post-launch.",
      },
    ],
    results: [
      { value: 7, suffix: " wks", label: "Discovery to Launch" },
      { value: 10, suffix: "+", label: "Pages Delivered" },
      { value: 100, suffix: "%", label: "Mobile Responsive" },
      { value: 1, suffix: "st", label: "Month — Bookings Received" },
    ],
    nextProjectSlug: "retail-business-management-erp",
  },
  {
    slug: "retail-business-management-erp",
    image: "/project3.png",
    title: "Retail & Business Management ERP",
    description:
      "Offline-first desktop ERP for retail stores, wholesalers, and distribution businesses — POS, inventory, HR, payroll, finance, and e-commerce orders in a single Electron + React application with local IndexedDB storage.",
    tags: ["Electron", "React", "TypeScript", "IndexedDB", "TailwindCSS"],
    client: "Personal Project",
    year: "2025",
    role: "Full-stack Desktop Development & Architecture",
    overview: {
      challenge:
        "Small and medium retail businesses and wholesalers rely on expensive cloud-based ERP software that requires constant internet — a serious problem in regions with unreliable connectivity. They also juggle disconnected tools for sales, inventory, HR, and finance, resulting in manual data entry, poor stock visibility, and operational bottlenecks that eat into margins.",
      solution:
        "Built a complete offline desktop ERP application using Electron and React with IndexedDB for local persistent storage. The system centralizes 12+ business modules — POS, sales & invoicing, inventory management, procurement, customers & suppliers, HR & payroll, attendance & leaves, finance & expenses, e-commerce orders, and reports & analytics — into a single installable desktop app that runs at native speed with zero internet dependency.",
    },
    features: [
      {
        icon: Database,
        title: "Offline-First Architecture",
        description:
          "All business data stored locally via IndexedDB using the idb library. Zero server dependency — the application runs at native desktop speed with no network latency, functioning fully without internet access.",
      },
      {
        icon: Layers,
        title: "12+ Integrated Business Modules",
        description:
          "POS, sales & invoicing, inventory management, product catalog, customers & suppliers, purchases, HR & payroll, attendance & leaves, finance & expenses, e-commerce orders, and reports — all in one cohesive platform.",
      },
      {
        icon: FileText,
        title: "Inventory Auditing System",
        description:
          "Dedicated stockMovements store tracks every inventory change with product reference, warehouse, movement type, timestamp, and source reference — enabling full audit trails, history tracking, and analytics generation.",
      },
      {
        icon: BarChart3,
        title: "Real-Time Dashboard & Analytics",
        description:
          "Revenue trends, sales analytics, inventory insights, and business metrics rendered with Recharts. Dashboard loads instantly from local data with no API calls — executives get answers in milliseconds.",
      },
    ],
    results: [
      { value: 12, suffix: "+", label: "Business Modules" },
      { value: 100, suffix: "%", label: "Offline Functionality" },
      { value: 25, suffix: "+", label: "IndexedDB Stores" },
      { value: 0, suffix: "", label: "Monthly Cloud Costs" },
    ],
    nextProjectSlug: "xaubot-v2",
  },
];

export type ProcessStep = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    icon: Search,
    title: "Discovery",
    description: "We dive deep into your goals, audience and requirements to define the perfect solution.",
  },
  {
    icon: PenTool,
    title: "Plan & Design",
    description: "Wireframes, prototypes and architecture planning to map out every detail before development.",
  },
  {
    icon: Code2,
    title: "Build",
    description: "Agile development with regular updates, clean code and thorough testing at every stage.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Smooth deployment with monitoring, analytics and a go-to-market strategy to ensure success.",
  },
  {
    icon: Headphones,
    title: "Support",
    description: "Ongoing maintenance, updates and 24/7 support to keep your product running flawlessly.",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  avatar: string;
  stars: number;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "CEO",
    company: "DataFlow",
    avatar: "",
    stars: 5,
    quote:
      "Beber Builds transformed our entire workflow. Their AI automation saved us 40+ hours per week. The team is incredibly talented and responsive.",
  },
  {
    name: "Marcus Rivera",
    role: "Founder",
    company: "ScaleUp",
    avatar: "",
    stars: 5,
    quote:
      "We launched our SaaS platform in half the expected time. The quality of code and attention to detail exceeded every expectation.",
  },
  {
    name: "Emily Park",
    role: "CTO",
    company: "NovaTech",
    avatar: "",
    stars: 5,
    quote:
      "The chatbot they built handles 80% of our customer queries automatically. Our support team can now focus on high-value conversations.",
  },
];

export type Stat = {
  value: string;
  target: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
};

export const stats: Stat[] = [
  { value: "15+", target: 15, suffix: "+", label: "Projects Delivered", icon: CheckCircle },
  { value: "20+", target: 20, suffix: "+", label: "Happy Clients", icon: Sparkles },
  { value: "2+", target: 2, suffix: "+", label: "Years Experience", icon: Rocket },
  { value: "99%", target: 99, suffix: "%", label: "Client Satisfaction", icon: CheckCircle },
];


export type ContactInfo = {
  icon: LucideIcon;
  label: string;
  value: string;
};

export const contactInfo: ContactInfo[] = [
  { icon: Mail, label: "Email", value: "hello@beberbuilds.com" },
  { icon: Phone, label: "Phone", value: "+92 300 1234567" },
  { icon: MapPin, label: "Location", value: "Worldwide — Remote" },
];

export const footerLinks = {
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Blog", href: "#blog" },
  ],
  services: [
    { label: "AI Automation", href: "/services/ai-automation" },
    { label: "SaaS Development", href: "/services/saas-development" },
    { label: "Web Development", href: "/services/web-development" },
    { label: "AI Chatbots", href: "/services/ai-chatbots" },
    { label: "Dashboards & Tools", href: "/services/dashboards-tools" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export const socialLinks = [
  { icon: MessageCircle, href: "#", label: "Twitter" },
  { icon: Briefcase, href: "#", label: "LinkedIn" },
  { icon: GitFork, href: "#", label: "GitHub" },
  { icon: Camera, href: "#", label: "Instagram" },
];

export const brandLogos = [
  { name: "OpenAI", src: "/brands/openai.svg" },
  { name: "Vercel", src: "/brands/vercel.svg" },
  { name: "AWS", src: "/brands/aws.svg" },
  { name: "Next.js", src: "/brands/nextjs.svg" },
  { name: "Stripe", src: "/brands/stripe.svg" },
  { name: "MongoDB", src: "/brands/mongodb.svg" },
];

export type ServiceDetail = {
  slug: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  overview: {
    what: string;
    why: string;
  };
  features: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  benefits: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  techStack: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  useCases: {
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "ai-automation",
    icon: Bot,
    title: "AI Automation",
    subtitle: "Intelligent automation that works while you sleep",
    description:
      "We build custom AI automation agents that handle your repetitive workflows, process complex data, and make intelligent decisions — freeing your team to focus on high-impact work that drives growth.",
    overview: {
      what: "AI automation replaces manual, repetitive work with intelligent software agents that can process data, trigger actions across your tools, and make decisions based on rules or machine learning models. From lead enrichment and invoice processing to content moderation and inventory forecasting — our agents run 24/7 without fatigue or error.",
      why: "Businesses lose an average of 30% of employee time to repetitive manual tasks. Our AI automation solutions reclaim those hours, cut operational costs by up to 60%, and eliminate human error from critical workflows. The result is a faster, leaner operation that scales without linearly scaling headcount.",
    },
    features: [
      {
        icon: Brain,
        title: "Intelligent Decision Engine",
        description:
          "Custom ML models that evaluate incoming data against your business rules, routing items, flagging anomalies, and making approval decisions autonomously.",
      },
      {
        icon: Workflow,
        title: "Multi-Tool Orchestration",
        description:
          "Seamless integration across your entire stack — CRM, email, Slack, databases, and APIs — with agents that trigger actions across platforms based on real-time events.",
      },
      {
        icon: Shield,
        title: "Error-Proof Execution",
        description:
          "Built-in validation layers, audit trails, and rollback mechanisms ensure every automated action is traceable and reversible. Zero silent failures.",
      },
      {
        icon: Activity,
        title: "Real-Time Monitoring Dashboard",
        description:
          "A custom analytics dashboard showing every automation run, throughput metrics, cost savings, and anomaly alerts — all updated in real time.",
      },
      {
        icon: Clock,
        title: "Scheduled & Event-Driven Triggers",
        description:
          "Agents that run on cron schedules, webhooks, database change streams, or message queue events — whatever cadence your business requires.",
      },
      {
        icon: Route,
        title: "Smart Escalation Paths",
        description:
          "When confidence thresholds aren't met, tasks auto-escalate to the right human with full context — ensuring nothing falls through the cracks.",
      },
    ],
    benefits: [
      {
        icon: Clock,
        title: "Reclaim 20+ Hours Weekly",
        description:
          "Eliminate manual data entry, report generation, and cross-tool copying. Your team gets back an entire workday every week.",
      },
      {
        icon: DollarSign,
        title: "Cut Operational Costs by 60%",
        description:
          "Automate the equivalent of 3-5 full-time employees at a fraction of the cost, with no onboarding, sick days, or turnover.",
      },
      {
        icon: Sparkles,
        title: "Zero Human Error",
        description:
          "Machines don't make typos, forget steps, or skip fields. Every execution follows the exact same validated process.",
      },
      {
        icon: TrendingUp,
        title: "Scale Without Headcount",
        description:
          "Handle 10x the volume without hiring. Your automation scales instantly while your team stays lean and focused.",
      },
    ],
    techStack: ["Python", "OpenAI API", "LangChain", "n8n", "Make.com", "Zapier", "PostgreSQL", "Redis", "Docker", "AWS Lambda"],
    process: [
      {
        step: 1,
        title: "Workflow Audit",
        description:
          "We map your current manual processes end-to-end, identifying every automation opportunity and quantifying time savings for each.",
      },
      {
        step: 2,
        title: "Agent Architecture",
        description:
          "We design the automation architecture — triggers, decision trees, integrations, and escalation paths — with your team's input.",
      },
      {
        step: 3,
        title: "Build & Integrate",
        description:
          "Our engineers build, test, and deploy your agents into a staging environment. You review the output before anything goes live.",
      },
      {
        step: 4,
        title: "Monitor & Optimize",
        description:
          "Post-launch, we monitor every run, fine-tune decision thresholds, and add new capabilities as your needs evolve.",
      },
    ],
    useCases: [
      {
        title: "Lead Enrichment & Scoring",
        description:
          "Automatically pull firmographic data, score leads against your ICP, and route hot prospects to the right sales rep in real time.",
      },
      {
        title: "Invoice & Expense Processing",
        description:
          "Extract line items from PDF invoices, validate against POs, update your accounting software, and flag discrepancies for review.",
      },
      {
        title: "Content Moderation & Tagging",
        description:
          "AI-powered review of user-generated content with auto-approval, flagging, or removal based on your guidelines — processing thousands of items per minute.",
      },
      {
        title: "Inventory & Supply Chain Forecasting",
        description:
          "Predictive models that analyze sales trends, seasonality, and supplier lead times to auto-generate purchase orders before stockouts happen.",
      },
    ],
    faq: [
      {
        question: "How long does it take to build an AI automation?",
        answer:
          "Simple automations (single workflow, 2-3 integrations) can be live in 1-2 weeks. Complex multi-agent systems with custom ML typically take 4-8 weeks. We'll give you a precise timeline after the workflow audit.",
      },
      {
        question: "Do I need to change my existing tools?",
        answer:
          "Almost certainly not. We integrate with 200+ platforms natively and can build custom connectors for any tool with an API. Your stack stays the same — we just make it work together.",
      },
      {
        question: "What happens if the automation makes a mistake?",
        answer:
          "Every agent includes confidence thresholds and human-in-the-loop fallbacks. If the AI isn't confident enough, the task escalates to a person with full context. All actions are logged with audit trails.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Absolutely. We deploy within your cloud infrastructure (AWS, GCP, Azure) with encryption at rest and in transit. For sensitive workflows, we can deploy fully on-premise with zero data leaving your network.",
      },
    ],
  },
  {
    slug: "saas-development",
    icon: Code2,
    title: "SaaS Development",
    subtitle: "Scalable platforms built from the ground up",
    description:
      "We design and build complete SaaS platforms — from multi-tenant architecture and subscription billing to beautiful user interfaces — delivering production-ready products that scale to millions of users.",
    overview: {
      what: "SaaS development is the end-to-end process of building cloud-based software platforms that customers access via subscription. We handle everything: database architecture, API design, authentication, payment integration, frontend UX, and DevOps — so you launch a polished, scalable product.",
      why: "The SaaS market is projected to hit $900 billion by 2028. Speed to market separates winners from runners-up. Our team compresses typical 18-month timelines into 3-4 months by leveraging battle-tested frameworks, AI-assisted development, and a deep understanding of what makes SaaS products succeed.",
    },
    features: [
      {
        icon: Layers,
        title: "Multi-Tenant Architecture",
        description:
          "Isolated tenant data with shared infrastructure, customizable white-labeling per tenant, and usage-based tier management built into the core architecture.",
      },
      {
        icon: Database,
        title: "Scalable Data Layer",
        description:
          "Database design optimized for your access patterns — horizontal sharding, read replicas, and caching strategies that keep response times under 100ms at any scale.",
      },
      {
        icon: CreditCard,
        title: "Subscription & Billing Engine",
        description:
          "Stripe-powered subscription management with usage-based billing, plan upgrades/downgrades, invoicing, and dunning — all compliant with accounting standards.",
      },
      {
        icon: Lock,
        title: "Enterprise-Grade Security",
        description:
          "SOC 2-ready architecture with SSO/SAML, RBAC, audit logs, 2FA, and end-to-end encryption. We bake compliance in from day one, not bolt it on later.",
      },
      {
        icon: Blocks,
        title: "Modular Feature System",
        description:
          "Feature flags, add-on modules, and per-tenant configurability let you sell premium features without maintaining separate codebases.",
      },
      {
        icon: BarChart3,
        title: "Built-In Analytics",
        description:
          "Product analytics, user behavior tracking, and revenue dashboards embedded directly into your admin panel — no third-party tools required.",
      },
    ],
    benefits: [
      {
        icon: Rocket,
        title: "3-Month MVP Timeline",
        description:
          "Go from idea to revenue-ready product in 90 days. Our pre-built SaaS starter kit eliminates months of boilerplate work.",
      },
      {
        icon: TrendingUp,
        title: "Built to Scale",
        description:
          "Architecture that handles 10 users or 10 million without rewrites. Horizontal scaling, optimized queries, and edge caching from day one.",
      },
      {
        icon: RefreshCw,
        title: "Iterate With Confidence",
        description:
          "CI/CD pipelines, automated testing (85%+ coverage), and staging environments let you ship features weekly without breaking anything.",
      },
      {
        icon: Users,
        title: "Delight Your Users",
        description:
          "Pixel-perfect UI with sub-100ms interactions, dark mode, keyboard navigation, and accessibility built in — users stay because it feels fast.",
      },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Stripe", "Redis", "Docker", "Kubernetes", "AWS"],
    process: [
      {
        step: 1,
        title: "Product Discovery",
        description:
          "We workshop your vision into a detailed PRD — user personas, feature prioritization, monetization strategy, and technical architecture decisions.",
      },
      {
        step: 2,
        title: "Design & Prototype",
        description:
          "Interactive Figma prototypes of every screen, validated with user testing. You see and click through the product before a single line of code is written.",
      },
      {
        step: 3,
        title: "Agile Development Sprints",
        description:
          "2-week sprints with weekly demos. You see working features every 7 days and can course-correct in real time. No black boxes, no surprises.",
      },
      {
        step: 4,
        title: "Launch & Scale",
        description:
          "Production deployment with monitoring, error tracking, and auto-scaling. We stay embedded for the first 30 days post-launch to handle anything that comes up.",
      },
    ],
    useCases: [
      {
        title: "B2B SaaS Platforms",
        description:
          "Multi-tenant platforms with team management, role-based access, white-labeling, and enterprise sales features like SSO and audit logs.",
      },
      {
        title: "API-First Products",
        description:
          "Developer platforms with RESTful or GraphQL APIs, rate limiting, webhook systems, API key management, and interactive documentation portals.",
      },
      {
        title: "Marketplaces",
        description:
          "Two-sided platforms connecting buyers and sellers with search, booking, payment splitting, reviews, and real-time messaging.",
      },
      {
        title: "AI-Powered SaaS",
        description:
          "Products with embedded AI features — content generation, predictive analytics, recommendation engines — powered by OpenAI, Anthropic, or custom models.",
      },
    ],
    faq: [
      {
        question: "How much does it cost to build a SaaS product?",
        answer:
          "Our SaaS projects typically range from $25K for an MVP to $150K+ for a full-featured platform. The final number depends on complexity, integrations, and AI features. We provide a fixed-price quote after the discovery phase.",
      },
      {
        question: "Do you handle hosting and infrastructure?",
        answer:
          "Yes, we set up and configure your entire AWS/GCP infrastructure, CI/CD pipelines, and monitoring. We hand over full access and documentation so your team owns everything.",
      },
      {
        question: "What if I already have a partially built product?",
        answer:
          "We frequently rescue projects mid-build. We'll audit the existing codebase, keep what's salvageable, and rebuild what isn't. You only pay for the work that adds value.",
      },
      {
        question: "Who owns the code?",
        answer:
          "You own 100% of the code, IP, and infrastructure. Everything is in your accounts, your repos, your cloud. We're building your asset — not renting you access to ours.",
      },
    ],
  },
  {
    slug: "web-development",
    icon: Globe,
    title: "Web Development",
    subtitle: "Blazing-fast websites that convert visitors into customers",
    description:
      "We build high-performance websites and web applications with stunning design, perfect SEO, and lightning-fast load times — creating digital experiences that rank higher and convert better.",
    overview: {
      what: "Modern web development goes beyond pretty pages. We build responsive, accessible, SEO-optimized websites and progressive web apps using Next.js, React, and headless CMS platforms — delivering sub-second load times and perfect Lighthouse scores.",
      why: "53% of mobile users abandon a site that takes longer than 3 seconds to load. Google's Core Web Vitals directly impact search rankings. Our sites consistently score 95+ on Lighthouse, driving more organic traffic and higher conversion rates for our clients.",
    },
    features: [
      {
        icon: Zap,
        title: "Lightning Performance",
        description:
          "Server-side rendering, static generation, image optimization, and edge caching combine to deliver pages that load in under 1.5 seconds globally.",
      },
      {
        icon: Search,
        title: "SEO That Actually Works",
        description:
          "Structured data, dynamic sitemaps, semantic HTML, and automated meta tag generation built into the framework — not bolted on as an afterthought.",
      },
      {
        icon: MonitorSmartphone,
        title: "Pixel-Perfect Responsive Design",
        description:
          "Every page meticulously optimized for every screen size — mobile, tablet, desktop, and ultrawide. Consistent design language that adapts without breaking.",
      },
      {
        icon: Palette,
        title: "Custom Design Systems",
        description:
          "Reusable component libraries with consistent typography, colors, spacing, and interaction patterns — making future updates fast and design-coherent.",
      },
      {
        icon: Globe,
        title: "Headless CMS Integration",
        description:
          "Content management powered by Sanity, Strapi, or Contentful with visual editing, scheduled publishing, and API-first architecture for omnichannel delivery.",
      },
      {
        icon: ShieldCheck,
        title: "Accessibility First",
        description:
          "WCAG 2.1 AA compliance built in — keyboard navigation, screen reader support, sufficient contrast ratios, and semantic markup from the first commit.",
      },
    ],
    benefits: [
      {
        icon: TrendingUp,
        title: "Higher Search Rankings",
        description:
          "Our sites consistently hit 95+ Lighthouse scores, a direct ranking signal. Better performance means better positions and more organic traffic.",
      },
      {
        icon: Users,
        title: "Better Conversion Rates",
        description:
          "Fast, beautiful, intuitive sites keep visitors engaged. Our clients see an average 35% increase in conversion rate after launch.",
      },
      {
        icon: Smartphone,
        title: "Perfect Mobile Experience",
        description:
          "60%+ of web traffic is mobile. Every site we build is mobile-first, with touch-optimized interactions and responsive layouts that feel native.",
      },
      {
        icon: RefreshCw,
        title: "Easy Content Updates",
        description:
          "Headless CMS means your team can update content, add pages, and publish blog posts without touching code or calling a developer.",
      },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Sanity", "Vercel", "PostgreSQL", "Redis", "Cloudflare"],
    process: [
      {
        step: 1,
        title: "Discovery & Strategy",
        description:
          "We define your audience, conversion goals, content architecture, and technical requirements. Competitive analysis identifies differentiation opportunities.",
      },
      {
        step: 2,
        title: "Design Sprint",
        description:
          "Wireframes to high-fidelity designs in Figma. You review every screen on desktop and mobile before we write a single line of code.",
      },
      {
        step: 3,
        title: "Build & Optimize",
        description:
          "Pixel-perfect implementation with continuous performance testing. Core Web Vitals and accessibility checks run on every pull request.",
      },
      {
        step: 4,
        title: "Launch & Handover",
        description:
          "Deployment, DNS setup, analytics configuration, and a recorded walkthrough of your CMS. 30 days of post-launch support included.",
      },
    ],
    useCases: [
      {
        title: "Marketing Websites",
        description:
          "Conversion-optimized landing pages and marketing sites with A/B testing infrastructure, analytics, and CMS-powered blog and resource sections.",
      },
      {
        title: "Progressive Web Apps",
        description:
          "Web apps with offline support, push notifications, and install-to-home-screen — delivering a native app experience without the app store friction.",
      },
      {
        title: "E-Commerce Storefronts",
        description:
          "Headless commerce with Shopify or Medusa backends, custom product configurators, optimized checkout flows, and real-time inventory displays.",
      },
      {
        title: "Content & Media Platforms",
        description:
          "SEO-optimized publishing platforms with programmatic page generation, dynamic routing, and content personalization at scale.",
      },
    ],
    faq: [
      {
        question: "How long does a website take to build?",
        answer:
          "A typical marketing site or landing page takes 2-4 weeks. Complex web apps or e-commerce platforms take 6-12 weeks. We'll give you a precise timeline based on your specific scope.",
      },
      {
        question: "Will my site work on Google?",
        answer:
          "Absolutely. We build with SEO best practices baked into the framework — structured data, semantic HTML, automated XML sitemaps, and server-side rendering that Googlebot can crawl perfectly.",
      },
      {
        question: "Can you redesign my existing site?",
        answer:
          "Yes. We can redesign and rebuild your existing site without losing your current SEO equity. We carefully handle redirects, preserve URL structures where possible, and ensure rankings improve, not drop.",
      },
      {
        question: "What's included in post-launch support?",
        answer:
          "30 days of priority support covering bug fixes, performance monitoring, content update assistance, and any questions your team has. Extended maintenance plans are available.",
      },
    ],
  },
  {
    slug: "ai-chatbots",
    icon: MessageSquare,
    title: "AI Chatbots",
    subtitle: "Conversational AI that never sleeps",
    description:
      "We build intelligent chatbot agents powered by GPT-4 and custom fine-tuned models that handle customer support, qualify leads, and drive sales — with natural conversations that feel human.",
    overview: {
      what: "Modern AI chatbots go far beyond scripted decision trees. We build conversational agents powered by large language models that understand context, remember conversation history, take actions in your systems, and escalate to humans seamlessly when needed.",
      why: "80% of customer inquiries are repetitive and resolvable without human intervention. Our chatbots handle those conversations instantly at any volume — improving response times from hours to seconds while cutting support costs by up to 70%.",
    },
    features: [
      {
        icon: Brain,
        title: "LLM-Powered Understanding",
        description:
          "Powered by GPT-4, Claude, or fine-tuned open-source models. Your chatbot understands intent, context, and nuance — not just keyword matching.",
      },
      {
        icon: Database,
        title: "Custom Knowledge Base",
        description:
          "Trained on your docs, FAQs, product specs, and past support tickets via RAG (Retrieval-Augmented Generation) — accurate answers grounded in your actual content.",
      },
      {
        icon: Workflow,
        title: "Action-Taking Capability",
        description:
          "Beyond chat — your bot can check order status, book appointments, update CRM records, process refunds, and trigger workflows in your backend systems.",
      },
      {
        icon: MessageCircle,
        title: "Omnichannel Deployment",
        description:
          "Deploy on your website, WhatsApp, Messenger, Slack, Discord, and SMS — one bot, one knowledge base, every channel your customers use.",
      },
      {
        icon: Users,
        title: "Smart Human Handoff",
        description:
          "Seamless escalation to your team with full conversation context, sentiment analysis, and priority routing when the bot detects frustration or complexity.",
      },
      {
        icon: BarChart3,
        title: "Conversation Analytics",
        description:
          "Track resolution rates, common questions, customer sentiment trends, and containment metrics — all in a real-time analytics dashboard.",
      },
    ],
    benefits: [
      {
        icon: Clock,
        title: "24/7 Instant Response",
        description:
          "Customers get answers in seconds, not hours. No queues, no business hours, no wait times — ever.",
      },
      {
        icon: DollarSign,
        title: "70% Support Cost Reduction",
        description:
          "One bot handles the work of 5+ agents for routine queries. Your human team focuses on complex, high-value conversations only.",
      },
      {
        icon: TrendingUp,
        title: "35% More Leads Qualified",
        description:
          "Bots engage visitors proactively, qualify them against your ICP, book meetings on your calendar, and never forget to follow up.",
      },
      {
        icon: Target,
        title: "Consistent Brand Voice",
        description:
          "Every customer gets the same accurate, on-brand response. No agent variability, no bad days, no missed talking points.",
      },
    ],
    techStack: ["OpenAI GPT-4", "Anthropic Claude", "LangChain", "Pinecone", "Redis", "Next.js", "Python", "FastAPI", "Docker", "WhatsApp API"],
    process: [
      {
        step: 1,
        title: "Knowledge Mapping",
        description:
          "We audit your support tickets, docs, and FAQs to map every conversation flow and identify the highest-impact automation opportunities.",
      },
      {
        step: 2,
        title: "Personality & Tone Design",
        description:
          "We craft your bot's voice — tone, personality, conversation style — ensuring it represents your brand authentically in every interaction.",
      },
      {
        step: 3,
        title: "Build, Train & Test",
        description:
          "We build the bot, train it on your knowledge base, and run thousands of test conversations covering edge cases before it touches a real customer.",
      },
      {
        step: 4,
        title: "Deploy & Continuously Learn",
        description:
          "Soft launch with human review mode, then full auto-pilot. We monitor conversations, add knowledge, and fine-tune responses based on real interactions.",
      },
    ],
    useCases: [
      {
        title: "Customer Support Automation",
        description:
          "Handle FAQs, troubleshooting, order tracking, returns, and account changes automatically. Deflect 70%+ of tickets before they reach a human.",
      },
      {
        title: "Lead Qualification & Sales",
        description:
          "Proactive website engagement that qualifies visitors against ICP criteria, answers product questions, and books meetings directly on your sales team's calendar.",
      },
      {
        title: "Employee Onboarding & IT Helpdesk",
        description:
          "Internal bots that answer policy questions, guide new hires through onboarding, reset passwords, and create Jira tickets — reducing IT load by 50%.",
      },
      {
        title: "Appointment & Booking Management",
        description:
          "Natural language booking flows that check availability, handle rescheduling, send reminders, and sync to your calendar — no forms, no friction.",
      },
    ],
    faq: [
      {
        question: "Will the chatbot sound robotic?",
        answer:
          "Not at all. Modern LLMs produce remarkably natural, context-aware conversations. We fine-tune tone and personality to match your brand voice precisely. Most users can't tell they're talking to AI.",
      },
      {
        question: "What if the bot doesn't know the answer?",
        answer:
          "The bot is designed to recognize its knowledge boundaries. When it's not confident, it transparently says so and escalates to a human with full conversation context — no hallucinations, no made-up answers.",
      },
      {
        question: "How do you keep bot responses accurate?",
        answer:
          "We use Retrieval-Augmented Generation (RAG) — the bot retrieves relevant passages from your actual documentation before generating a response. Every answer is grounded in your content, not the model's general knowledge.",
      },
      {
        question: "Can the bot handle multiple languages?",
        answer:
          "Yes. Our bots support 50+ languages natively, with automatic language detection and culturally appropriate responses. The same bot handles English, Spanish, Arabic, French, and more simultaneously.",
      },
    ],
  },
  {
    slug: "dashboards-tools",
    icon: LayoutDashboard,
    title: "Dashboards & Tools",
    subtitle: "Custom tools that give you real-time command of your business",
    description:
      "We build custom internal dashboards, admin panels, and operational tools that consolidate your data into actionable insights — giving your team real-time visibility and control over every aspect of your operations.",
    overview: {
      what: "Custom dashboards and internal tools are purpose-built interfaces that aggregate data from across your organization — databases, APIs, third-party services — into unified views with real-time analytics, controls, and workflows. Purpose-built for your exact operational needs, not adapted from generic BI tools.",
      why: "Off-the-shelf BI tools force your business into their mold. Custom dashboards fit your actual workflows, surface the metrics that matter to you, and let your team take action directly — not just look at charts. The result: faster decisions, fewer tools, and one source of truth.",
    },
    features: [
      {
        icon: PieChart,
        title: "Unified Data Aggregation",
        description:
          "Connect every data source — PostgreSQL, Stripe, Salesforce, Google Analytics, custom APIs — into a single real-time view with automated ETL pipelines.",
      },
      {
        icon: Filter,
        title: "Advanced Filtering & Drill-Down",
        description:
          "Multi-dimensional filtering, date range comparisons, cohort analysis, and click-to-drill-down — explore your data at any granularity instantly.",
      },
      {
        icon: Bell,
        title: "Intelligent Alerting",
        description:
          "Custom threshold alerts on any metric. Get notified via Slack, email, or SMS when KPIs cross critical boundaries — before they become problems.",
      },
      {
        icon: Table,
        title: "CRUD Admin Panels",
        description:
          "Full create-read-update-delete interfaces for your database tables with validation, bulk operations, role-based access, and audit logging built in.",
      },
      {
        icon: LineChart,
        title: "Real-Time Visualizations",
        description:
          "Live-updating charts, graphs, and maps powered by WebSocket connections. Watch your business metrics move in real time, not on yesterday's refresh.",
      },
      {
        icon: Settings,
        title: "Role-Based Access Control",
        description:
          "Granular permissions — executives see strategy dashboards, managers see team metrics, operators see their workflow tools. One platform, right-sized views.",
      },
    ],
    benefits: [
      {
        icon: TrendingUp,
        title: "Faster Decision Making",
        description:
          "When the right data is one click away instead of buried across 5 tools, decisions that took days now take minutes.",
      },
      {
        icon: Layers,
        title: "One Source of Truth",
        description:
          "No more conflicting numbers from different tools. Every team looks at the same dashboards, powered by the same data pipelines.",
      },
      {
        icon: Zap,
        title: "Operational Efficiency",
        description:
          "Replace spreadsheets, manual reports, and ad-hoc data pulls with automated dashboards and self-serve tools. Save 10+ hours per week per team.",
      },
      {
        icon: Lock,
        title: "Data Governance",
        description:
          "Centralized access control, audit trails on every data view and edit, and automated compliance reporting — SOC 2 and GDPR ready.",
      },
    ],
    techStack: ["Next.js", "React", "D3.js", "Tremor", "WebSocket", "PostgreSQL", "Redis", "Apache Kafka", "Docker", "AWS QuickSight"],
    process: [
      {
        step: 1,
        title: "Data Source Audit",
        description:
          "We map every data source, API, and database in your organization. Identify gaps, inconsistencies, and opportunities for consolidation.",
      },
      {
        step: 2,
        title: "UX & Dashboard Design",
        description:
          "We design every view for the people who'll use it — execs, managers, operators. Right metrics, right level of detail, right actions available.",
      },
      {
        step: 3,
        title: "Pipeline & Backend Build",
        description:
          "ETL pipelines, data warehouse schema design, API aggregation layer, real-time streaming infrastructure — the plumbing that powers your dashboards.",
      },
      {
        step: 4,
        title: "Frontend & Deploy",
        description:
          "Polished dashboard interfaces with role-based access, deployed to your infrastructure with monitoring and automated data quality checks.",
      },
    ],
    useCases: [
      {
        title: "Executive Command Centers",
        description:
          "High-level dashboards showing company-wide KPIs — revenue, churn, CAC, LTV — with drill-down to department and team-level detail on every metric.",
      },
      {
        title: "Operations Control Panels",
        description:
          "Real-time views of fulfillment pipelines, support queues, inventory levels, and delivery tracking. Operators see issues before customers do.",
      },
      {
        title: "Customer Analytics Suites",
        description:
          "Cohort retention charts, user behavior funnels, NPS tracking, and churn prediction models — all in one unified customer intelligence platform.",
      },
      {
        title: "Internal Admin Tools",
        description:
          "Custom admin panels for content moderation, user management, order processing, and configuration management — replacing clunky spreadsheets and direct database access.",
      },
    ],
    faq: [
      {
        question: "Can you connect to our existing databases?",
        answer:
          "Yes. We connect to PostgreSQL, MySQL, MongoDB, BigQuery, Snowflake, Redshift, and any database with a driver or API. We also build custom connectors for proprietary or legacy systems.",
      },
      {
        question: "How is this different from Tableau or Power BI?",
        answer:
          "Those are analytics tools — great for exploration but limited for operations. Our dashboards are purpose-built for your workflows, let you take actions (not just view charts), and integrate deeply with your existing tools and permissions.",
      },
      {
        question: "How long until we see working dashboards?",
        answer:
          "A first working dashboard with real data is typically live within 2-3 weeks. Full suites with multiple views, alerting, and admin panels take 6-10 weeks depending on data complexity.",
      },
      {
        question: "What about real-time data?",
        answer:
          "We build real-time pipelines using WebSockets, Kafka, or CDC (change data capture) depending on your stack. Dashboards update within milliseconds of underlying data changes — no manual refresh needed.",
      },
    ],
  },
];
