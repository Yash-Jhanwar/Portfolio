// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import aitrLogo from './assets/education_logo/aitrLogo.png';
import abhyudayLogo from './assets/education_logo/abhyudayLogo.jpg';
import carmelLogo from './assets/education_logo/carmelLogo.jpg';

// Project Section Logo's
import leetstatsLogo from './assets/work_logo/leetstatsLogo.png';
import passwordLogo from './assets/work_logo/passwordLogo.png';
import todoLogo from './assets/work_logo/todoLogo.png';
import currencyLogo from './assets/work_logo/currencyLogo.png';
import studysyncLogo from './assets/work_logo/studysyncLogo.png';
import blogLogo from './assets/work_logo/Personal Blog Website.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Fullstack Developer",
    company: "Webverse Digital",
    date: "April 2024 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Fullstack Engineer",
    company: "Agumentik Group of Companies",
    date: "July 2023 - March 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Frontend Intern",
    company: "Newton School",
    date: "September 2021 - August 2022",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Figma",
      "Material UI",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: aitrLogo,
    school: "Acropolis Institute of Technology and Research (AITR), Indore",
    date: "2023 - 2027",
    grade: "65.2% (Average)",
    desc: "I am currently pursuing my Bachelor of Technology (B.Tech) in Information Technology from AITR, Indore affiliated to RGPV Bhopal. During my academic journey, I am building strong foundations in programming, software development, data structures, databases, and modern web technologies while working on practical projects and improving my technical skills.",
    degree: "Bachelor of Technology - B.Tech (Information Technology)",
  },
  {
    id: 1,
    img: abhyudayLogo,
    school: "Abhyuday Higher Secondary School (MP Board)",
    date: "2022 - 2023",
    grade: "58.8%",
    desc: "I completed my Higher Secondary (Class 12) education from Abhyuday Higher Secondary School under the MP Board, where I studied core subjects that strengthened my analytical and academic foundation.",
    degree: "HSC (XII) - MP Board",
  },
  {
    id: 2,
    img: carmelLogo,
    school: "Carmel Convent Sr. Sec. School (CBSE)",
    date: "2020 - 2021",
    grade: "71.8%",
    desc: "I completed my Secondary School (Class 10) education from Carmel Convent Senior Secondary School under the CBSE board, where I developed strong fundamentals in science, mathematics, and computer basics.",
    degree: "SSC (X) - CBSE Board",
  },
];


export const projects = [
  {
    id: 0,
    title: "LeetStats",
    description:
      "A web app that tracks and displays LeetCode statistics such as solved problems, progress, and performance insights in a clean dashboard interface for developers.",
    image: leetstatsLogo,
    tags: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/yash-jhanwar/Leetstats",
    webapp: "https://yash-jhanwar.github.io/Leetstats/",
  },
  {
    id: 1,
    title: "Random Password Generator",
    description:
      "A secure and responsive password generator that creates strong random passwords with customizable options, helping users improve their online security.",
    image: passwordLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yash-jhanwar/random-password",
    webapp: "https://random-password-theta-seven.vercel.app/",
  },
  {
    id: 2,
    title: "To-Do App",
    description:
      "A simple and efficient task management application where users can add, delete, and manage their daily tasks with a clean and minimal interface.",
    image: todoLogo,
    tags: ["React JS", "CSS", "JavaScript"],
    github: "https://github.com/yash-jhanwar/todo",
    webapp: "https://todo-eight-zeta-81.vercel.app/",
  },
  {
    id: 3,
    title: "Currency Converter",
    description:
      "A real-time currency converter web app that fetches live exchange rates and allows users to convert between different international currencies instantly.",
    image: currencyLogo,
    tags: ["React JS", "API", "JavaScript", "CSS"],
    github: "https://github.com/yash-jhanwar/currencyconverter",
    webapp: "https://currencyconverter-sandy-phi.vercel.app/",
  },
  {
    id: 4,
    title: "StudySync",
    description:
      "A responsive educational website designed to present learning resources, notes, and structured content for students in an organized and user-friendly format.",
    image: studysyncLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yash-jhanwar/studysync",
    webapp: "https://yash-jhanwar.github.io/studysync/",
  },
  {
    id: 5,
    title: "Personal Blog Website",
    description:
      "A personal blogging platform where articles, notes, and tech-related content are published with a clean layout and smooth reading experience.",
    image: blogLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yash-jhanwar/blog",
    webapp: "https://yash-jhanwar.github.io/blog/",
  },
];
