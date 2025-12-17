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
    "JavaScript (ES6+), Node.js, Express.js, PHP (Laravel)",
    "React, HTML5, CSS3",
    "MongoDB, SQL",
    "Git, Docker (Basics)",
    "RESTful APIs, AI (OpenAI API)",
  ],
  experience: [
    {
      role: "Full-Stack Developer @ eMergence Systems and Solutions",
      points: [
        "Led the development of scalable backend services using Express.js, Laravel and MySQL.",
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
        "Led the development of a startup called Petlify.",
        "Founded and Architected and Startup's Website called Petlify",
      ],
    },
  ],
  projects: [
    {
      name: "VitaScan",
      description:
        "A smart recipe assistant powered by the Gemini AI API that analyzes recipe macros and nutritional values. Processed 500+ recipe analyses with sub-2s response times, improving meal planning accuracy and reducing manual macro calculation by ~70%.",
    },
    {
      name: "DeFi Portfolio Tracker",
      description:
        "A crypto and DeFi portfolio tracker that aggregates wallet balances, positions, and transaction history across multiple protocols. Indexed 1,000+ on-chain transactions, delivered real-time portfolio updates, and reduced manual tracking effort by ~60%.",
    },
  ],
  education: {
    degree: "B.Sc in Information Technology",
    details: "(2020–2024) | Zamboanga Peninsula Polytechnic State University",
  },

  footerContact: {
    email: "umbongshan.dev@gmail.com",
  },
};

module.exports = resumeData;
