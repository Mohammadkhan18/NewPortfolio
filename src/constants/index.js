import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    nextJs,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    carrent,
    jobit,
    tripguide,
    express,
    firebase
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "project",
      title: "Project",
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
      title: "MERN Developer",
      icon: mobile,
    },
    {
      title: "Next.Js Developer",
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
      name: "Next JS",
      icon: nextJs,
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
      name: "Express JS",
      icon: express,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "git",
      icon: git,
    }
  ];
  

  
  const testimonials = [
    {
      testimonial:
        "It was great working with Mohammad Khan,Web developer who truly cares about their clients success ",
      name: "Dr.Chandrashekar",
      designation: "Ex-Director",
      company: "DRDO",
      image: "",
    },
    {
      testimonial:
        "Working with Mohammad was a game-changer. His expertise in React.js and Next.js, coupled with his attention to detail, resulted in a highly responsive and user-friendly interface is great.",
      name: "Mohd Moiz",
      designation: "Co-Founder",
      company: "GazetBot",
      image: "",
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
      name: "CourseStack",
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
        {
          name: "node",
          color: "orange-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://coursestack.vercel.app/",
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
        {
          name: "Material UI",
          color: "pink-text-gradient",
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