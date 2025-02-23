import project1 from "../assets/projects/project-e.png";
import project2 from "../assets/projects/project-2.jpg";
import cyfrin from "../assets/projects/cyf.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";
import projc from "../assets/projects/projc.jpg";

export const HERO_CONTENT = 'I am a junior developer with a background in computer science, strong interest to grow my skills in web development and software engineering. I have experience working with React, Flutter, and Python and enjoy learning new technologies to improve my development abilities. I enjoy learning new technologies and quickly adapting to different challenges a lot.'

export const ABOUT_TEXT = 'I am an dedicated developer with a background in computer science, constantly exploring new technologies and improving my skills in web development, data analytics, and software engineering. I enjoy working with React, Flutter, and Python, and I am currently deepening my knowledge of backend technologies and data-driven applications. I adapt quickly to new challenges and love learning through hands-on experience. My goal is to build practical, user-friendly applications while leveraging data analytics to create smarter, more efficient solutions.'

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "React Developer (Freelance)",
    company: "Self-Employed",
    description: "Developing and improving web applications using React.js and TypeScript while learning best practices in front-end development. Gaining experience in working with APIs and optimizing user interfaces for better performance.",
    technologies: ["React.js", "TypeScript", "REST APIs", "Tailwind CSS"],
  },
  {
    year: "March 2023 - May 2023",
    role: "Back-End Developer Intern",
    company: "Top Super Application",
    description: "Assisted in migrating backend services from Django to FastAPI, improving API performance and database efficiency for a large-scale tourism platform. Worked closely with senior developers to redesign backend modules and optimize system speed.",
    technologies: ["Python", "FastAPI", "Django", "SQL"],
  },
  {
    year: "June 2022 - Sep 2022",
    role: "Android Developer Intern",
    company: "Software Development Lab, Persian Gulf University (Remote)",
    description: "Developed a local Twitter clone using Flutter, implementing core functionalities like user authentication, posting, and real-time updates. Learned and applied UML diagramming for app structure planning, improving project organization.",
    technologies: ["Flutter", "Dart", "SQLite", "State Management"],
  },
  {
    year: "Oct 2022 - Jan 2023",
    role: "Teaching Assistant (Database Design)",
    company: "University of Shiraz",
    description: "Guided and mentored students in understanding database concepts, assisted in lab sessions, and helped break down complex topics to improve student comprehension.",
    technologies: ["SQL", "Database Design", "Teaching"],
  },
];


export const PROJECTS = [
  {
    title: "Document Formatting Automation System",
    image: project1, 
    description: "Built a tool to check and correct document formatting based on university standards, automating compliance and reducing manual errors.",
    technologies: ["Python", "Pandas", "Regex"],
  },
  {
    title: "Patients & Hotel Management System",
    image: project2, 
    description: "Developed a management system for handling patient records and hotel reservations.",
    technologies: ["Flutter", "SQL", "API Integration"],
  },
  {
    title: "Local Twitter Clone",
    image: project3, 
    description: "Developed a social media application with user authentication, real-time posting, and local database storage.",
    technologies: ["Flutter", "SQLite", "State Management"],
  },
  {
    title: "E-Commerce Website",
    image: project4,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
];

export const CONTACT = {
  address: "Hannover, Germany",
  phoneNo: "+49 176 80713289",
  email: "vahidinia.sasan@gmail.com",
};