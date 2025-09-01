// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import AkshitaLogo from "./assets/Akshita-Parmar-modified.png";

// // Education Section Logo's
// import glaLogo from './assets/education_logo/gla_logo.png';
// import bsaLogo from './assets/education_logo/bsa_logo.png';
// import vpsLogo from './assets/education_logo/vps_logo.png';

// // Project Section Logo's
import FitnessHubLogo from "./assets/work_logo/FitnessHub.png";
import PortfolioLogo  from "./assets/work_logo/Portfolio.png";
import RazorPayLogo from "./assets/work_logo/RazorPayLogo.png";
import AmaZonCloneLogo from "./assets/work_logo/AmaZonClone.png";
import  bgGradientLogo from "./assets/work_logo/bgGradient.png";
import GussingNumberLogo from "./assets/work_logo/GussingNumber.png";
import SpotifyCloneLogo from "./assets/work_logo/SpotifyClone.png";


export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },

  {
    title: "Backend",
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      // { name: 'Express JS', logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: AkshitaLogo,
    role: "Frontend Developer",
    company: "Updated Soon..",
    date: "1/9/2025",
    desc: "Relevant Experience: Built multiple responsive websites as part of coursework and personal projects using React, Tailwind CSS, HTML, CSS, and JavaScript.Examples include a Gym Fitness Website with BMI calculator and a Personal Portfolio Website to showcase projects.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      // "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "BootStrap",
      // "Redux",
      // " Next Js",
    ],
  },
  {
    id: 1,
    img: AkshitaLogo,
    role: "Backend Developer",
    company: "Updated Soon..",
    date: "1/9/2025",
    desc: "This section will be updated in the future with internships or professional experience.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      // "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      "Next Js",
    ],
  },
];

// export const education = [
//   {
//     id: 0,
//     img: glaLogo,
//     school: "GLA University, Mathura",
//     date: "Sept 2022 - July 2024",
//     grade: "7.81 CGPA",
//     desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
//     degree: "Master of Computer Applications - MCA",
//   },
//   {
//     id: 1,
//     img: bsaLogo,
//     school: "BSA College, Mathura",
//     date: "Sept 2018 - Aug 2021",
//     grade: "73.2%",
//     desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
//     degree: "Bachelor of Science - BSC (Computer Science)",
//   },
//   {
//     id: 2,
//     img: vpsLogo,
//     school: "Vatsalya Public School Govardhan, Mathura",
//     date: "Apr 2017 - March 2018",
//     grade: "78%",
//     desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
//     degree: "CBSE(XII) - PCM with Computer Science",
//   },
//   {
//     id: 3,
//     img: vpsLogo,
//     school: "Vatsalya Public School Govardhan, Mathura",
//     date: "Apr 2015 - March 2016",
//     grade: "87.5%",
//     desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
//     degree: "CBSE(X), Science with Computer Application",
//   },
// ];

export const projects = [
  {
    id: 0,
    title: "Fitness Hub",
    description:
      "A responsive fitness web app to track exercises, BMI, and workout routines. Built with HTML, CSS, and JavaScript for smooth UI and interactive charts.",
    image: FitnessHubLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/FitnessHub",
    webapp: "https://fitnesshubdemo.netlify.app/",
  },
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and contact details. Built using React JS and styled with modern design principles.",
    image: PortfolioLogo,
    tags: [ "HTML", "CSS", "JavaScript" , "TailwindCSS"],
    github: "https://github.com/yourusername/Portfolio",
    webapp: "https://yourportfolio.netlify.app/",
  },
  {
    id: 2,
    title: "RazorPay Clone",
    description:
      "A clone of RazorPay’s landing page and payment interface. Built using React JS, Tailwind CSS, and API integration for practice purposes.",
    image: RazorPayLogo,
    tags: ["React JS", "Tailwind CSS", "API"],
    github: "https://github.com/yourusername/RazorPayClone",
    webapp: "https://razorpayclone.netlify.app/",
  },
  {
    id: 3,
    title: "Amazon Clone",
    description:
      "An Amazon-like e-commerce front-end clone with product listings, cart functionality, and a responsive layout built with React JS and Node.js.",
    image: AmaZonCloneLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/AmazonClone",
    webapp: "https://amazonclone.netlify.app/",
  },
  {
    id: 4,
    title: "Task Reminder Tool",
    description:
      "A Chrome extension to help users manage daily tasks and get notifications. Built using JavaScript and Chrome Extension APIs for productivity.",
    image: bgGradientLogo,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    github: "https://github.com/yourusername/TaskReminderTool",
    webapp: "https://taskreminderdemo.netlify.app/",
  },
  {
    id: 5,
    title: "Webverse Digital",
    description:
      "Official website of Webverse Digital, a creative digital marketing agency. Built with HTML, CSS, and JavaScript with animations and clean UI.",
    image: GussingNumberLogo,
    tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    github: "https://github.com/yourusername/WebverseDigital",
    webapp: "https://webversedigital.com/",
  },
  {
    id: 6,
    title: "Spotify Clone",
    description:
      "An ed-tech platform for coding blogs, interview prep, e-books, and premium content with payment integration. Full-stack React JS, Node.js, MongoDB, and Express.",
    image: SpotifyCloneLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    github: "https://github.com/yourusername/CodingMaster",
    webapp: "https://codingmasterweb.in/",
  },
];