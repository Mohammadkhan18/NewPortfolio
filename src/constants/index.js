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
    firebase,
    GbLogo,
    SpLogo,
    Pdlogo,
    BsLogo,
    high,
    roomify
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id:'work',
      title:'Experience'
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

  const experiences = [
    {
      title: "Software Developer",
      company_name: "Baisware",
      icon: BsLogo,
      iconBg: "#E6DEDD",
      date: "Jan 2025 - Present",
      points: [
        "Developed and launched Baisware’s website using Next.js, Express.js, and MongoDB, improving site performance by 50% on Vercel, ensuring 99.9% uptime and reducing load time by 40%.",
        "Built a dynamic admin panel enabling real-time job postings and resume submissions, streamlining recruitment and cutting manual processing time by 60%.",
        "Implemented secure authentication and role-based access control, enhancing data security by 70%.Optimized the backend, reducing database query execution time by 35%, leading to faster data retrieval.",
      ],
    },
    {
      title: "Freelancer",
      company_name: "ScanProperly",
      icon: SpLogo,
      iconBg: "#E6DEDD",
      date: "Oct 2024 - Nov 2024",
      points: [
        "Developed a firm comparison platform with an admin panel using Next.js, TypeScript, MongoDB, AWS, and Express, improving data processing speed for company comparisons by 30%.",
        "Built CRUD functionality for companies and blogs, enhancing content management efficiency and reducing data entry time by 40%.",
        "Implemented user registration and advanced company filtering with Redux, increasing user engagement by 25%, while designing a fully responsive UI that boosted mobile user traffic by 20%.",
      ],
    },
    {
      title: "Freelancer",
      company_name: "GazetBot",
      icon: GbLogo,
      iconBg: "#383E56",
      date: "July 2024 - Aug 2024",
      points: [
        "Architected a dynamic and responsive user interface with the Next.js and firebase which has Wishlist and product comparison functionalities, directly leading to a 15% increase in customer retention.",
        "Created a multi-layered user authentication system using Firebase, integrating OAuth to facilitate Google sign-ins, which reduced user onboarding time by 25% and improved overall user retention rates.",
        "Developed an advanced search and filter system allowing users to find products based on categories and price 25% increase in user interactions on the site.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Provoke Developers",
      icon: Pdlogo,
      iconBg: "#E6DEDD",
      date: "January 2024 - March 2024e",
      points: [
        "Engineered a fully responsive Courses Page utilizing the MERN stack, Next.js, and TypeScript; led to an increase in user interaction by 500+ daily visits as users engaged with new features.",
        "Implemented robust authentication solutions with Firebase, utilizing cookies and tokens to ensure secure access.",
        "Worked collaboratively with cross-functional teams to conceptualize, build, and launch new features, resulting in a 15% boost in team productivity and smooth integration of deliverables.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
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
    {
      testimonial:
        "Khan exceeded expectations with ScanProperly! He built an efficient, feature-rich platform with a responsive design, showcasing great professionalism and technical expertise. Excellent communication and timely delivery—highly recommend for any project!",
      name: "Pratham Surani",
      designation: "Founder",
      company: "Scanproperly",
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
      name: "Roomify",
      description:
        "A fully functional Airbnb clone with property listings, booking system, and user authentication, allowing hosts to manage listings and guests to book stays seamlessly.",
      tags: [
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "Prisma",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Cloudinary",
          color: "orange-text-gradient",
        },
      ],
      image: roomify,
      source_code_link: "https://airbnb-clone01-puce.vercel.app/",
    },
    {
      name: "High",
      description:
        "Built a platform for publishing articles and managing user profiles with features like secure authentication, Markdown-supported article creation.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Hono",
          color: "pink-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "TypeScript",
          color: "orange-text-gradient",
        },
      ],
      image: high,
      source_code_link: "https://high-blogsite-mohammadkhan18s-projects.vercel.app/",
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
  
  export { services, technologies, testimonials, projects,experiences };