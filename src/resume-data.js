const resumeData = {
  header: {
    name: "Shan Kaizer Umbong",
    title: "Software Developer | Node.js | Backend Enthusiast",
  },
  contact: {
    location: { label: "📍 Location", value: "Zamboanga City, Philippines" },
    email: { label: "✉️  Email", value: "umbongshan.dev@gmail.com" },
    linkedin: {
      label: "🔗 LinkedIn",
      value: "www.linkedin.com/in/shan-umbong77",
    },
    portfolio: {
      label: "🌐 Portfolio",
      value: "https://shan-dev.netlify.app/",
    },
    github: { label: "🐙 GitHub", value: "https://github.com/KAI-77" },
  },
  skills: [
    "JavaScript (ES6+), Node.js, Express.js",
    "React, HTML5, CSS3",
    "MongoDB, SQL",
    "Git, Docker (Basics)",
    "RESTful APIs, AI (OpenAI API)",
  ],
  experience: [
    {
      role: "Full-Stack Developer @ eMergence Systems and Solutions",
      points: [
        "Led development of scalable backend services using Node.js, Express.js, and Laravel.",
        "Improved system performance by 40% using caching and database indexing strategies.",
        "Mentored interns and conducted code reviews.",
      ],
    },
    {
      role: "Freelance Full-Stack Developer",
      points: [
        "Built restful APIs for a client using Laravel and React.",
        "Integrated Gemini APIs into a React app.",
      ],
    },
    {
      role: "Founder / Full-Stack Developer",
      points: [
        "Led development of a startup called Petlify.",
        "Founded and Architected and Startup's Website called Petlify",
      ],
    },
  ],
  projects: [
    {
      name: "E-commerce CLI Platform",
      description:
        "A command-line tool for managing inventory and orders built with Node.js.",
    },
    {
      name: "Real-time Chat Application",
      description: "WebSocket-based chat app using Socket.io and React.",
    },
  ],
  education: {
    degree: "B.Sc in Computer Science",
    details: "(2018–2022) | University Name | CGPA: 8.5",
  },

  footerContact: {
    email: "umbongshan.dev@gmail.com",
  },
};

module.exports = resumeData;
