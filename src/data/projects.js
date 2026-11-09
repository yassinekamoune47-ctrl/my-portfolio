import advvmImg from "../assets/projects/advvm-sportswear/advvm-sportswear.jpg";
import teetimeImg from "../assets/projects/teetime/teetime.jpg";
import gymflowImg from "../assets/projects/gymflow/gymflow.png";
import ecommerceImg from "../assets/projects/ecommerce-laravel/ecommerce-laravel.jpg";

export const projects = [
  {
    id: "advvm-sportswear",
    title: "ADVVM SPORTSWEAR",
    category: "E-commerce Website",
    badge: "E-Commerce",
    description:
      "A modern e-commerce platform for sportswear and fashion products, featuring product management, dynamic categories, product images, and a responsive shopping experience.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "Firebase",
      "Firebase Authentication",
      "Firebase Realtime Database",
      "Firebase Storage",
    ],
    image: advvmImg,
    liveUrl: "https://advvm-sportswear.web.app",
    githubUrl: "",
    featured: true,
    themeColor: "indigo",
    accentGradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
    highlights: [
      "Dynamic Product Catalog & Filtering",
      "Firebase Authentication & User Sessions",
      "Real-time Database Cart Synchronization",
      "Cloud Storage for High-Res Imagery",
    ],
  },
  {
    id: "techpal-golf-teetime",
    title: "TECHPAL GOLF TEETIME",
    category: "Golf Reservation Platform",
    badge: "Booking Platform",
    description:
      "A golf reservation platform designed to connect users with golf clubs and courses. The application provides a modern frontend connected to a Laravel backend, supporting course management and reservation workflows.",
    technologies: ["React", "Laravel", "PHP", "MySQL", "REST API"],
    image: teetimeImg,
    liveUrl: "",
    githubUrl: "https://github.com/yassinekamoune47-ctrl/TeeTime",
    featured: true,
    themeColor: "emerald",
    accentGradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    highlights: [
      "Course Directory & Tee-Time Slots",
      "Laravel RESTful Backend Architecture",
      "Relational MySQL Reservation Schema",
      "Seamless Booking Flow with Instant Confirmation",
    ],
  },
  {
    id: "gymflow",
    title: "GYMFLOW",
    category: "Gym Management System",
    badge: "Management SaaS",
    description:
      "A gym management application designed to organize members, coaches, attendance, gym sessions, and payments through an intuitive dashboard.",
    technologies: ["React", "Laravel", "PHP", "MySQL", "Tailwind CSS"],
    image: gymflowImg,
    liveUrl: "",
    githubUrl: "https://github.com/yassinekamoune47-ctrl/GymFlow",
    featured: true,
    themeColor: "purple",
    accentGradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    highlights: [
      "Member & Coach Profiles Management",
      "Attendance Tracking & Session Scheduling",
      "Payment History & Subscription Status",
      "Responsive Dark-Themed Administrative UI",
    ],
  },
  {
    id: "ecommerce-react-laravel",
    title: "E-COMMERCE REACT + LARAVEL",
    category: "Full Stack E-commerce",
    badge: "Full Stack Platform",
    description:
      "A full-stack e-commerce application with a React frontend and Laravel backend. It includes product management, API communication, database integration, and an administrative interface.",
    technologies: ["React", "Laravel", "PHP", "MySQL", "REST API"],
    image: ecommerceImg,
    liveUrl: "",
    githubUrl: "https://github.com/yassinekamoune47-ctrl/PFE",
    featured: true,
    themeColor: "blue",
    accentGradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    highlights: [
      "Decoupled React Single Page Application",
      "Secure Laravel Token-Based REST API",
      "Relational Inventory & Order Processing",
      "Dedicated Admin Portal for Operations",
    ],
  },
];
