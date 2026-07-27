export const config = {
  hero: {
    firstName: "Rishi",
    lastName: "Raj",
    roles: ["Full Stack Developer", "AI Developer", "SDE Aspirant", "Problem Solver"],
    stats: [
      { value: "900+", label: "DSA Problems Solved" },
      { value: "8.71", label: "CGPA" },
      { value: "1st Place", label: "Fitness App MVP" }
    ],
    resumeUrl: "/Rishi_Raj_Resume.pdf",
    socials: [
      { name: "github", url: "https://github.com/rishiraj55200?tab=repositories", icon: "fa-brands fa-github" },
      { name: "linkedin", url: "https://www.linkedin.com/in/rishi-raj-075186291/", icon: "fa-brands fa-linkedin-in" },
      { name: "leetcode", url: "https://leetcode.com/u/raj551312/", icon: "fa-solid fa-code" },
      { name: "gfg", url: "https://www.geeksforgeeks.org/profile/rishiraj2jsi?tab=activity", icon: "fa-solid fa-laptop-code" }
    ]
  },
  about: {
    title: "About Me",
    description: "I am currently pursuing a B.Tech in Computer Engineering at Delhi Technological University (2023-2027). My technical journey has led me to develop real-time systems and AI-powered tools. I enjoy solving complex problems, having solved over 900 DSA questions across platforms, and I thrive in creating impactful, user-centric applications."
  },
  skills: {
    title: "Skills",
    categories: [
      { name: "Languages", items: ["Java", "C++", "JavaScript", "Python"] },
      { name: "Web Development", items: ["React.js", "Node.js", "Express.js", "HTML/CSS"] },
      { name: "Databases & Tools", items: ["PostgreSQL", "MongoDB", "Docker", "Redis", "RabbitMQ", "Git"] },
      { name: "AI & ML", items: ["LangChain", "LLMs", "RAG", "ChromaDB", "Vector Embeddings"] },
      { name: "Core CS", items: ["Data Structures & Algorithms", "OOP", "OS", "DBMS", "Computer Networks"] }
    ]
  },
  projects: {
    title: "Projects",
    items: [
      {
        name: "NexusChat",
        techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Redis", "RabbitMQ", "Docker"],
        description: "A full-stack real-time chat application enabling instant one-on-one and group messaging using Socket.io for bidirectional communication. Features secure authentication and near-instant message delivery.",
        github: "#"
      },
      {
        name: "AI Video Assistant",
        techStack: ["Python", "Streamlit", "Mistral AI", "RAG", "Vector Embeddings"],
        description: "An AI-powered video assistant that analyzes and summarizes video content. Implemented a RAG pipeline for chunking transcripts, generating embeddings, and enabling natural language Q&A.",
        github: "#"
      },
      {
        name: "Zencode - Custom Programming Language",
        techStack: ["JavaScript"],
        description: "A custom programming language developed from scratch, featuring a lexical analyzer, parser, AST, and interpreter with support for variables, loops, functions, and scopes.",
        github: "#"
      }
    ]
  },
  experience: {
    title: "Experience & Education",
    items: [
      {
        title: "Software Development Intern",
        company: "House Technologies",
        location: "Delhi, India",
        date: "Jul'26 – Present",
        description: "Developed an enterprise RAG-based AI chatbot using LangChain and LLMs. Built document ingestion pipelines and integrated FastAPI for efficient retrieval and semantic search."
      },
      {
        title: "Software Development Intern",
        company: "Busy Infotech Pvt.Ltd",
        location: "Delhi, India",
        date: "May'25 - July '25",
        description: "Developed and deployed 10+ RESTful APIs using Go (Gin) for core banking operations. Optimized PostgreSQL queries and improved system reliability."
      },
      {
        title: "B.Tech (Computer Engineering)",
        company: "Delhi Technological University",
        location: "New Delhi",
        date: "2023 - 2027",
        description: "CGPA: 8.71"
      }
    ]
  },
  certifications: {
    title: "Certifications & Internships",
    list: [
      {
        title: "Software Development Engineer (SDE) Intern Offer",
        issuer: "Dronearch Systems and Technologies",
        date: "June 2026",
        thumbnail: "",
        certificateUrl: "/dronearch-offer.pdf"
      },
      {
        title: "Summer Internship Certificate (Golang, Node.js, PostgreSQL)",
        issuer: "Busy Infotech Private Limited",
        date: "May 2025 - July 2025",
        thumbnail: "",
        certificateUrl: "/busy-infotech-internship.pdf"
      },
      {
        title: "The Joy of Computing using Python (Elite Top 5%)",
        issuer: "NPTEL (IIT Madras)",
        date: "Jul-Oct 2025",
        thumbnail: "",
        certificateUrl: "/nptel-python-certificate.pdf"
      },
      {
        title: "Problem Solving (Basic) Certificate",
        issuer: "HackerRank",
        date: "July 2024",
        thumbnail: "",
        certificateUrl: "/hackerrank-certificate.pdf"
      }
    ]
  },
  contact: {
    title: "Contact",
    email: "rishiraj132000@gmail.com"
  }
};
