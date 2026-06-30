export const personalInfo = {
  name: "Brian Nguyen",
  role: "Senior Software Engineer",
  location: "Houston, TX",
  email: "brian.nguyen2447@gmail.com",
  phone: "832-633-4687",
  bio: "Senior Full-Stack Software Engineer with 10+ years of experience designing, developing, and modernizing enterprise applications using C#, .NET, Angular, SQL Server, and Azure technologies. Experienced in delivering full-stack solutions for business-critical financial systems, collaborating with cross-functional teams, and contributing to application modernization and technical design. Currently pursuing a Master of Science in Data Science at The University of Texas at Austin.",
  links: {
    linkedin: "https://www.linkedin.com/in/briannguyen2447/",
    github: "https://github.com/bnguyen07",
    resume: "/Resume.pdf"
  }
};

export const projects = [
  {
    title: "FinCalendar",
    summary: "A QuantLib-backed API and SaaS platform for financial date calculations, holiday calendars, and payment schedules.",
    tech: ["FastAPI", "Python", "QuantLib", "Angular", "Docker"],
    live: "https://fincalendar.app/",
    featured: true,
    image: "/projects/fincalendar.png",
    details: "Designed and built a production-ready SaaS platform providing financial calendar and business day APIs for capital markets. Developed using FastAPI, PostgreSQL, Angular, Azure, and Cloudflare, featuring API key authentication, subscription management, interactive API documentation, self-service dashboards, usage tracking, and rate limiting."
  },
  {
    title: "OrderSystem",
    summary: "A backend-heavy order management system designed to showcase senior engineering, architecture, API design, and scalable system thinking.",
    tech: [".NET", "C#", "SQL", "REST API", "Architecture Patterns"],
    github: "https://github.com/bnguyen07/OrderSystem",
    live: "https://ordersystem.brian-nguyen.dev/",
    article: "https://www.linkedin.com/pulse/i-vibe-code-mini-amazon-antigravity-brian-nguyen-k3o9c/",
    featured: true,
    image: "/projects/ordersystem.png",
    details: "Designed and developed an enterprise-style order management application showcasing modern full-stack architecture and API-driven design. Structured the solution with clear separation of concerns to improve maintainability, extensibility, and long-term scalability, applying production-oriented engineering practices including authentication, testing, observability, and security considerations."
  },
  {
    title: "Trend Strategy Backtester",
    summary: "A Python-based stock signal and backtesting application for testing trading strategies and visualizing performance.",
    tech: ["Python", "Streamlit", "Data Analysis", "Backtesting"],
    github: "https://github.com/bnguyen07/TrendStrategyBacktester",
    live: "https://trendstrategybacktester.streamlit.app/",
    article: "https://www.linkedin.com/pulse/how-i-built-stock-backtester-python-brian-nguyen-w7ibc/",
    featured: true,
    image: "/projects/trend-backtester.png",
    details: "Enables users to input stock signals and run backtests against historical data, providing visual analytics and performance metrics."
  },
  {
    title: "AI Workflow Assistant",
    summary: "Future project focused on exploring AI-assisted software engineering and agentic development workflows.",
    tech: ["LLMs", "Node.js", "Python", "Vector DBs"],
    featured: false,
    hidden: true,
    details: "Currently in the planning phase, exploring how LLMs can be integrated into developer workflows to automate routine tasks."
  },
  {
    title: "Cloud-Native Microservices",
    summary: "Future project showcasing container orchestration, service mesh, and event-driven architecture.",
    tech: ["Docker", "Kubernetes", "Redis", "Message Queues"],
    featured: false,
    hidden: true,
    details: "Planned project to demonstrate scaling and resilience in a distributed microservices environment."
  }
];

export const architectureTech = [
  { name: "Docker", icon: "Docker" },
  { name: "Kubernetes", icon: "Kubernetes" },
  { name: "Azure", icon: "Cloud" },
  { name: "Redis", icon: "Database" },
  { name: "OAuth 2.0", icon: "Lock" },
  { name: "Message Queues", icon: "MessageSquare" },
  { name: "CI/CD", icon: "Zap" },
  { name: "Microservices", icon: "Layers" }
];

export const experience = [
  {
    company: "Broadridge Financial Solutions",
    role: "Senior Software Engineer",
    period: "04/2017 - Present",
    location: "Houston, TX",
    tasks: [
      "Design and implement full-stack features for an enterprise investment management platform using C#, .NET, Angular, SQL Server, and REST APIs.",
      "Deliver enhancements supporting portfolio management, financial reporting, cashflow processing, and investment workflows.",
      "Contribute to modernization initiatives by evolving legacy functionality into maintainable web-based applications while preserving backward compatibility.",
      "Collaborate with product owners, business analysts, QA engineers, and developers to translate business requirements into technical solutions.",
      "Participate in solution design, code reviews, and technical discussions to improve application quality and maintainability.",
      "Troubleshoot production issues, optimize application performance, and support enterprise software releases.",
      "Mentor junior developers and provide technical guidance during feature implementation.",
      "Leverage AI-assisted development tools, including GitHub Copilot, to improve engineering productivity and accelerate implementation."
    ]
  },
  {
    company: "Dokmee (Office Gemini)",
    role: "Senior Software Developer",
    period: "09/2014 - 03/2017",
    location: "Houston, TX",
    tasks: [
      "Developed enterprise document management applications using C#, ASP.NET MVC, SQL Server, and JavaScript.",
      "Delivered workflow automation, document processing, scanner integration, and database-driven features for enterprise customers.",
      "Designed SQL queries, stored procedures, and ETL-related processes supporting document management workflows.",
      "Investigated production issues, implemented enhancements, and collaborated with QA and support teams to deliver reliable software releases."
    ]
  },
  {
    company: "TC Energy (TransCanada)",
    role: "Application Developer Intern",
    period: "09/2012 - 08/2013",
    location: "Houston, TX",
    tasks: [
      "Supported enterprise applications and integrations for Oil & Gas business operations.",
      "Developed a Silverlight-based internal asset and user management application.",
      "Collaborated with support and integration teams to troubleshoot production issues."
    ]
  }
];

export const skills = {
  core: ["C#", ".NET Core", "Angular", "TypeScript", "SQL Server", "REST APIs", "Entity Framework Core", "Azure", "Git", "CI/CD", "Agile/Scrum"],
  expanding: ["Next.js", "Python", "GitHub Copilot", "Data Science", "Docker", "Kubernetes", "React"]
};

export const education = [
  {
    degree: "Master of Science, Data Science (In Progress)",
    school: "University of Texas at Austin",
    period: "Expected Spring 2027"
  },
  {
    degree: "Bachelor of Science, Computer Science",
    school: "University of Houston"
  }
];

export const certifications = [
  {
    name: "Microsoft Certified Professional (MCP)",
    id: "F559-0575",
    date: "01/2016"
  },
  {
    name: "Azure Fundamentals",
    id: "863536-0CFS92",
    date: "01/2025"
  }
];
