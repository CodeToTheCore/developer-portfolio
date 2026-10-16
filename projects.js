// Every entry on the timeline. To add a project, add an object to the right era.
// featured: true shows it as a large card; false shows it as a small chip.
const GH = "https://github.com/CodeToTheCore/";
const PRACTICE = GH + "pursuit-practice/tree/main/";

const ERAS = [
  {
    when: "Sep 2023",
    title: "Day one at Pursuit",
    summary: "Started the Pursuit Fellowship. Learned the command line, Git and GitHub, planning an app before writing code, pair programming, and testing with Jest.",
    projects: [
      { name: "Git & GitHub lab", repo: GH + "lab-github" },
      { name: "Collaborative Programming", repo: GH + "lab-collaborative-programming" },
      { name: "App Planning", repo: GH + "lab-app-planning" },
      { name: "Node Projects & Organization", repo: GH + "lab-node-projects-and-organization" },
      { name: "Testing with Jest", repo: GH + "lab-test-with-jest" },
    ],
  },
  {
    when: "Oct 2023",
    title: "HTML & CSS",
    summary: "Built pages from scratch, then learned layout: the box model, selectors, Grid, Flexbox, and media queries for phones.",
    projects: [
      { name: "Intro to HTML", repo: GH + "lab-intro-to-html" },
      { name: "Intro to CSS", repo: GH + "lab-intro-to-css" },
      { name: "CSS Box Model", repo: GH + "lab-css-box-model" },
      { name: "CSS Selectors", repo: GH + "lab-css-selectors" },
      { name: "CSS Grid", repo: GH + "lab-css-grid" },
      { name: "CSS Media Queries", repo: GH + "lab-css-media-queries" },
      { name: "Design Assets", repo: GH + "lab-design-assets" },
      { name: "Fauna Go (debugging)", repo: GH + "fauna-go-class" },
    ],
  },
  {
    when: "Oct – Nov 2023",
    title: "JavaScript, the DOM & APIs",
    summary: "Made pages interactive with DOM manipulation, events, and forms, then pulled live data from APIs with fetch and Promises.",
    projects: [
      { name: "Intro to the DOM", repo: GH + "lab-intro-to-dom" },
      { name: "Dogs App", repo: GH + "intro-to-dom-dogs-app-class" },
      { name: "DOM Blog", repo: GH + "dom-manipulation-warmup-blog" },
      { name: "Events", repo: GH + "lab-events" },
      { name: "Intro to Forms", repo: GH + "lab-intro-to-forms" },
      { name: "Fetch & Promises", repo: GH + "api-promises-and-fetch-starter-code" },
      { name: "EmojiHub", repo: GH + "emojihub-warmup" },
      { name: "Request/Response with Postman", repo: GH + "lab-request-response-cycle-api-postman" },
    ],
  },
  {
    when: "Nov 2023",
    title: "First portfolio project",
    summary: "Combined everything from the first module into a themed, multi-page site built around my music.",
    projects: [
      {
        featured: true,
        name: "Code To The Core Music Store",
        description: "A music store and producer site. Search any artist through the iTunes API, load albums for top artists, open a details page with a 30-second preview, and listen to my own tracks as CoreTheProducer.",
        tech: ["HTML", "CSS Grid & Flexbox", "JavaScript", "Fetch API", "iTunes API"],
        repo: GH + "Front-end-project",
        live: "https://codetothecore.github.io/Front-end-project/",
      },
    ],
  },
  {
    when: "Jul – Sep 2024",
    title: "React",
    summary: "Moved to React: components, props, state, effects, and rendering lists.",
    projects: [
      { name: "Zoo Animals", repo: GH + "zoo-animals" },
      { name: "Project Lists", repo: GH + "project-lists" },
      { name: "State Exercises", repo: GH + "react-state-exercise" },
      { name: "State with Objects", repo: GH + "react-state-objects" },
      { name: "Primitive State", repo: GH + "primitive-state-practice" },
      { name: "useEffect", repo: GH + "react-useeffect-exercise" },
      { name: "Veterinarian API", repo: GH + "resource-veterinarian-api" },
    ],
  },
  {
    when: "Nov 2024 – Jan 2025",
    title: "Back end & first hackathon",
    summary: "Built servers with Express and PostgreSQL, then shipped a full-stack app with a team in a two-day hackathon.",
    projects: [
      {
        featured: true,
        name: "Express People App",
        description: "A RESTful API with full create, read, update, and delete routes for people. Includes input validation, proper 404 and 400 responses, and SQL schema and seed scripts.",
        tech: ["Node.js", "Express", "PostgreSQL", "pg-promise"],
        repo: GH + "express-people-app",
      },
      {
        featured: true,
        name: "Pursuit Hackathon: FourSquare",
        description: "A collaborative FourSquare game built by a team in two days. React front end with routing, a sign-in flow and modals, plus an Express and PostgreSQL server.",
        tech: ["React", "Vite", "React Router", "Express", "PostgreSQL", "Teamwork"],
        repo: "https://github.com/paulgasbarra/PursuitHackathonFourSquare",
        team: true,
      },
      { name: "Express Routes", repo: PRACTICE + "2024-11-express-routes" },
      { name: "Anime API (Express + Postgres)", repo: PRACTICE + "2025-01-anime-api" },
    ],
  },
  {
    when: "Mar – Apr 2025",
    title: "Deeper React & web fundamentals",
    summary: "Practiced lifting state up, controlled forms, client-side routing, Context and useReducer. In L3 I went back to the fundamentals: AJAX, Fetch, and ES modules.",
    projects: [
      {
        featured: true,
        name: "Shopping Cart",
        description: "A React cart where you add products, change quantities, and remove items while a summary keeps the total up to date. Covered by a React Testing Library test.",
        tech: ["React 19", "React Testing Library"],
        repo: GH + "shopping-cart",
        live: "https://codetothecore.github.io/shopping-cart/",
      },
      {
        featured: true,
        name: "Nature Sightings",
        description: "Log, edit, and search wildlife sightings around the city. An Express REST API with validation and stats, and a fetch-powered front end. Started as L3 practice, then rebuilt into a full app with tests.",
        tech: ["Node.js", "Express", "REST API", "JavaScript", "CSS Grid", "node:test"],
        repo: GH + "nature-sightings",
      },
      { name: "Hooks, Context & Router", repo: PRACTICE + "2025-03-react-hooks-context-router" },
      { name: "React Forms", repo: PRACTICE + "2025-03-react-forms" },
      { name: "React Router", repo: PRACTICE + "2025-03-react-router" },
      { name: "Web Fundamentals (AJAX, Fetch, Python)", repo: PRACTICE + "2025-03-web-fundamentals" },
      { name: "ES Modules", repo: PRACTICE + "2025-03-es-modules" },
    ],
  },
  {
    when: "Jun 2025",
    title: "Data structures",
    summary: "Studied computer-science fundamentals: how data is stored, and the time cost of each operation.",
    projects: [
      {
        featured: true,
        name: "Data Structures in JavaScript",
        description: "A linked list built from scratch with append, prepend, find, delete, insertAt, size, and in-place reverse. Covered by tests, with Big-O notes on when to use a linked list instead of an array.",
        tech: ["JavaScript", "Algorithms", "Big-O", "node:test"],
        repo: GH + "data-structures",
      },
    ],
  },
  {
    when: "Nov 2025",
    title: "Keeping sharp",
    summary: "Kept practicing between projects with Express middleware, routers, and controllers.",
    projects: [
      { name: "Express Starter (middleware & routers)", repo: PRACTICE + "2025-11-express-starter" },
    ],
  },
  {
    when: "Apr 2026",
    title: "Building my own products",
    summary: "Started building full-stack products of my own, with payments and third-party APIs.",
    projects: [
      {
        featured: true,
        name: "CoreTrenz Platform",
        description: "A streetwear marketplace. Browse partner brands, search products across marketplaces, generate custom clothing designs, and check out with Stripe. Fees and NYC sales tax are calculated in the app.",
        tech: ["React", "Express 5", "Stripe", "Axios"],
        repo: GH + "coretrenz-platform",
      },
    ],
  },
  {
    when: "Apr – Aug 2026",
    title: "AI products",
    summary: "Built an AI-powered app for independent artists, drawing on my own background as a music producer.",
    projects: [
      {
        featured: true,
        name: "FanFlow AI",
        description: "A revenue engine for independent artists. It scores followers to find superfans, writes AI campaign scripts, finds gigs and sync deals, builds an artist resume, and includes a media studio and an agent chat.",
        tech: ["React", "Vite", "Tailwind", "Zustand", "Express", "PostgreSQL", "OpenAI", "Stripe", "JWT"],
        repo: GH + "core-fanflow-ai",
      },
    ],
  },
  {
    when: "Aug – Sep 2026",
    title: "Level 3: real open-source codebases",
    summary: "Learned to read, run, and change large production codebases, then pitched new features to a product lead.",
    projects: [
      {
        featured: true,
        name: "Excalidraw Feature Pitch",
        description: "With Group G1, prototyped features in the Excalidraw codebase to improve activation rate (new users who save a first drawing), then pitched them to Excalidraw's Head of Product.",
        tech: ["TypeScript", "React", "Vitest", "Product thinking", "Teamwork"],
        repo: GH + "Excalidraw-L3-Cycle-2-Features-Pitch",
        team: true,
      },
      { name: "Fastify assessment", repo: GH + "fastify-assessment-L3" },
      { name: "Microsoft PowerToys assessment", repo: GH + "PowerToys-assessment-L3" },
      { name: "AMP HTML assessment", repo: GH + "amphtml-assessment" },
    ],
  },
  {
    when: "Sep – Oct 2026",
    title: "AI Native Fellowship",
    summary: "Building AI-native, full-stack software for real clients with a team.",
    projects: [
      {
        featured: true,
        name: "CORE GAME LAB",
        description: "A full-stack learning platform that teaches software engineering, data, AI/ML, and game development by tying each concept to a real build task. Includes an AI tutor built on the Anthropic API, progress tracking, and instructor tools.",
        tech: ["React", "TypeScript", "Express", "PostgreSQL", "Anthropic API", "Railway"],
        privateNote: "Private repo, demo available on request",
      },
      {
        featured: true,
        name: "AAFE Gala Guest Hub",
        description: "A guest-list tool for Asian Americans for Equality's annual gala, built by team ERIMX BOKHUS. It sits on top of Give Lively and adds sponsor self-service guest names, staff-approved follow-ups, badge exports, and gala-night check-in.",
        tech: ["Client project", "Discovery & prototyping", "AI-native workflow", "Teamwork"],
        privateNote: "Client project, private repo",
        team: true,
      },
    ],
  },
];
