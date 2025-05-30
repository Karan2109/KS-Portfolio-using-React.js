import Ecomm from "./assets/Ecomm.png";
import Gym from "./assets/gym1.png";
import EMS from "./assets/EMS.png";
import Blog from "./assets/Blog.png";
import FtoW from "./assets/FtoW1.png";
import MV from "./assets/MV Logo.jpg";

export const PROJECTS = [
  {
    title: "M-Vastra – Modern E-commerce Web App",
    image: MV,
    description:
      "M-Vastra (Modern Vastra) is a fully responsive full-stack e-commerce application built using the MERN stack. It features user authentication, dynamic product listings, cart management, secure PayPal integration, and an admin panel for product and order control. Designed with Tailwind CSS for a clean UI and developed with Redux Toolkit and Thunk for efficient state management, this project reflects 45 days of full-stack development effort.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Redux Thunk",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Multer",
      "Cloudinary",
      "PayPal Integration",
      "Postman",
      "React Router",
      "Sonner",
    ],
    viewLink: "https://mvastra-ecomm.vercel.app/",
    codeLink: "https://github.com/Karan2109/Ecomm",
  },
  {
    title: "Pixel-Perfect Frontend from Figma Mockup",
    image: FtoW,
    description:
      "This project demonstrates my ability to convert a high-fidelity Figma design into a fully responsive and functional web interface using modern frontend technologies. I built the layout using React.js and styled it with Tailwind CSS, ensuring pixel-perfect accuracy and consistent responsiveness across devices. The project highlights my skills in component-based architecture, reusable UI elements, and clean, maintainable code structure.",
    technologies: [
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Context API",
      "CRUD",
      "Count function",
    ],
    viewLink: "https://agencystudio.netlify.app/",
    codeLink: "https://github.com/Karan2109/ThemeWeb",
  },
  {
    title: "Employee Management System",
    image: EMS,
    description:
      "Employee Management System (EMS) is a responsive web application built using React.js, Tailwind CSS, Redux, and Context API. It features a role-based dashboard for Admins and Employees, with all data stored locally using LocalStorage to ensure smooth performance without external dependencies.",
    technologies: [
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "LocalStorage",
      "Redux",
      "Authentication",
      "CRUD",
    ],
    viewLink: "https://employeemanagementsystemems.netlify.app/",
    codeLink: "https://github.com/Karan2109/Employee-Management-System-EMS-",
  },
  {
    title: "Blog Post (AppWrite)",
    image: Blog,
    description:
      "Blog Website is a dynamic and fully responsive web application developed using JavaScript, React.js, and Tailwind CSS. The project features a seamless authentication system, CRUD functionality for managing blog posts, and a clean user experience powered by React Router for smooth navigation. Built on AppWrite (BaaS) for backend services, it efficiently handles real-time data operations while managing user sessions through Session Storage and persistent data with Local Storage. The app uses a combination of Redux and Context API for robust state management, ensuring scalability and maintainability. API integration allows for flexible data flow and enhances the app’s dynamic capabilities",
    technologies: [
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "AppWrite (BaaS)",
      "Redux",
      "Context API",
      "React Router",
      "API",
      "Session Storage",
      "Local Storage",
      "CRUD",
      "Authentication",
    ],
    viewLink: "https://appwriteblogpost.netlify.app/",
    codeLink: "https://github.com/Karan2109/AppWrite_Blog_Post",
  },
  {
    title: "E-Commerce Website UI",
    image: Ecomm,
    description:
      "A fully designed e-commerce website UI built using HTML, CSS, and JavaScript, featuring product listings and a shopping cart interface.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js"],
    viewLink: "https://artistcart.netlify.app/",
    codeLink: "https://github.com/Karan2109/E-commerce-Website",
  },
  {
    title: "Fitness Website UI",
    image: Gym,
    description:
      "A fully responsive gym website UI built using HTML, CSS, and JavaScript, featuring sections like home, services, trainers, and contact..",
    technologies: ["HTML", "CSS", "JavaScript", "React.js"],
    viewLink: "https://fitnespoint.netlify.app/",
    codeLink: "https://github.com/Karan2109/Gym-Management",
  },
];
