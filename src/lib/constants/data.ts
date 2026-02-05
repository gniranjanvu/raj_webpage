export const siteConfig = {
  name: "Prudhvi Raj Chalapaka",
  title: "Robotics & Automation Engineer",
  description:
    "Ambitious Robotics & Automation Engineer with strong foundation in ROS/ROS2, Industrial Automation and autonomous navigation. Proven research capability with Elsevier publication on robotic surgery and pharmacotherapy.",
  email: "prudhvirajchalapaka07@gmail.com",
  phone: "+91 7995511692",
  location: "Guntur, India",
  website: "prudhvirajchalapaka.in",
  social: {
    linkedin: "https://linkedin.com/in/prudhvirajchalapaka",
    github: "https://github.com/prudhvirajchalapaka",
    instagram: "",
    twitter: "",
  },
  titles: [
    "Robotics & Automation Engineer",
    "ROS/ROS2 Developer",
    "Industrial Automation Specialist",
    "Research Enthusiast",
  ],
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Publications", href: "#publications" },
  { name: "Contact", href: "#contact" },
];

export const experiences = [
  {
    id: "1",
    role: "Robotics Engineer Intern",
    company_name: "Karthikesh Robotics Private Limited",
    company_logo_url: null,
    start_date: "2025-05-01",
    end_date: "2025-11-30",
    is_current: false,
    location: "Chennai, India",
    employment_type: "internship" as const,
    description:
      "Developed Autonomous Mobile Robots using ROS2 and visualization tools. Implemented Path Planning Algorithms for Arms and Mobile robots. Worked on advanced robotics systems for industrial applications.",
    tech_stack: ["ROS2", "Python", "Path Planning", "AMR", "Visualization"],
    display_order: 1,
    is_published: true,
    slug: "robotics-engineer-intern-karthikesh",
    highlights: [
      "Developed Autonomous Mobile Robots",
      "Worked on ROS2 and Visualization tools",
      "Implemented Path Planning Algorithms for Arms and Mobile robots",
    ],
  },
  {
    id: "2",
    role: "Teaching Assistantship Intern",
    company_name: "Vignan's University",
    company_logo_url: null,
    start_date: "2025-01-01",
    end_date: "2025-04-30",
    is_current: false,
    location: "Guntur, India",
    employment_type: "internship" as const,
    description:
      "Taught students about ROS in practical sessions. Worked on research project for autonomous robot. Helped with robot mechanisms, kinematical & dynamical analysis.",
    tech_stack: ["ROS", "Teaching", "Research", "Kinematics", "Dynamics"],
    display_order: 2,
    is_published: true,
    slug: "teaching-assistant-vignans",
    highlights: [
      "Taught Students about ROS in Practical Sessions",
      "Worked on Research Project for autonomous Robot",
      "Helped with Robot Mechanisms, Kinematical & Dynamical Analysis",
    ],
  },
  {
    id: "3",
    role: "ROS Intern",
    company_name: "Karthikesh Robotics Private Limited",
    company_logo_url: null,
    start_date: "2025-01-01",
    end_date: "2025-02-28",
    is_current: false,
    location: "Online",
    employment_type: "internship" as const,
    description:
      "Worked with ROS2 Framework and learned Docker & GUI for ROS2.",
    tech_stack: ["ROS2", "Docker", "Linux", "GUI"],
    display_order: 3,
    is_published: true,
    slug: "ros-intern-karthikesh",
    highlights: [
      "Worked with ROS2 Framework",
      "Learned Docker & GUI for ROS2",
    ],
  },
];

export const education = [
  {
    id: "1",
    institution_name: "Vignan's University",
    university_board: "VFSTR",
    institution_logo_url: null,
    degree: "B.Tech",
    major: "Robotics & Automation",
    start_year: 2021,
    end_year: 2025,
    is_current: false,
    grade: "CGPA: 7.62/10",
    location: "Guntur",
    description:
      "Bachelor of Technology in Robotics & Automation Engineering with focus on ROS/ROS2, embedded systems, and industrial automation.",
    key_courses: [
      "Robotics",
      "Control Systems",
      "Machine Learning",
      "Embedded Systems",
      "Industrial Automation",
    ],
    display_order: 1,
    is_published: true,
    slug: "btech-robotics-vignans",
  },
  {
    id: "2",
    institution_name: "NRI Junior College",
    university_board: "Board of Intermediate Education",
    institution_logo_url: null,
    degree: "Intermediate",
    major: "MPC (Maths, Physics, Chemistry)",
    start_year: 2019,
    end_year: 2021,
    is_current: false,
    grade: "804/1000",
    location: "Tenali",
    description: "Intermediate education with focus on Mathematics, Physics, and Chemistry.",
    key_courses: ["Mathematics", "Physics", "Chemistry"],
    display_order: 2,
    is_published: true,
    slug: "intermediate-nri",
  },
  {
    id: "3",
    institution_name: "Gretnaltes Public School",
    university_board: "SSC Board",
    institution_logo_url: null,
    degree: "SSC (10th)",
    major: "General",
    start_year: 2018,
    end_year: 2019,
    is_current: false,
    grade: "GPA: 9.2/10",
    location: "Duggirala",
    description: "Secondary School Certificate with excellent academic performance.",
    key_courses: [],
    display_order: 3,
    is_published: true,
    slug: "ssc-gretnaltes",
  },
];

