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
    hal,
    isro,
    newton,
    editor,
    flipkart,
    weather,
    threejs,
    neha
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
      title: "Data Structures and Algorithms",
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
  ];
  
  const experiences = [
    {
      title: "Internship Trainee",
      company_name: "Hindustan Aeronautics Limited",
      icon: hal,
      iconBg: "#ffffff",
      date: "August 2021 - September 2021",
      points: [
        "I have gathered in depth understanding and ample exposer to the function of PSLV, GSLV MK-II ,GSLV MK-III, IRS, INSAT.",
        "In different departments how they working on different components of Space Vehicle",
      ],
    },
    {
      title: "Project Trainee",
      company_name: "Indian Space Research Organisation",
      icon: isro,
      iconBg: "#E6DEDD",
      date: "March 2022 - May 2022",
      points: [
        "Calculating Repetivity and Revisitivity of satellite at an assigned altitude and orbit for a given place on earth surface.",
        "Creating a navigation path on which satellite can move by using Ansys STK.",
      ],
    },
    {
      title: "Coding Bootcamp",
      company_name: "Newton School",
      icon: newton,
      iconBg: "#383E56",
      date: "July 2022 - June 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participated in various weekly and monthly contests organised by the platform.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Neeraj proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Neeraj does.",
      name: "Neha Maurya",
      designation: "COO",
      company: "DEF Corp",
      image: neha,
    },
    {
      testimonial:
        "After Neeraj optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Scratch Editor",
      description:
        "It is a minimal clone of web app - Scratch which is a free programming language and online community where you can create your own interactive stories, games, and animations",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "material-ui",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: editor,
      source_code_link: "https://juspay-tau.vercel.app/",
    },
    {
      name: "Flipkart Clone",
      description:
        "This react project is the clone of the Flipkart E-commerce website. For products, static data is used and the cart functionality is implemented with the help of the redux toolkit.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: flipkart,
      source_code_link: "https://flipkart-clone-react-project-nzysxndeks8d.vercel.app/",
    },
    {
      name: "Weather App",
      description:
        "This app is for simply weather forecasting. The user can check the condition of the present-day climate probability and predict whether the day is a cloudy or sunny day.",
      tags: [
        {
          name: "rapidapi",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://weather-app-seven-sage.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };