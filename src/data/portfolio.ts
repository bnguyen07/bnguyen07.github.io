export const personalInfo = {
  name: "Brian Nguyen",
  role: "Senior Software Engineer",
  location: "Cypress, Texas",
  email: "brian.nguyen2447@gmail.com",
  phone: "832-633-4687",
  bio: "Senior Software Engineer with 10+ years of experience building enterprise-grade applications using Angular, TypeScript, C#, .NET, and SQL Server. I specialize in full-stack enterprise systems, reusable UI architecture, backend integrations, database-driven applications, and production-quality software delivery. Currently pursuing an M.S. in Data Science at The University of Texas at Austin and expanding into cloud-native architecture, AI-assisted development, and distributed systems.",
  links: {
    linkedin: "https://www.linkedin.com/in/briannguyen2447/",
    github: "https://github.com/bnguyen07",
    resume: "/Resume.pdf"
  }
};

export const projects = [
  {
    title: "OrderSystem",
    summary: "A backend-heavy order management system designed to showcase senior engineering, architecture, API design, and scalable system thinking.",
    tech: [".NET", "C#", "SQL", "REST API", "Architecture Patterns"],
    github: "https://github.com/bnguyen07/OrderSystem",
    live: "https://ordersystem.brian-nguyen.dev/",
    article: "https://www.linkedin.com/pulse/i-vibe-code-mini-amazon-antigravity-brian-nguyen-k3o9c/",
    featured: true,
    image: "/projects/ordersystem.png",
    details: "Focuses on robust backend architecture, implementing design patterns and scalable API structures for enterprise-level order management."
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
      "Played an essential role in the development of a next-generation Portfolio Management System (Sentry), utilizing Angular, C# .NET, and MSSQL.",
      "Developed custom controls by wrapping Telerik's Kendo UI for Angular, ensuring a uniform look and feel.",
      "Collaborated in an Agile team, participating in Sprint grooming, stand-ups, and retrospectives.",
      "Improved application reliability through comprehensive code reviews and technical feedback.",
      "Mentored and onboarded new developers."
    ]
  },
  {
    company: "Dokmee (Office Gemini)",
    role: "Senior Software Developer",
    period: "09/2014 - 03/2017",
    location: "Houston, TX",
    tasks: [
      "Built the front-end for a Document Management System using AngularJS, ASP.NET web services, and MSSQL.",
      "Administrated Dokmee Cloud serving almost 3000 accounts.",
      "Developed server-side applications using WPF (MVVM) and Windows services.",
      "Created a high-impact scanner plugin for ScanSnap scanners, significantly boosting license sales.",
      "Configured CI/CD using Cruise Control and InstallShield."
    ]
  },
  {
    company: "Dokmee (Office Gemini)",
    role: "Software Quality Assurance",
    period: "02/2014 - 09/2014",
    location: "Houston, TX",
    tasks: [
      "Managed virtual machines for rigorous bug verification and testing.",
      "Created detailed test cases and scenarios for automated testing support.",
      "Established diverse testing environments with various OS and SQL versions."
    ]
  },
  {
    company: "TC Energy (TransCanada)",
    role: "Application Developer Intern",
    period: "09/2012 - 08/2013",
    location: "Houston, TX",
    tasks: [
      "Developed a Silverlight 5 web application for internal asset management.",
      "Troubleshot internal applications for the Oil and Gas industry.",
      "Collaborated with Support and Integration teams on critical systems."
    ]
  }
];

export const skills = {
  core: ["Angular", "TypeScript", "C#", ".NET", "SQL Server", "MSSQL", "REST APIs", "Git", "Agile", "Python", "Data Science"],
  expanding: ["React", "Next.js", "Cloud", "Docker", "Kubernetes", "Redis", "Message Queues", "OAuth", "AI/ML", "LLM Applications"]
};

export const education = [
  {
    degree: "Master of Science, Data Science (In Progress)",
    school: "University of Texas at Austin",
    period: "Expected 06/2027"
  },
  {
    degree: "Bachelor of Science, Computer Science",
    school: "University of Houston",
    period: "12/2013",
    location: "Houston, TX"
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