export const projects = [
  {
    id: "1",
    title: "IRAVATH",
    slug: "iravath",
    category: "Autonomous Navigation",
    hero_image_url: null,
    short_description:
      "Autonomous Rover with 3D-printed components, trained for object detection and measurement using Rocker-Boggie mechanism for terrain stability.",
    full_description:
      "IRAVATH is an advanced autonomous rover designed with 3D-printed components and equipped with sophisticated sensors for object detection and measurement. The rover utilizes the Rocker-Boggie mechanism for excellent terrain stability and navigation. It's powered by an Nvidia Jetson for edge computing and uses ROS NavStack for autonomous navigation.",
    is_featured: true,
    tech_stack: ["ROS", "NavStack", "Nvidia Jetson", "ML", "3D Printing", "Python"],
    github_url: "https://github.com/prudhvirajchalapaka/iravath",
    demo_url: null,
    status: "published" as const,
    display_order: 1,
  },
  {
    id: "2",
    title: "DWA Local Planner",
    slug: "dwa-local-planner",
    category: "Path Planning",
    hero_image_url: null,
    short_description:
      "Custom Local DWA Planner implementation for Turtlebot3 without standard nav2 packages.",
    full_description:
      "A custom implementation of the Dynamic Window Approach (DWA) Local Planner for Turtlebot3 robot. This project demonstrates deep understanding of path planning algorithms by implementing the planner from scratch without relying on standard nav2 packages. Tested extensively in Gazebo simulation with RViz visualization.",
    is_featured: true,
    tech_stack: ["ROS2", "Gazebo", "RViz", "Python", "Path Planning"],
    github_url: "https://github.com/prudhvirajchalapaka/dwa-planner",
    demo_url: null,
    status: "published" as const,
    display_order: 2,
  },
  {
    id: "3",
    title: "Mecanum Wheeled Mobile Robot",
    slug: "mecanum-robot",
    category: "Mobile Robotics",
    hero_image_url: null,
    short_description:
      "Mecanum wheeled robot with manipulator for Agriculture, Hospitality, and Housekeeping applications.",
    full_description:
      "A versatile mecanum wheeled mobile robot equipped with a manipulator arm, designed for multi-purpose applications in agriculture, hospitality, and housekeeping. The omnidirectional movement capability allows for precise navigation in tight spaces, while the integrated manipulator enables object handling tasks.",
    is_featured: true,
    tech_stack: ["Arduino", "Gazebo", "ROS", "Mecanum Wheels", "Manipulator"],
    github_url: "https://github.com/prudhvirajchalapaka/mecanum-robot",
    demo_url: null,
    status: "published" as const,
    display_order: 3,
  },
  {
    id: "4",
    title: "Modular Manufacturing System",
    slug: "modular-manufacturing-system",
    category: "Industrial Automation",
    hero_image_url: null,
    short_description:
      "Automated manufacturing system using onboard sensor data with pneumatics and PLC control.",
    full_description:
      "A fully automated modular manufacturing system that uses real-time sensor data for process control. The system integrates pneumatic actuators, PLC programming, and Arduino-based sensor interfaces to create an efficient and flexible manufacturing line suitable for various industrial applications.",
    is_featured: true,
    tech_stack: ["Pneumatics", "PLC", "Arduino", "Sensors", "Automation"],
    github_url: null,
    demo_url: null,
    status: "published" as const,
    display_order: 4,
  },
  {
    id: "5",
    title: "6DOF Robotic Arm",
    slug: "6dof-robotic-arm",
    category: "Manipulators",
    hero_image_url: null,
    short_description:
      "6 Degrees of Freedom Robotic Arm designed in Fusion 360, 3D printed, and controlled via mobile app.",
    full_description:
      "A custom-designed 6 Degrees of Freedom (6DOF) robotic arm created using Fusion 360 CAD software and manufactured using 3D printing. The arm features a custom PCB for motor control and can be operated wirelessly via a dedicated Android mobile application, making it ideal for educational and light industrial applications.",
    is_featured: true,
    tech_stack: ["Arduino", "Custom PCB", "Android", "Fusion 360", "3D Printing"],
    github_url: "https://github.com/prudhvirajchalapaka/6dof-arm",
    demo_url: null,
    status: "published" as const,
    display_order: 5,
  },
];

