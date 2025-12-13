
export interface Project {
    id: string;
    title: string;
    category: string;
    shortDesc: string;
    fullDesc: string;
    techStack: string[];
    githubUrl?: string; // Optional
    image: string;
    gallery?: string[];
}

export interface Certificate {
    id: string;
    title: string;
    issuer: string;
    year: string;
    category: "Competitive Awards" | "Specialized Diplomas" | "Professional Workshops";
    image: string;
}

export interface ExperienceItem {
    id: string;
    role: string;
    organization: string;
    period: string;
    desc: string;
    context?: string;
    type?: "education" | "work";
}

export const projects: Project[] = [
    {
        id: "atom-agent",
        title: "AtomAgent",
        category: "Autonomous AI Agents",
        shortDesc: "Framework for Autonomous AI Agents utilizing multiple LLM API providers.",
        fullDesc: "Developed a framework for Autonomous AI Agents utilizing multiple LLM API providers. Implemented a secure Docker Sandbox environment, allowing agents to execute code in complete isolation. Designed a modular architecture to facilitate seamless integration of various AI models.",
        techStack: ["Python", "Docker", "Agentic Workflows", "API Integration"],
        githubUrl: "https://github.com/aToom13/AtomAgent",
        image: "/assets/projects/atom-agent.png",
        gallery: []
    },
    {
        id: "atom-study",
        title: "AtomStudy",
        category: "EdTech Mobile App",
        shortDesc: "Flutter-based mobile app offering step-by-step AI solutions.",
        fullDesc: "Built a Flutter-based mobile app offering step-by-step AI solutions for photographed questions. Integrated Firebase for backend services and Cloudflare for secure API key management. Developed a personalization algorithm that analyzes student performance to suggest targeted video content.",
        techStack: ["Flutter", "Firebase", "LLM Integration", "Data Analysis"],
        image: "/assets/projects/atom-study.png",
        gallery: []
    },
    {
        id: "atom-ai",
        title: "AtomAI",
        category: "Research Project",
        shortDesc: "Custom training framework to experiment with LLM architectures and BitNet.",
        fullDesc: "Created a custom training framework to experiment with LLM architectures and BitNet. Implemented tokenization and neural network layers using PyTorch and NumPy for educational purposes. Gained deep understanding of transformer models and model optimization techniques.",
        techStack: ["Python", "PyTorch", "BitNet", "Neural Networks"],
        image: "/assets/projects/atom-ai.png",
        gallery: []
    },
    {
        id: "autonomous-vehicle",
        title: "Autonomous Vehicle",
        category: "Robotics & Simulation",
        shortDesc: "Autonomous driving system for Teknofest finalist robotaxi.",
        fullDesc: "Led the team in designing and developing an autonomous driving system for the national finals. Managed the project timeline and coordinated tasks between software and hardware units. Developed lane tracking and object detection algorithms using Python, C++, PyTorch and OpenCV.",
        techStack: ["Python", "C++", "PyTorch", "OpenCV"],
        image: "/assets/projects/autonomous-vehicle.png",
        gallery: []
    },
    {
        id: "echo-sun-bank",
        title: "Echo Sun Bank",
        category: "Renewable Energy",
        shortDesc: "Sustainable energy solution integrating solar panels with electronic control units.",
        fullDesc: "Directed the team in the Technology for Humanity category to create a sustainable energy solution. Designed the system architecture integrating solar energy panels with electronic control units. Combined renewable energy principles with engineering solutions.",
        techStack: ["IoT", "Circuit Design", "Renewable Systems"],
        image: "/assets/projects/echo-sun-bank.png",
        gallery: []
    }
];

export const experience: ExperienceItem[] = [
    {
        id: "unyt-student",
        role: "B.Sc. in Software Engineering",
        organization: "University of New York Tirana",
        context: "Current Student",
        period: "2025 – Present",
        desc: "Focus areas: Artificial Intelligence (AI), Machine Learning, Image Processing, Object-Oriented Programming (OOP).",
        type: "education"
    },
    {
        id: "robotics-captain",
        role: "Team Captain (International)",
        organization: "International Robotics Competition (Poland)",
        context: "Robotic Tournament",
        period: "2025 (Completed)",
        desc: "Led the team representing the school in an international environment. Managed technical preparations for Drag Racing, Fast Line Follower, and Robot Tug of War categories. Developed adaptive competition strategies."
    },
    {
        id: "teknofest-vehicle",
        role: "Team Captain",
        organization: "Teknofest",
        context: "Autonomous Vehicle Project",
        period: "2024-2025",
        desc: "Led the team in designing and developing an autonomous driving system for the national finals. Developed lane tracking and object detection algorithms using Python, C++, PyTorch and OpenCV."
    },
    {
        id: "teknofest-sun",
        role: "Team Captain",
        organization: "Teknofest",
        context: "Echo Sun Bank (Renewable Energy)",
        period: "2023",
        desc: "Directed the team in the Technology for Humanity category. Designed the system architecture integrating solar energy panels with electronic control units."
    },
    {
        id: "metek-captain",
        role: "Team Captain (National 2nd Place)",
        organization: "METEK III Competition",
        context: "Advanced Renewable Energy System",
        period: "2021",
        desc: "Awarded 2nd Place in Turkey (National Ranking) among vocational high school projects. Focused on automation and optimization of the energy distribution algorithms."
    },
    {
        id: "kalyon-intern",
        role: "Engineering Intern",
        organization: "Kalyon PV",
        context: "Solar Technologies",
        period: "2022",
        desc: "Collaborated with the technical team to perform fault detection and troubleshooting. Operated production line equipment, ensuring operational efficiency."
    },
    {
        id: "cezeri-tech",
        role: "Student Technician",
        organization: "Cezeri Production Unit",
        context: "School Revolving Fund",
        period: "2021 – 2024",
        desc: "Manufactured and assembled electrical components (Rheostats, Transformers). Conducted performance testing and executed on-site Solar Panel (PV) installations."
    }
];

