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
  git,
  threejs,
  python,
  csharp,
  unity,
  angular,
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
    title: "Game Developer",
    icon: web,
  },
  {
    title: "Security Researcher",
    icon: mobile,
  },
  {
    title: "ERP / Full-Stack",
    icon: backend,
  },
  {
    title: "AI Systems",
    icon: creator,
  },
];

const technologies = [
  { name: "JavaScript", icon: javascript },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Python", icon: python },
  { name: "C#", icon: csharp },
  { name: "Unity", icon: unity },
  { name: "Angular", icon: angular },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

const experiences = [
  {
    title: "Game and Systems Programmer",
    company_name: "NovaDreamers Studio · Dubai, UAE",
    icon: web,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Designed and implemented core gameplay systems in Unity for Area Guardians, a 3D tower defense game: turret behavior, enemy AI with obstacle-aware pathfinding, health/score, shop, and camera controls.",
      "Architected Candy Catcher systems including spawners, collectibles, player interaction, and event-driven game state management.",
      "Built and deployed the studio website with a responsive layout, portfolio showcase, and contact flow.",
    ],
  },
  {
    title: "Research & Security Intern",
    company_name: "ARMSS · Dubai, UAE",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "Ran cybersecurity research on system vulnerabilities, attack simulation, and defensive strategies in supervised test environments.",
      "Performed penetration testing and network scanning with Nmap, Metasploit, Burp Suite, Wireshark, Netstat, and pktmon.",
      "Documented attack vectors, risks, and mitigations for web apps, network services, and authentication in structured technical reports.",
    ],
  },
  {
    title: "ERP Software Developer",
    company_name: "ProcessFZE · Dubai, UAE",
    icon: backend,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Developed ERP modules in Angular and implemented backend logic for business workflow automation.",
      "Shipped production-ready features that automated critical operations and met enterprise requirements.",
      "Worked in a GitHub-based team workflow with code reviews and quality standards.",
    ],
  },
  {
    title: "Software Development Intern",
    company_name: "Infinix Innovations · Dubai, UAE",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "Built the AlYoum Unity app with English and Arabic localization and a client-ready interface.",
      "Delivered the product to client expectations, including usability and bilingual support.",
    ],
  },
  {
    title: "Computer Programming Intern",
    company_name: "SparksLab Technology · Dubai, UAE",
    icon: web,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Built AI canvas generation and a live photobooth with Python and Stable Diffusion (image-to-image on live frames).",
      "Created Kinect motion tracking in Unity and a VR 3D drawing experience with gesture-driven menus.",
      "Designed a configurable AI video generation workflow that can run against any Stable Diffusion model.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "3rd place in the IEEE 24 Hour Coding Challenge at university level — a full-day sprint in problem solving under time pressure.",
    name: "IEEE Challenge",
    designation: "University coding competition",
    company: "2020s",
  },
  {
    testimonial:
      "Ethereum Fundamentals Program with Kerala Blockchain Academy, plus CUDA C++ and data science coursework from Cisco and Udemy.",
    name: "Certifications",
    designation: "Blockchain, CUDA, Data Science",
    company: "2024",
  },
  {
    testimonial:
      "Active in regional hackathons and workshops: Abu Dhabi Compass, CodersHQ OpenAI Whisper, WIEHACK 5.0, and Vonage.",
    name: "Hackathons",
    designation: "Community & events",
    company: "2022–2024",
  },
];

const projects = [
  {
    name: "HumanFirewallAI",
    description:
      "AI-powered system to detect social engineering: vishing, deepfakes, and text phishing, with work toward real-time call audio analysis.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "ml", color: "green-text-gradient" },
      { name: "security", color: "pink-text-gradient" },
    ],
    image: creator,
    source_code_link: "https://github.com/HamazingCoding",
  },
  {
    name: "Area Guardians",
    description:
      "3D tower defense game in Unity with turret AI, obstacle-aware pathfinding, shop systems, scoring, audio, and camera controls.",
    tags: [
      { name: "unity", color: "blue-text-gradient" },
      { name: "csharp", color: "green-text-gradient" },
      { name: "gamedev", color: "pink-text-gradient" },
    ],
    image: web,
    source_code_link: "",
  },
  {
    name: "Indoor Navigation (AR)",
    description:
      "Prototype indoor wayfinding app using AR Foundation and Unity for location tracking and AR-based navigation cues.",
    tags: [
      { name: "unity", color: "blue-text-gradient" },
      { name: "ar", color: "green-text-gradient" },
      { name: "mobile", color: "pink-text-gradient" },
    ],
    image: mobile,
    source_code_link: "",
  },
  {
    name: "Live AI Photobooth",
    description:
      "Real-time photobooth that runs video frames through Stable Diffusion image-to-image generation during live sessions.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "stablediffusion", color: "green-text-gradient" },
      { name: "ai", color: "pink-text-gradient" },
    ],
    image: backend,
    source_code_link: "",
  },
  {
    name: "IoT Face Attendance",
    description:
      "Raspberry Pi + OpenCV facial recognition attendance system that sends records to a remote server.",
    tags: [
      { name: "opencv", color: "blue-text-gradient" },
      { name: "raspberrypi", color: "green-text-gradient" },
      { name: "iot", color: "pink-text-gradient" },
    ],
    image: mobile,
    source_code_link: "",
  },
  {
    name: "AI Worm Morris 2",
    description:
      "Research on malware-style attacks against AI systems: simulated vectors, model vulnerabilities, and defensive mitigations.",
    tags: [
      { name: "research", color: "blue-text-gradient" },
      { name: "ai-security", color: "green-text-gradient" },
      { name: "defense", color: "pink-text-gradient" },
    ],
    image: creator,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
