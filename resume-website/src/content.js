export const projects = [
  {
    title: 'Keeping digital ordering usable day to day',
    category: 'Digital operations · PIAGAST',
    period: 'Oct 2026 — Present',
    visual: 'service',
    intro: 'At PIAGAST, a website is part of the restaurant’s working day. Changes need to make sense for customers and the people handling orders.',
    details: [
      'Updated the React/Vite/PocketBase site, including menu, checkout and ordering-related options.',
      'Worked on staff-facing order controls and tested changes before publication.',
      'Troubleshot Windows, network and printer problems; also designed a six-page promotional flyer.',
    ],
    tags: ['React', 'Vite', 'PocketBase', 'IT troubleshooting'],
  },
  {
    title: 'Exploring EEG classification with MiniRocket',
    category: 'Research project · University of Hildesheim',
    period: 'Dec 2024 — Jan 2026',
    visual: 'eeg',
    intro: 'A five-person university project comparing approaches to classifying public EEG data. My contribution was part of a shared experimental and research effort.',
    details: [
      'Contributed to preprocessing, data loading and Python experiment runs.',
      'Helped compare Classic, Enhanced, SPD and Hybrid MiniRocket variants across three datasets covering 46 subjects.',
      'Reviewed accuracy, F1, runtime and memory trade-offs and helped document and present the team’s findings.',
    ],
    tags: ['Python', 'Classification', 'Experiment evaluation', 'Team of five'],
  },
  {
    title: 'Checking document formatting with Python',
    category: 'Automation · University project',
    period: 'Mar — Sep 2023',
    visual: 'document',
    intro: 'I built a utility for a repetitive problem: checking documents against formatting requirements and correcting inconsistencies with explicit rules.',
    details: [
      'Used Python, Pandas, regular expressions and file processing to inspect document content.',
      'Applied rule-based checks to identify and correct formatting issues.',
      'Used rule-based checks to make repeated formatting reviews more consistent.',
    ],
    tags: ['Python', 'Pandas', 'Regular expressions'],
    url: 'https://github.com/sasanvhn/Word-Document-Formatting-Checker',
  },
];

export const extraProjects = [
  {
    title: 'Flutter hotel management app',
    description: 'A database coursework interface for room and reservation information.',
    url: 'https://github.com/sasanvhn/db-hotel',
    screenshot: true,
  },
  {
    title: 'IMDb information retrieval',
    description: 'A notebook exploring TF-IDF retrieval, embeddings and ranking evaluation on movie reviews.',
    url: 'https://github.com/sasanvhn/IMDb-Retrieval-Project',
  },
  {
    title: 'E-commerce application',
    description: 'A repository combining a React frontend with a Spring Boot backend.',
    url: 'https://github.com/sasanvhn/e-commerce',
  },
];

export const positions = [
  {
    date: 'Oct 2026 — Present',
    title: 'Digital Operations Assistant',
    organization: 'PIAGAST · Hannover',
    description: 'Maintain and update the restaurant’s website and online ordering flow, test staff-facing workflow changes, and help resolve the laptop, printer and network issues that affect daily service.',
    tags: ['React / Vite', 'PocketBase', 'IT support'],
  },
  {
    date: 'Mar — May 2023',
    title: 'Back-End Developer Intern',
    organization: 'Top Super Application',
    description: 'Worked with the backend lead and a small team on migrating functionality from Django to FastAPI, adapting Python modules and debugging API and database-related behavior.',
    tags: ['Python', 'Django', 'FastAPI'],
  },
  {
    date: 'Oct 2022 — Jan 2023',
    title: 'Database Design Teaching Assistant',
    organization: 'University of Shiraz',
    description: 'Supported database-design labs, explained relational data concepts and helped students work through practical exercises and questions.',
    tags: ['SQL', 'Database design', 'Teaching'],
  },
  {
    date: 'Jun — Sep 2022',
    title: 'Android Developer Intern',
    organization: 'University Software Development Laboratory · Remote',
    description: 'Developed and debugged Flutter application features involving authentication, SQLite storage, state management and API integration. Used UML diagrams to plan application structure.',
    tags: ['Flutter', 'Dart', 'SQLite'],
  },
];

export const education = [
  { degree: 'M.Sc. Data Analytics', school: 'University of Hildesheim', date: 'Oct 2024 — Present', detail: 'Distributed Data Analytics · Information Retrieval · Data & Privacy Protection' },
  { degree: 'B.Sc. Computer Engineering', school: 'University of Shiraz', date: 'Oct 2018 — Sep 2023', detail: 'Software engineering · Operating systems · Databases' },
];

export const skillGroups = [
  { label: 'Data & research', skills: 'Python · SQL · Pandas · NumPy · scikit-learn · Model evaluation' },
  { label: 'Web & backend', skills: 'React · JavaScript · Vite · FastAPI · Django · REST APIs · PocketBase' },
  { label: 'Mobile & storage', skills: 'Flutter · Dart · SQLite · MySQL' },
  { label: 'Everyday tools', skills: 'Git · Docker · Debugging · Technical troubleshooting' },
];
