import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    animation,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Celebal Technologies",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jan 2024 - April 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Blockchain Developer",
      company_name: "Timechain Labs",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "April 2024 - August 2024",
      points: [
        "Developed blockchain applications using TypeScript, NestJS, and related technologies.",
        "Collaborated with cross-functional teams on live blockchain projects.",
        "Handled CRUD operations and smart contract integrations for various applications."
      ],
    },
    {
      title: "Web Developer",
      company_name: "RnPSoft Pvt Limited",
      icon: shopify,
      iconBg: "#383E56",
      date: "Sep 2024 - Present",
      points: [
        "Started developing web applications using React.js and technologies.",
        "Involved in planning and initial development phases of multiple web projects.",
        "Excited to implement best practices and innovative solutions in upcoming web development projects."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Twilight Art Animated Website",
      description:
        "Engineered a sleek, minimalist platform featuring cutting-edge aesthetics & user-friendly interface with graphic art solutions and functional design, providing a visually stunning experience",
      tags: [
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://adityathakur55.github.io/Sundown-Studio",
    },
    {
      name: "Chess.com",
      description:
        "Developed a real-time multiplayer chess game using, featuring live board updates, piece capturing, and checkmate detection, with easy player access by simply opening the game in two browser tabs",
      tags: [
        {
          name: "socket.io",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://chesss-game.up.railway.app",
    },
    {
      name: "Street Fighter- Combat Game",
      description:
        "nCrafted an engaging browser-based combat game using JavaScript. Implemented dynamic player mechanics and real-time collision detection for a seamless, arcade-like experience.",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://adityathakur55.github.io/StreetFighter-JS-Game",
    },
    {
      name: "3D Animated Mordern Website",
      description:
        "Developed a visually captivating website with dynamic animations, delivering an immersive user experience throughadvanced techniques.",
      tags: [
        {
          name: "threejs",
          color: "blue-text-gradient",
        },
        {
          name: "reactjs",
          color: "green-text-gradient",
        },

      ],
      image: animation,
      source_code_link: "https://adityathakur55.github.io/animated-website",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };