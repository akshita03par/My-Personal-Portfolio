// Skills Section Logo's----------------------------->
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

// Experience Section Logo's--------------------------------------->
import AkshitaLogo from "./assets/Akshita-Parmar-modified.png";

// Education Section Logo's---------------------------------------->
import iipsLogo from "./assets/iips_logo.png";
import vaishnavLogo from "./assets/vaishnav_logo.webp";

// Project Section Logo's-------------------------------------------->
import FitnessHubLogo from "./assets/work_logo/FitnessHub.png";
import PortfolioLogo from "./assets/work_logo/Portfolio.png";
import RazorPayLogo from "./assets/work_logo/RazorPay.png";
import AmaZonCloneLogo from "./assets/work_logo/AmaZonClone.png";
import bgGradientLogo from "./assets/work_logo/bgGradient.png";
import GussingNumberLogo from "./assets/work_logo/GussingNumber.png";
import SpotifyCloneLogo from "./assets/work_logo/SpotifyClone.png";


// Skills Section -------------------------------------------------->

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


// Experiences Section---------------------------------------->
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

// Education Section--------------------------------------------------------->

export const education = [
  {
    id: 0,
    img: iipsLogo,
    school: "International Institute of Professional Studies (IIPS), DAVV",
    date: "Jun 2025 - Jun 2026",
    grade: "7.35 CGPA",
    desc:  "Pursuing M.Tech in Information Technology with specialization in advanced computing and software development. Focused on research-driven projects, parallel processing, and innovative technology solutions to strengthen problem-solving and technical expertise.",
    degree: "Master of Technology- M.Tech in IT",
  },
  {
    id: 1,
    img: iipsLogo,
    school: "International Institute of Professional Studies (IIPS), DAVV",
    date: "Oct 2021 - May 2024",
    grade: "7.31 CGPA",
    desc: "Pursuing B.Tech in Information Technology with a focus on web development, programming, and software engineering. Actively engaged in projects that enhance practical skills and real-world problem-solving abilities.",
    degree: "Bachelor of Technology - B.Tech in IT",
  },
  {
    id: 2,
    img: vaishnavLogo,
    school: "Shri Cloth Market Vaishnav bal Mandir Girls Higher Secondary School",
    date: "Apr 2020 - March 2021",
    grade: "79%",
    desc: "Completed class 12 under the CBSE board, studying Physics, Chemistry, Mathematics (PCM).",
    degree: "CBSE(XII) - PCM with Physical Education",
  },
  {
    id: 3,
    img: vaishnavLogo,
    school: "Shri Cloth Market Vaishnav bal Mandir Girls Higher Secondary School",
    date: "Apr 2018 - March 2019",
    grade: "80.8",
    desc:"Completed class 10 under the CBSE board, studying Science with Computer.",
    degree: "CBSE(X) - PCM with Physical Education",
  },
];

// Project (Work) Section-------------------------------------------------------->

export const projects = [
  {
    id: 0,
    title: "Fitness Hub",
    description:
      "A modern and responsive gym & fitness website that helps users track workouts, calculate BMI, and explore exercise routines. Built with HTML, CSS, and JavaScript, featuring interactive charts, smooth animations, and a user-friendly interface to enhance the fitness experience.",
    image: FitnessHubLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/akshita03par/Gym_fitness_project",
    webapp: "",
  },
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A professional portfolio website highlighting my skills in web development, projects, and technical expertise. Designed with HTML, Tailwind CSS , JavaScript to create a responsive, modern, and interactive experience for recruiters and collaborators.",
    image: PortfolioLogo,
    tags: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
    github: "https://github.com/akshita03par/portfolio_website",
    webapp: "https://creative-twilight-2ab38f.netlify.app/",
  },
  {
    id: 2,
    title: "RazorPay Clone",
    description:
      "A clone of RazorPay’s landing page and payment interface. Built using HTML, Tailwind CSS, and API itragation for practice purposes.",
    image: RazorPayLogo,
    tags: ["HTML", "CSS", "Tailwind CSS"],
    github:
      "https://github.com/akshita03par/Razorpay_tailwind/tree/main/RAZORPAYCLONE_TAILWIND",
    webapp: "",
  },
  {
    id: 3,
    title: "Amazon Clone",
    description:
      "An Amazon-like e-commerce front-end clone with product listings, cart functionality, and a responsive layout built with HTML , CSS.",
    image: AmaZonCloneLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/akshita03par/Web-Development/tree/main/PROJECTS/CLONES/Amazon",
    webapp: "",
  },
  {
    id: 4,
    title: "Interactive Gradient Generator",
    description:
       "A modern web tool that lets users create stunning linear gradients with live preview. It features two buttons to quickly generate new gradients and displays the corresponding RGB values for easy copying. Ideal for designers and developers looking for quick gradient inspiration and integration into their projects.",
    image: bgGradientLogo,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    github: "https://github.com/akshita03par/Web-Development/tree/main/JAVASCRIPT_TUTORIAL/PROJECTS/BACKGROUND-GRADIENT-GENERATOR",
    webapp: "",
  },
  {
    id: 5,
    title: "Random Number Guessing Game",
    description:
       "A fun and interactive web game where users try to guess a randomly generated number. The game provides instant feedback on each guess, tracks the number of attempts, and encourages users to improve their prediction skills. Built with HTML, CSS, and JavaScript for a smooth and engaging experience.",
    image: GussingNumberLogo,
    tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    github: "https://github.com/akshita03par/Web-Development/tree/main/JAVASCRIPT_TUTORIAL/PROJECTS/GUESS-THE-NUMBER",
    webapp: "",
  },
  {
    id: 6,
    title: "Spotify Clone",
    description:
      "A visually appealing, responsive frontend replica of Spotify. Built entirely with HTML, CSS, and JavaScript, smooth user interactions.",
    image: SpotifyCloneLogo,
    tags: ["HTML" , "CSS" ,"JavaScript"],
    github: "https://github.com/akshita03par/Web-Development/tree/main/PROJECTS/CLONES/Spotify",
    webapp: "",
  },
];




