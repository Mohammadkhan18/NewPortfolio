import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    carrent,
    jobit,
    tripguide,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Freelancer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Problem Solving",
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
      name: "React JS",
      icon: reactjs,
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
      name: "git",
      icon: git,
    }
  ];
  

  
  const testimonials = [
    {
      testimonial:
        "It was great working with Mohammad,a web developer who truly cares about their clients' success ",
      name: "dr-chandrashekar",
      designation: "Ex-Director",
      company: "DRDO",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    // {
    //   testimonial:
    //     "I've never met  like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "StudyGenius",
      description:
        "E-Learning platform with course creation and publication for instructors, utilizing Razorpay for secure payments and Cloudinary for thumbnail storage.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "MeTube",
      description:
        "Developed a YouTube clone using React, RapidAPI, and other relevant technologies,Implemented the ability to play videos within the application.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://courageous-youtiao-ce8a49.netlify.app/",
    },
    {
      name: "HomyZ",
      description:
        "A comprehensive Real Estate platform that allows users to buy Houses and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://homyz-azure.vercel.app/",
    },
  ];
  
  export { services, technologies, testimonials, projects };