const logotext = "<Anas Almbark/>";
const meta = {
  title: "Anas Almbark",
  description:
    "I’m Anas Almbark _ Full stack devloper,currently working in Berlin",
};

const introdata = {
  title: "I’m Anas Almbark",
  animated: {
    first: "I love coding",
    second: "I code cool websites",
  },
  description:
    "Hi, I'm Anas, IT Engineering student from Syria. Passionate about software development and solving technical challenges, I am constantly improving my programming skills to build innovative and impactful projects.",
  your_img_url: "https://www2.0zz0.com/2025/02/21/17/656779580.png",
};

const dataabout = {
  title: "about my self",
  aboutme:
    "I am Anas, a Back-End developer and a student at the Faculty of Informatics Engineering, passionate about building powerful and efficient systems using PHP and Laravel. I have experience in developing web applications using Laravel PHP with MySQL, where I work on designing well-structured databases, improving performance, and implementing RESTful APIs. I also focus on applying the best security and performance practices to ensure project stability.",
};
const whyMe = [
  "I ensure writing clean and scalable code.",
  "I focus on problem analysis and finding effective solutions.",
  "I work with a team spirit to achieve the best results",
  "I have a constant passion for learning and development",
];

const skills = ["PHP", "Laravel", "Mysql"];

const lastBite = [
  "I always strive to enhance my skills and aspire to contribute to building impactful projects. I believe that continuous learning and teamwork are the keys to success .",
];

let dataportfolio = {
  projects: [],
  categories: [],
};
async function fetchData() {
  try {
    const response = await fetch(
      "http://anas-almbark-portfolio.free.nf/api/projects"
    );
    const data = await response.json();
    dataportfolio = data;
    window.dispatchEvent(new Event("portfolioDataLoaded"));
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
  }
}
fetchData();
const contactConfig = {
  YOUR_EMAIL: "anas.almbark0@gmail.com",
  YOUR_FONE: "+963 954 262 207",
  description:
    "Have a project in mind or want to connect? Fill out the form below, and let's make something great together!",
  YOUR_SERVICE_ID: "service_o8tkzwv",
  YOUR_TEMPLATE_ID: "template_t6hets8",
  YOUR_USER_ID: "OpqvI9PHGcCzy4jmC",
};

const socialprofils = {
  github: "https://github.com/Anas-Almbark",
  facebook: "https://www.facebook.com/profile.php?id=61573164578657",
  linkedin: "https://www.linkedin.com/in/anas-almbark-57b77b225/",
  twitter: "https://x.com/AnasAlmbark",
};
export {
  meta,
  dataabout,
  dataportfolio,
  whyMe,
  skills,
  lastBite,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
