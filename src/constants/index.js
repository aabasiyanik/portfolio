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
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Azure Cloud Dev",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Robotics",
    icon: figma,
  },
];

const technologies = [
  {
    name: "Python",
    icon: redux,
  },
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
    name: "C",
    icon: mongodb,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Java",
    icon: docker,
  },
  
  {
    name: "Azure",
    icon: creator,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Robotics Builder",
    company_name: "Robominds",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2019 - Mar 2022",
    points: [
      "Designing robotic systems using cutting-edge hardware and software.",
      "Collaborating with multidisciplinary teams to create innovative solutions.",
      "Implementing robust and adaptable robotic behaviors.",
      "Engaging in peer reviews to refine designs and code.",
    ],
  },
  {
    title: "Student Intern",
    company_name: "The University of Chicago",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2021 - Sept 2021",
    points: [
      "Worked on a special COVID-19 research project.",
      "Taking lead in determining the useful techniques of saliva samples.",
      "Understood and learned different types of technology used on projects.",
      "Calculate the performance parameters of optimizations in the study.",
    ],
  },
  {
    title: "Teacher Assistant",
    company_name: "Horizon Science Academy",
    icon: shopify,
    iconBg: "#383E56",
    date: "Oct 2021 - Mar 2022",
    points: [
      "Led individual and group education sessions in technology use and STEM-focused activities.",
      "Guided students in exam preparation through private instruction sessions.",
      "Implemented technology-based instructional aids to allow for moderated online discussions and supplemental materials.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Match My Job",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Present",
    points: [
      "Utilize a wide array of technical skills, including expertise in HTML, CSS, JavaScript, and popular front-end frameworks like React and Angular, to design aesthetically pleasing and fully responsive user interfaces that enhance user satisfaction and drive engagement.",
      "Acquire a profound understanding of the development and design procedures required to create innovative digital products that effectively cater to diverse user groups and drive business growth.",
      "Create exceptional digital products that effectively blend technical and design skills to drive user engagement and improve the overall user experience.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