export const skillCategories = [
  {
    id: "1",
    name: "Robotics Frameworks",
    skills: [
      { name: "ROS", proficiency: 5 },
      { name: "ROS2", proficiency: 5 },
      { name: "Gazebo", proficiency: 4 },
      { name: "RViz", proficiency: 4 },
      { name: "MoveIt", proficiency: 3 },
      { name: "NavStack", proficiency: 4 },
    ],
  },
  {
    id: "2",
    name: "Programming Languages",
    skills: [
      { name: "Python", proficiency: 5 },
      { name: "C++", proficiency: 4 },
      { name: "C", proficiency: 4 },
      { name: "MATLAB", proficiency: 3 },
    ],
  },
  {
    id: "3",
    name: "Embedded Systems",
    skills: [
      { name: "Arduino", proficiency: 5 },
      { name: "Raspberry Pi", proficiency: 4 },
      { name: "Nvidia Jetson", proficiency: 4 },
      { name: "ESP32", proficiency: 4 },
      { name: "STM32", proficiency: 3 },
    ],
  },
  {
    id: "4",
    name: "Industrial Automation",
    skills: [
      { name: "PLC Programming", proficiency: 4 },
      { name: "SCADA", proficiency: 3 },
      { name: "Pneumatics", proficiency: 4 },
      { name: "Hydraulics", proficiency: 3 },
      { name: "Sensors", proficiency: 5 },
    ],
  },
  {
    id: "5",
    name: "Design & Simulation",
    skills: [
      { name: "Fusion 360", proficiency: 4 },
      { name: "SolidWorks", proficiency: 3 },
      { name: "AutoCAD", proficiency: 3 },
      { name: "3D Printing", proficiency: 5 },
    ],
  },
  {
    id: "6",
    name: "DevOps & Tools",
    skills: [
      { name: "Git", proficiency: 4 },
      { name: "Docker", proficiency: 4 },
      { name: "Linux", proficiency: 5 },
      { name: "VS Code", proficiency: 5 },
    ],
  },
];

export const achievements = [
  {
    id: "1",
    title: "Elsevier Publication",
    date_achieved: "2024-01-01",
    issuer: "Elsevier",
    description:
      "Published research paper on integrating robotic surgery and pharmacotherapy in Elsevier-hosted journal.",
    category: "recognition" as const,
    display_order: 1,
    is_published: true,
  },
  {
    id: "2",
    title: "Smart India Hackathon Participant",
    date_achieved: "2024-03-01",
    issuer: "Government of India",
    description:
      "Participated in Smart India Hackathon, India's largest open innovation model.",
    category: "competition" as const,
    display_order: 2,
    is_published: true,
  },
];

export const publications = [
  {
    id: "1",
    title: "Integration of Robotic Surgery and Pharmacotherapy",
    authors: ["Prudhvi Raj Chalapaka", "et al."],
    journal_name: "Elsevier Journal",
    publisher: "Elsevier",
    publication_date: "2024-01-01",
    doi: null,
    url: null,
    abstract:
      "Research paper exploring the integration of robotic surgical systems with pharmacotherapy for enhanced patient outcomes.",
    keywords: ["Robotic Surgery", "Pharmacotherapy", "Medical Robotics"],
    publication_type: "journal" as const,
    display_order: 1,
    is_published: true,
  },
];

export const floatingStickers = [
  { text: "#ROS2", emoji: "🤖", position: { top: "15%", left: "10%" } },
  { text: "#AI", emoji: "🧠", position: { top: "20%", right: "15%" } },
  { text: "#Embedded", emoji: "⚡", position: { top: "35%", left: "5%" } },
  { text: "#PLC", emoji: "🔧", position: { top: "50%", left: "8%" } },
  { text: "#Vision", emoji: "👁️", position: { top: "45%", right: "10%" } },
  { text: "#Debugging", emoji: "🐛", position: { bottom: "25%", left: "12%" } },
  { text: "#Gazebo", emoji: "🌐", position: { bottom: "20%", right: "12%" } },
];