export const certificates: Certificate[] = [
    // Category A: Competitive Awards
    {
        id: "teknofest-robotaxi",
        title: "Robotaxi Finalist",
        issuer: "Teknofest Autonomous Vehicle",
        year: "2025",
        category: "Competitive Awards",
        image: "/assets/certs/robotaxi-finalist.png"
    },
    {
        id: "poland-robotics",
        title: "Robotic Tournament Captain",
        issuer: "International Robotics Competition (Poland)",
        year: "2025",
        category: "Competitive Awards",
        image: "/assets/certs/robotic-tournament-pl.png"
    },
    {
        id: "metek-silver",
        title: "METEK III Silver Medal",
        issuer: "National 2nd Place (Renewable Energy)",
        year: "2021",
        category: "Competitive Awards",
        image: "/assets/certs/metek-award.jpg" // Keeping as jpg if not replaced, or user didn't upload this one.
    },


    // Category B: Specialized Diplomas
    {
        id: "deneyap-diploma",
        title: "Future Technology Stars (3-Year)",
        issuer: "DENEYAP (T3 Foundation & TUBITAK)",
        year: "2022–2025",
        category: "Specialized Diplomas",
        image: "/assets/certs/future-technology-stars.png"
    },
    {
        id: "ai-training",
        title: "Artificial Intelligence",
        issuer: "8-Week Intensive Training",
        year: "2024",
        category: "Specialized Diplomas",
        image: "/assets/certs/ai-training.png"
    },
    {
        id: "iot-training",
        title: "Electronic Programming & IoT",
        issuer: "13-Week Training",
        year: "2023",
        category: "Specialized Diplomas",
        image: "/assets/certs/electronic-programming-iot.png"
    },
    {
        id: "robotics-training",
        title: "Advanced Robotics",
        issuer: "12-Week Training",
        year: "2023",
        category: "Specialized Diplomas",
        image: "/assets/certs/advanced-robotics.png"
    },
    {
        id: "cyber-training",
        title: "Cybersecurity",
        issuer: "8-Week Training",
        year: "2023",
        category: "Specialized Diplomas",
        image: "/assets/certs/cybersecurity.png"
    },
    {
        id: "software-training",
        title: "Software Technologies",
        issuer: "12-Week Training",
        year: "2022",
        category: "Specialized Diplomas",
        image: "/assets/certs/software-tech.png"
    },
    {
        id: "energy-training",
        title: "Energy Technologies",
        issuer: "12-Week Training",
        year: "2023",
        category: "Specialized Diplomas",
        image: "/assets/certs/energy-technologies.png"
    },
    {
        id: "materials-training",
        title: "Materials Science & Nanotech",
        issuer: "7-Week Training",
        year: "2024",
        category: "Specialized Diplomas",
        image: "/assets/certs/materials-science-nanotech.png"
    },
    {
        id: "design-training",
        title: "Design & Production",
        issuer: "12-Week Training",
        year: "2023",
        category: "Specialized Diplomas",
        image: "/assets/certs/design-and-production.png"
    },

    // Category C: Professional Workshops
    {
        id: "btk-hackers",
        title: "Cybersecurity Training Camp",
        issuer: "BTK Academy 'Future Hackers'",
        year: "2022",
        category: "Professional Workshops",
        image: "/assets/certs/btk-camp.jpg"
    },
    {
        id: "branding-workshop",
        title: "International Branding Training",
        issuer: "Ankara Development Agency",
        year: "2023",
        category: "Professional Workshops",
        image: "/assets/certs/branding.jpg"
    },
    {
        id: "digital-entrepreneurship",
        title: "Digital Entrepreneurship",
        issuer: "Ministry of National Education (MEB)",
        year: "2023",
        category: "Professional Workshops",
        image: "/assets/certs/digital-ent.jpg"
    },
    {
        id: "tanap-robotics",
        title: "Applied Robotics (72 Hours)",
        issuer: "TANAP Social Investment",
        year: "2019",
        category: "Professional Workshops",
        image: "/assets/certs/tanap.jpg"
    }
];
