import { v4 as uuidv4 } from "uuid";
import * as StyledComponent from "./constantsStyledComponent";
import Home from "../components/home";
import About from "../components/about";
import Qualification from "../components/qualification";
import SkillsAndProjects from "../components/skillsAndProjects";
import Experience from "../components/experience";
import Contact from "../components/contact";

//Home page
export const contactLinks = [
    {
        name: "Stack Overflow",
        icon: <StyledComponent.StackOverFlowIcon />,
        link: "https://stackoverflow.com/users/18161395/jai-teja-chongala",
    },
    {
        name: "Github",
        icon: <StyledComponent.GithubIcon />,
        link: "https://github.com/ChongalaJaiteja",
    },
    {
        name: "LinkedIn",
        icon: <StyledComponent.LinkedInIcon />,
        link: "https://www.linkedin.com/in/jai-teja-chongala/",
    },
    {
        name: "Email",
        icon: <StyledComponent.EmailIcon />,
        link: "mailto:chongalateja1234@gmail.com",
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
    {
        id: uuidv4(),
        name: "Experience",
        route: "experience",
        component: Experience,
    },
    {
        id: uuidv4(),
        name: "Contact",
        route: "contact",
        component: Contact,
    },
];

// Qualification Page

export const qualificationData = [
    {
        imageUrl: "nxtwave.png",
        icon: <StyledComponent.GraduateIcon />,
        infoIcon: <StyledComponent.InfoIcon />,
        websiteUrl: "https://www.ccbp.in/",
        title: "Fellow at NxtWave’s CCBP 4.0 Academy",
        subtitle: "Hyderabad, India",
        date: "2021 - present (IRC Program)",
        content:
            "NxtWave is an ed-tech startup based in Hyderabad, India that offers online training programs in Industry 4.0 careers",
    },
    {
        imageUrl: "gmrit.jpeg",
        icon: <StyledComponent.GraduateIcon />,
        infoIcon: <StyledComponent.InfoIcon />,
        websiteUrl: "https://gmrit.edu.in/",
        title: "GMR Institute of technology",
        subtitle: "Rajam, India",
        score: "CGPA : 8.79",
        date: "2021 - present (Undergraduate Degree)",
        content:
            "GMRIT is one of the most reputed college which offers admission to engineering courses in various streams",
    },
    {
        imageUrl: "sriviswa.avif",
        icon: <StyledComponent.CollegeIcon />,
        infoIcon: <StyledComponent.InfoIcon />,
        websiteUrl: "https://www.sriviswa.com/",
        title: "Sri viswa IIT and Medical academy",
        subtitle: "Visakhapatnam, India",
        date: "2019 - 2021 (Secondary Education)",
        score: "Percentage: 94.7%",
        content:
            "Sri Viswa IIT and Medical Academy is among the renowned junior colleges offering the best education",
    },
    {
        imageUrl: "ravindra-bharathi-school.png",
        icon: <StyledComponent.SchoolIcon />,
        infoIcon: <StyledComponent.InfoIcon />,
        websiteUrl: "https://rbschools.in/",
        title: "Ravindra Bharathi School",
        subtitle: "Bobbili, India",
        date: "2006 - 2019 (Primary Education)",
        score: "Grade : 9.8",
        content:
            "Ravindra Bharathi School, a prestigious institution in India, offers English medium education from primary to secondary levels",
    },
];

//Skills & Project Page

export const skillsAndProjectPageCategory = [
    {
        title: "Development",
        icon: <StyledComponent.DevelopmentIcon />,
        route: "development",
        bgColor: "#9AD0C2",
    },
    {
        title: "Programming",
        icon: <StyledComponent.ProgrammingIcon />,
        route: "programming",
        bgColor: "#FF8080",
    },
];

export const development = [
    {
        id: "web-development",
        name: "Web Development",
        image: "web-development.jpg",
        description:
            "Web development types have been classified into front-end development, back-end development, and full-stack development. For an excellently.",
        domainDetails: {
            skills: [
                {
                    category: "Frontend Development",
                    skillSet: [
                        {
                            name: "html",
                            icon: <i className="devicon-html5-plain colored" />,
                        },
                        {
                            name: "css",
                            icon: <i className="devicon-css3-plain colored" />,
                        },
                        {
                            name: "js",
                            icon: (
                                <i className="devicon-javascript-plain colored" />
                            ),
                        },
                        {
                            name: "Reactjs",
                            icon: (
                                <i className="devicon-react-original colored" />
                            ),
                        },
                        {
                            name: "bootstrap",
                            icon: (
                                <i className="devicon-bootstrap-plain colored" />
                            ),
                        },
                        {
                            name: "tailwind css",
                            icon: (
                                <i className="devicon-tailwindcss-original colored" />
                            ),
                        },
                        {
                            name: "framer motion",
                            icon: (
                                <i className="devicon-framermotion-original" />
                            ),
                        },
                        {
                            name: "redux",
                            icon: (
                                <i className="devicon-redux-original colored" />
                            ),
                        },
                    ],
                },
                {
                    category: "Backend Development",
                    skillSet: [
                        {
                            name: "nodejs",
                            icon: (
                                <i className="devicon-nodejs-plain-wordmark colored" />
                            ),
                        },
                        {
                            name: "expressjs",
                            icon: <i className="devicon-express-original" />,
                        },

                        {
                            name: "sql",
                            icon: (
                                <i className="devicon-azuresqldatabase-plain colored" />
                            ),
                        },
                        {
                            name: "mongodb",
                            icon: (
                                <i className="devicon-mongodb-plain colored" />
                            ),
                        },
                    ],
                },
                {
                    category: "Tools",
                    skillSet: [
                        {
                            name: "PostMan",
                            icon: (
                                <i className="devicon-postman-plain colored" />
                            ),
                        },
                        {
                            name: "heroku",
                            icon: (
                                <i className="devicon-heroku-original colored" />
                            ),
                        },
                    ],
                },
            ],
            projects: [
                // {
                //     name: "",
                //     thumbnailImage: "",
                //     deploymentLink: "",
                //     githubLink: "",
                //     description: "",
                // },
                {
                    name: "",
                    thumbnailImage: "",
                    deploymentLink: "",
                    githubLink: "",
                    description: "",
                },
                {
                    name: "",
                    thumbnailImage: "",
                    deploymentLink: "",
                    githubLink: "",
                    description: "",
                },
            ],
            certifications: [{}, {}, {}, {}],
        },
    },
];

export const programming = [
    {
        skills: [
            {
                id: uuidv4(),
                name: "Html",
                icon: "",
            },
        ],
        projects: [{}],
    },
];

export const getDevelopmentPageData = (id) => {
    return development.find((domain) => domain.id == id);
};

//experience Page

export const experienceList = [
    {
        id: uuidv4(),
        imageUrl: "coding_club_gmrit_logo.jpeg",
        icon: <StyledComponent.DevelopmentIcon />,
        infoIcon: <StyledComponent.InfoIcon />,
        navIcon: <StyledComponent.NavLinkIcon />,
        experienceLink: "https://gmrit.edu.in/studentActivities/codingClub.php",
        title: "Technical coordinator",
        location: "GMRIT",
        date: "2022 - present",
        content:
            "Ravindra Bharathi School, a prestigious institution in India, offers English medium education from primary to secondary levels",
        skills: ["leadership", "teamwork", "communication", "problem solving"],
    },
    {
        id: uuidv4(),
        imageUrl: "nxtwave.png",
        icon: <StyledComponent.TeachingAssistantIcon />,
        infoIcon: <StyledComponent.InfoIcon />,
        navIcon: <StyledComponent.NavLinkIcon />,
        experienceLink:
            "https://portal.ccbp.in/teaching-assistant-profile?uid=jai-teja",
        title: "Teaching Assistant",
        location: "On Site",
        date: "2021 - present",
        content:
            "Ravindra Bharathi School, a prestigious institution in India, offers English medium education from primary to secondary levels",
        skills: ["JavaScript", "Python"],
    },
];
