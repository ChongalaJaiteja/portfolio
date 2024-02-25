import { v4 as uuidv4 } from "uuid";
import * as StyledComponent from "./constantsStyledComponent";
import Home from "../components/home";
import About from "../components/about";
import Qualification from "../components/qualification";
import SkillsAndProjects from "../components/skillsAndProjects";
//Home page

export const contactLinks = [
    {
        id: uuidv4(),
        name: "Stack Overflow",
        url: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/40/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png",
        link: "https://stackoverflow.com/users/18161395/jai-teja-chongala",
    },
    {
        id: uuidv4(),
        name: "Github",
        url: "https://img.icons8.com/doodle/40/000000/github--v1.png",
        link: "https://github.com/ChongalaJaiteja",
    },
    {
        id: uuidv4(),
        name: "LinkedIn",
        url: "https://img.icons8.com/doodle/40/000000/linkedin--v2.png",
        link: "https://www.linkedin.com/in/jai-teja-chongala/",
    },
];

export const navLinkOptions = [
    {
        id: uuidv4(),
        name: "Home",
        route: "home",
        component: Home,
    },
    {
        id: uuidv4(),
        name: "About",
        route: "about",
        component: About,
    },
    {
        id: uuidv4(),
        name: "Qualification",
        route: "qualification",
        component: Qualification,
    },
    {
        id: uuidv4(),
        name: "Skills & Projects",
        route: "skills-projects",
        component: SkillsAndProjects,
    },
    // {
    //     id: uuidv4(),
    //     name: "Experience",
    //     route: "experience",
    //     component: SkillsAndProjects,
    // },
    // {
    //     id: uuidv4(),
    //     name: "Contact",
    //     route: "contact",
    //     component: SkillsAndProjects,
    // },
];

// About Page

export const aboutMe = `os suscipit! Temporibus illum sit saepe sequi ipsum.Perferendis, nostrum. Numquam quisquam neque labore nulla
distinctio nihil est ad, quasi voluptas minima corrupti,
velit culpa quam. Beatae ducimus illum veritatis ipsam fuga
animi officia modi, eius cum, consequuntur corrupti nihil!
Obcaecati quidem harum quisquam ipsam numquam laborum
blanditiis explicabo adipisci nam deserunt amet ea corrupti
debitis deleniti, dolores aspernatur quos, quis nobis nihil`;

// Qualification Page

export const qualificationData = [
    {
        id: uuidv4(),
        imageUrl: "/nxtwave.png",
        icon: <StyledComponent.GraduateIcon />,
        title: "Fellow at NxtWave’s CCBP 4.0 Academy",
        subtitle: "Hyderabad, India",
        date: "2021 - present (IRC Program)",
        content:
            "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
        id: uuidv4(),
        imageUrl: "/gmrit.jpeg",
        icon: <StyledComponent.GraduateIcon />,
        title: "GMR Institute of technology",
        subtitle: "Rajam, India",
        score: "CGPA : 8.79",
        date: "2021 - present (Undergraduate Degree)",
        content:
            "Creative Direction, User Experience, Visual Design, SEO, Online Marketing",
    },
    {
        id: uuidv4(),
        imageUrl: "/sriviswa.avif",
        icon: <StyledComponent.CollegeIcon />,
        title: "Sri viswa IIT and Medical academy",
        subtitle: "Visakhapatnam, India",
        date: "2019 - 2021 (Secondary Education)",
        score: "Percentage: 94.7%",
        content: "User Experience, Visual Design",
    },
    {
        id: uuidv4(),
        imageUrl: "/ravindra-bharathi-school.png",
        icon: <StyledComponent.SchoolIcon />,
        title: "Ravindra Bharathi School",
        subtitle: "Bobbili, India",
        date: "2006 - 2019 (Primary Education)",
        score: "Grade : 9.8",
        content: "User Experience, Visual Design",
    },
];

//Skills & Project Page

export const SkillsAndProjectPageCategory = [
    {
        id: uuidv4(),
        title: "Development",
        icon: <StyledComponent.DevelopmentIcon />,
        bgColor: "#9AD0C2",
    },
    {
        id: uuidv4(),
        title: "Programming",
        icon: <StyledComponent.ProgrammingIcon />,
        bgColor: "#FF8080",
    },
];
