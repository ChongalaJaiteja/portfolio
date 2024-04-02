import { v4 as uuidv4 } from "uuid";
import * as StyledComponent from "./constantsStyledComponent";
import Home from "../components/home";
import About from "../components/about";
import Qualification from "../components/qualification";
import SkillsAndProjects from "../components/skillsAndProjects";
import Experience from "../components/experience";
import CodingProfiles from "../components/codingProfiles";
import Contact from "../components/contact";
import { FaGithub } from "react-icons/fa";
import { IoPlayCircle } from "react-icons/io5";
import { FiLink } from "react-icons/fi";
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
        name: "Coding Profiles",
        route: "coding-profiles",
        component: CodingProfiles,
    },
    {
        id: uuidv4(),
        name: "Contact",
        route: "contact",
        component: Contact,
    },
];

//About Page

export const aboutPageData = {
    profileImage: "about/profile.jpg",
    altName: "Jai Teja",
};

// Qualification Page
export const qualificationData = [
    {
        imageUrl: "qualification/nxtwave.png",
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
        imageUrl: "qualification/gmrit.jpeg",
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
        imageUrl: "qualification/sriviswa.avif",
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
        imageUrl: "qualification/ravindra-bharathi-school.png",
        icon: <StyledComponent.SchoolIcon />,
        infoIcon: <StyledComponent.InfoIcon />,
        websiteUrl: "https://rbschools.in/",
        title: "Ravindra Bharathi School",
        subtitle: "Bobbili, India",
        date: "2007 - 2019 (Primary Education)",
        score: "Grade : 9.8",
        content:
            "Ravindra Bharathi School, a prestigious institution in India, offers English medium education from primary to secondary levels",
    },
];

//Skills & Project Page
export const skillsAndProjectSection = {
    devIcon: "webdev.svg",
    altName: "Dev Icon",
};

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
        image: "development/web-development/projects/web-development.jpg",
        description:
            "Web development types have been classified into front-end development, back-end development, and full-stack development. For an excellently.",
        sectionDetails: {
            skills: [
                {
                    category: "frontend development",
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
                            name: "javascript",
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
                            name: "redux toolkit",
                            icon: (
                                <i className="devicon-redux-original colored" />
                            ),
                        },
                    ],
                },
                {
                    category: "backend development",
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
                        {
                            name: "git",
                            icon: <i className="devicon-git-plain colored"></i>,
                        },

                        {
                            name: "github",
                            icon: <i className="devicon-github-original"></i>,
                        },
                        {
                            name: "npm",
                            icon: (
                                <i className="devicon-npm-original-wordmark colored"></i>
                            ),
                        },
                    ],
                },
            ],

            projects: [
                {
                    category: "frontend development",
                    projectList: [
                        {
                            projectCard: {
                                name: "emoji game",
                                image: "development/web-development/projects/frontend-development/emoji-game.png",
                            },
                            projectDetails: {
                                name: "emoji game",
                                image: [
                                    "development/web-development/projects/frontend-development/emoji-game.png",
                                ],
                                description: `
                                Introducing Emoji Game! It is a React project designed to test your memory and agility. In this game, you'll be presented with a colorful world of emojis, and your task is to quickly click on symbols that haven't been selected yet. You'll earn points for each correct selection. 
                                Matching your score with the number of emojis displayed unlocks golden coins, which can give you a second chance to play when you need it the most. The game also uses modern web technologies to provide an immersive experience. Join the fun and test your skills today!
                                    `,
                                technologies: ["ReactJs", "css"],
                                externalLinks: [
                                    {
                                        id: uuidv4(),
                                        icon: <IoPlayCircle />,
                                        name: "watch video",
                                        link: "https://youtu.be/suR4DiJk4y8",
                                    },
                                    {
                                        id: uuidv4(),
                                        icon: <FiLink />,
                                        name: "deployment link",
                                        link: "https://chongalajaiteja.github.io/emojiGame/",
                                    },

                                    {
                                        id: uuidv4(),
                                        icon: <FaGithub />,
                                        name: "source code",
                                        link: "https://github.com/ChongalaJaiteja/emojiGame",
                                    },
                                ],
                                postUrl:
                                    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7094225130330992640",
                            },
                        },

                        {
                            projectCard: {
                                name: "todos",
                                image: "development/web-development/projects/frontend-development/todos-1.png",
                            },
                            projectDetails: {
                                name: "todos",
                                image: [
                                    "development/web-development/projects/frontend-development/todos-1.png",
                                    "development/web-development/projects/frontend-development/todos-2.png",
                                    "development/web-development/projects/frontend-development/todos-3.png",
                                ],
                                description: `Introducing the Todos application, designed to simplify your task management experience! With its streamlined features, you can effortlessly create and organize your to-do list, mark tasks as completed, and easily differentiate between pending and accomplished tasks. 
                                
                                Enhance your productivity by decluttering your list with the option to delete completed items. Your data is securely stored for peace of mind, ensuring accessibility even when you're away from the website. Dive into productivity with the Todos application today!
                                    `,
                                technologies: [
                                    "html",
                                    "css",
                                    "javascript",
                                    "bootstrap",
                                ],
                                externalLinks: [
                                    {
                                        id: uuidv4(),
                                        icon: <IoPlayCircle />,
                                        name: "watch video",
                                        link: "https://youtu.be/gTTU-K_yJbY",
                                    },
                                    {
                                        id: uuidv4(),
                                        icon: <FiLink />,
                                        name: "deployment link",
                                        link: "https://chongalajaiteja.github.io/todo-application/",
                                    },

                                    {
                                        id: uuidv4(),
                                        icon: <FaGithub />,
                                        name: "source code",
                                        link: "https://github.com/ChongalaJaiteja/todo-application",
                                    },
                                ],
                                postUrl:
                                    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7078339428032679936",
                            },
                        },

                        {
                            projectCard: {
                                name: "calendar",
                                image: "development/web-development/projects/frontend-development/calendar.png",
                            },

                            projectDetails: {
                                name: "calendar",
                                image: [
                                    "development/web-development/projects/frontend-development/calendar.png",
                                ],
                                description: `Users can now navigate to a specific year and month on the shared calendar, which also displays the current date and year. Its design, characterized by simplicity and intuitiveness, enhances usability for all individuals. 
                                Whether you're scheduling events, planning tasks, or simply staying organized, this calendar offers a seamless experience for users of all levels.`,
                                technologies: ["html", "css", "javascript"],
                                externalLinks: [
                                    // {
                                    //     id: uuidv4(),
                                    //     icon: <IoPlayCircle />,
                                    //     name: "demo video",
                                    //     link: "tugvonfZmlw",
                                    // },
                                    {
                                        id: uuidv4(),
                                        icon: <FiLink />,
                                        name: "deployment link",
                                        link: "https://chongalajaiteja.github.io/dynamic-calendar/",
                                    },
                                    {
                                        id: uuidv4(),
                                        icon: <FaGithub />,
                                        name: "source code",
                                        link: "https://github.com/ChongalaJaiteja/dynamic-calendar",
                                    },
                                ],
                                postUrl:
                                    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7050294367672008704",
                            },
                        },

                        {
                            projectCard: {
                                name: "wikipedia search application",
                                image: "development/web-development/projects/frontend-development/wikipedia-search-app.png",
                            },
                            projectDetails: {
                                name: "wikipedia search application",
                                image: [
                                    "development/web-development/projects/frontend-development/wikipedia-search-app.png",
                                ],
                                description: `The Wikipedia search application allows users to access and explore a vast array of Wikipedia articles directly. With this tool, users can effortlessly search for articles on any topic available within Wikipedia's extensive database. 
                                By leveraging the Wikipedia API, the application seamlessly retrieves relevant articles based on user queries. Whether you're conducting research, seeking information, or simply satisfying your curiosity, this application provides quick and convenient access to the wealth of knowledge available on Wikipedia. Dive in and start exploring the world of information today!`,
                                technologies: ["html", "css", "javascript"],
                                externalLinks: [
                                    {
                                        id: uuidv4(),
                                        icon: <IoPlayCircle />,
                                        name: "watch video",
                                        link: "https://youtu.be/0WTmjLKMWqw",
                                    },
                                    {
                                        id: uuidv4(),
                                        icon: <FiLink />,
                                        name: "deployment link",
                                        link: "https://chongalajaiteja.github.io/wikipedia-search-application-static/",
                                    },

                                    {
                                        id: uuidv4(),
                                        icon: <FaGithub />,
                                        name: "source code",
                                        link: "https://github.com/ChongalaJaiteja/wikipedia-search-application-static",
                                    },
                                ],
                                postUrl:
                                    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7073134321099812864",
                            },
                        },
                    ],
                },
                {
                    category: "backend Development",
                    projectList: [
                        {
                            projectCard: {
                                name: "Todos api",
                                image: "development/web-development/projects/frontend-development/todos-1.png",
                            },
                            projectDetails: {
                                name: "Todos appplication",
                                image: [
                                    "development/web-development/projects/frontend-development/todos-1.png",
                                ],
                                description: `The Todos API backend project serves as a robust platform for managing tasks efficiently. Designed to provide seamless integration with frontend applications, this API enables users to create, update, retrieve, and delete tasks effortlessly. 
                                
                                With endpoints for adding new tasks, marking tasks as completed, fetching pending or completed tasks, and removing completed tasks, this API offers comprehensive functionality for organizing and maintaining to-do lists. Built with scalability and reliability in mind, the Todos API backend ensures smooth task management operations for users, empowering them to stay productive and organized in their daily lives.`,
                                technologies: [
                                    "nodejs",
                                    "express.js",
                                    "sqlite",
                                ],
                                externalLinks: [
                                    {
                                        id: uuidv4(),
                                        icon: <FaGithub />,
                                        name: "source code",
                                        link: "https://github.com/ChongalaJaiteja/todos-api",
                                    },
                                ],
                            },
                        },

                        {
                            projectCard: {
                                name: "wikipedia search application",
                                image: "development/web-development/projects/full-stack-development/wikipedia-fullstack-1.png",
                            },
                            projectDetails: {
                                name: "wikipedia search application",
                                image: [
                                    "development/web-development/projects/full-stack-development/wikipedia-fullstack-1.png",
                                ],
                                description: `Introducing our Wikipedia Search Application, featuring robust features such as user authentication and seamless integration with the Wikipedia API for accessing articles and images, alongside an intuitive history tracking system. Users can effortlessly explore a vast array of Wikipedia articles and securely log in to personalize their experience.
                                    Upon logging in, users can save favorite articles, track search history, and revisit previously visited Wikipedia pages with ease. Leveraging the power of the Wikipedia API, our application provides comprehensive search functionality, retrieving relevant articles and accompanying images based on user queries. Whether for research, learning, or curiosity, our user-friendly interface ensures a seamless browsing experience, backed by secure authentication and convenient history tracking features. Dive into the world of knowledge confidently with our Wikipedia Search Application!`,
                                technologies: [
                                    "nodejs",
                                    "express.js",
                                    "sqlite",
                                ],
                                externalLinks: [
                                    {
                                        id: uuidv4(),
                                        icon: <FaGithub />,
                                        name: "source code",
                                        link: "https://github.com/ChongalaJaiteja/wikipedia-search-app-backend",
                                    },
                                ],
                            },
                        },
                    ],
                },

                {
                    category: "full stack development",
                    projectList: [
                        {
                            projectCard: {
                                name: "wikipedia search application",
                                image: "development/web-development/projects/full-stack-development/wikipedia-fullstack-1.png",
                            },
                            projectDetails: {
                                name: "wikipedia search application",
                                image: [
                                    "development/web-development/projects/full-stack-development/wikipedia-fullstack-1.png",
                                    "development/web-development/projects/full-stack-development/wikipedia-fullstack-2.png",
                                    "development/web-development/projects/full-stack-development/wikipedia-fullstack-3.png",
                                    "development/web-development/projects/full-stack-development/wikipedia-fullstack-4.png",
                                    "development/web-development/projects/full-stack-development/wikipedia-fullstack-5.png",
                                    "development/web-development/projects/full-stack-development/wikipedia-fullstack-6.png",
                                ],
                                description: `Introducing the Wikipedia Search Application, a full-stack project designed to revolutionize your research and sharing experience.

                                    Navigating and sharing information from Wikipedia can be cumbersome, leading to inefficiencies in the learning process due to a lack of user-friendly interfaces and integrated sharing features.

                                    The Wikipedia Search Application addresses these challenges by providing a comprehensive solution to streamline your Wikipedia exploration. Easily navigate Wikipedia articles with an intuitive interface. Enhance your learning experience by exploring related images in a dedicated 'Image' tab. Share Wikipedia URLs seamlessly across multiple platforms like WhatsApp, Facebook, Twitter, and email. Enjoy a user-friendly experience with pagination for both article and image search tabs.

                                    With user authentication, your clicked URLs and visited Wikipedia pages are saved for easy reference. Customize your experience with light 🌞 and dark 🌙 modes. Easily customize your credentials for a more personalized journey. Review your search history in chronological order, with the option to delete entries for a clutter-free experience.
                                    `,
                                technologies: [
                                    "ReactJs",
                                    "NodeJs",
                                    "express",
                                    "mui",
                                    "sqlite",
                                    "StyledComponents",
                                ],
                                externalLinks: [
                                    {
                                        id: uuidv4(),
                                        icon: <IoPlayCircle />,
                                        name: "watch video",
                                        link: "https://youtu.be/tugvonfZmlw",
                                    },
                                    {
                                        id: uuidv4(),
                                        icon: <FiLink />,
                                        name: "deployment link",
                                        link: "https://chongalajaiteja.github.io/wikipedia-search-app/",
                                    },
                                    {
                                        id: uuidv4(),
                                        icon: <FaGithub />,
                                        name: "source code",
                                        link: "https://github.com/ChongalaJaiteja/wikipedia-search-app",
                                    },
                                ],
                                postUrl:
                                    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7134396712307068928",
                            },
                        },
                    ],
                },
            ],
            certifications: [
                {
                    category: "frontend development",
                    certificationsList: [
                        {
                            id: uuidv4(),
                            name: "Build Your Own Static Website",
                            image: "development/web-development/certifications/static-website-nxtwave.png",
                            institute: "nxtwave",
                            skills: ["html", "css", "bootstrap"],
                            link: {
                                type: "url",
                                source: "https://certificates.ccbp.in/academy/static-website?id=UQMCYATAIT",
                            },
                        },
                        {
                            id: uuidv4(),
                            name: "Build Your Own Responsive Website",
                            image: "development/web-development/certifications/responsive-website-nxtwave.png",
                            institute: "nxtwave",
                            skills: ["bootstrap", "flexbox"],
                            link: {
                                type: "url",
                                source: "https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=GBEUWPSGEA",
                            },
                        },
                        {
                            id: uuidv4(),
                            name: "JavaScript Essentials",
                            image: "development/web-development/certifications/javascript-essentials-nxtwave.png",
                            institute: "nxtwave",
                            skills: ["javascript"],
                            link: {
                                type: "url",
                                source: "https://certificates.ccbp.in/academy/javascript-essentials?id=WTDGWVOTGG",
                            },
                        },
                        {
                            id: uuidv4(),
                            name: "Introduction to Web Development with HTML, CSS, JavaScript",
                            image: "development/web-development/certifications/introduction-to-web-development-with-html-css-javascript-ibm.png",
                            institute: "coursera",
                            skills: ["html", "css", "javascript"],
                            link: {
                                type: "url",
                                source: "https://www.coursera.org/account/accomplishments/verify/Q6HJTLGRS46G",
                            },
                        },
                        {
                            id: uuidv4(),
                            name: "Build Your Own Dynamic Web Application",
                            image: "development/web-development/certifications/dynamic-website-nxtwave.png",
                            institute: "nxtwave",
                            skills: ["javascript"],
                            link: {
                                type: "url",
                                source: "https://certificates.ccbp.in/academy/dynamic-web-application?id=LZVVDYXBSR",
                            },
                        },

                        {
                            id: uuidv4(),
                            name: "Responsive Web Design using Flexbox",
                            image: "development/web-development/certifications/responsive-web-design-using-flexbox-nxtwave.png",
                            institute: "nxtwave",
                            skills: ["flexbox"],
                            link: {
                                type: "url",
                                source: "https://certificates.ccbp.in/academy/responsive-web-design-using-flexbox?id=CMVEJPTGTR",
                            },
                        },

                        {
                            id: uuidv4(),
                            name: "react js",
                            image: "development/web-development/certifications/reactjs-nxtwave.png",
                            institute: "nxtwave",
                            skills: ["reactjs"],
                            link: {
                                type: "url",
                                source: "https://certificates.ccbp.in/academy/react-js?id=LQTPLBYEQU",
                            },
                        },

                        {
                            id: uuidv4(),
                            name: "Developing Front-End Apps with React",
                            image: "development/web-development/certifications/reactjs-ibm.png",
                            institute: "coursera",
                            skills: ["reactjs"],
                            link: {
                                type: "url",
                                source: "https://www.coursera.org/account/accomplishments/verify/ALRQYC62VQX4",
                            },
                        },
                    ],
                },
                {
                    category: "backend development",
                    certificationsList: [
                        {
                            id: uuidv4(),
                            name: "Node.js",
                            image: "development/web-development/certifications/nodejs-nxtwave.png",
                            institute: "nxtwave",
                            skills: ["nodejs"],
                            link: {
                                type: "url",
                                source: "https://certificates.ccbp.in/academy/node-js?id=XJKWJWPMEV",
                            },
                        },
                        {
                            id: uuidv4(),
                            name: "introduction to databases",
                            image: "development/web-development/certifications/introduction-to-databases-nxtwave.png",
                            institute: "nxtwave",
                            skills: ["sql"],
                            link: {
                                type: "url",
                                source: "https://certificates.ccbp.in/academy/introduction-to-databases?id=YRTXIPBKWQ",
                            },
                        },
                        {
                            id: uuidv4(),
                            name: "SQL (Basic)",
                            image: "development/web-development/certifications/sql(basic)-hackerrank.png",
                            institute: "hackerrank",
                            skills: ["sql"],
                            link: {
                                type: "url",
                                source: "https://www.hackerrank.com/certificates/4e0a56751eef",
                            },
                        },
                        {
                            id: uuidv4(),
                            name: "SQL (Intermediate)",
                            image: "development/web-development/certifications/sql(basic)-hackerrank.png",
                            institute: "hackerrank",
                            skills: ["sql"],
                            link: {
                                type: "url",
                                source: "https://www.hackerrank.com/certificates/3359ea3c9060",
                            },
                        },
                    ],
                },
            ],
        },
    },
];

export const programming = {
    skills: [
        {
            skillSet: [
                {
                    name: "c",
                    icon: <i className="devicon-c-plain colored"></i>,
                },
                {
                    name: "c++",
                    icon: <i className="devicon-cplusplus-plain colored"></i>,
                },
                {
                    name: "python",
                    icon: <i className="devicon-python-plain"></i>,
                },

                {
                    name: "java",
                    icon: <i className="devicon-java-plain colored"></i>,
                },

                {
                    name: "linux",
                    icon: <i className="devicon-linux-plain"></i>,
                },
                {
                    name: "ubuntu",
                    icon: <i className="devicon-ubuntu-plain colored"></i>,
                },
            ],
        },
    ],

    projects: [
        {
            projectList: [
                {
                    projectCard: {
                        name: "banking management system",
                        image: "programming/projects/banking-management-system.png",
                    },

                    projectDetails: {
                        name: "banking management system",
                        image: [
                            "programming/projects/banking-management-system.png",
                        ],
                        description: `The Banking Management System developed in C language provides various functionalities to manage accounts. The system uses file operations for data storage and retrieval, ensuring persistent data storage across sessions. 
                        Key features include creating new accounts, removing existing accounts, performing transactions, updating account details, viewing account information, checking balance, and exiting the system. The system ensures data integrity and security by leveraging file operations and provides a user-friendly interface.
                        `,
                        technologies: ["c programming"],
                        externalLinks: [
                            {
                                icon: <FaGithub />,
                                name: "source code",
                                link: "https://github.com/ChongalaJaiteja/C-Bank-Managment-System",
                            },
                        ],
                    },
                },
            ],
        },
    ],

    certifications: [
        {
            certificationsList: [
                {
                    id: uuidv4(),
                    name: "c++ programming",
                    image: "programming/certifications/c++-programming-gfg.png",
                    institute: "Geeks for Geeks",
                    skills: ["c++"],
                    link: {
                        type: "url",
                        source: "https://media.geeksforgeeks.org/courses/certificates/b2358c35afa95286fae7605c88225285.pdf",
                    },
                },
                //TODO: adding certificate link
                // {
                //     id: uuidv4(),
                //     name: "Master C++ Programming-Complete Beginner to Advanced",
                //     image: "programming/certifications/programming-foundations-with-python-nxtwave.png",
                //     institute: "Geeks for Geeks",
                //     skills: ["c++", "c++ stl"],
                //     link: {
                //         type: "url",
                //         source: "https://certificates.ccbp.in/academy/programming-foundations-with-python?id=MAIGNSTXKU",
                //     },
                // },
                {
                    id: uuidv4(),
                    name: "Programming in Python",
                    image: "programming/certifications/programming-in-python-meta.png",
                    institute: "meta",
                    skills: ["python"],
                    link: {
                        type: "url",
                        source: "https://www.coursera.org/account/accomplishments/certificate/8HQMXDQCMQBK",
                    },
                },
                {
                    id: uuidv4(),
                    name: "Programming Foundations with Python",
                    image: "programming/certifications/programming-foundations-with-python-nxtwave.png",
                    institute: "nxtwave",
                    skills: ["python"],
                    link: {
                        type: "url",
                        source: "https://certificates.ccbp.in/academy/programming-foundations-with-python?id=MAIGNSTXKU",
                    },
                },
            ],
        },
    ],
};

export const getDevelopmentPageData = (id) => {
    return development.find((domain) => domain.id == id);
};

//experience Page
export const experienceList = [
    {
        id: uuidv4(),
        imageUrl: "experience/coding_club_gmrit_logo.jpeg",
        icon: <StyledComponent.DevelopmentIcon />,
        infoIcon: <StyledComponent.InfoIcon />,
        navIcon: <StyledComponent.NavLinkIcon />,
        experienceLink: "https://gmrit.edu.in/studentActivities/codingClub.php",
        title: "Technical coordinator",
        location: "GMRIT",
        date: "2022 - present",
        content:
            "I organized coding events and assisted students in enhancing their coding skills. Assisting students in enhancing their coding abilities and organizing coding events felt fulfilling.",
        skills: ["leadership", "teamwork", "communication", "problem solving"],
    },
    {
        id: uuidv4(),
        imageUrl: "experience/nxtwave.png",
        icon: <StyledComponent.TeachingAssistantIcon />,
        infoIcon: <StyledComponent.InfoIcon />,
        navIcon: <StyledComponent.NavLinkIcon />,
        experienceLink:
            "https://portal.ccbp.in/teaching-assistant-profile?uid=jai-teja",
        title: "Teaching Assistant",
        location: "On Site",
        date: "2021 - present",
        content:
            "As a Teaching Assistant at NXTWave Academy, I helped students with JavaScript and Python questions, encouraging growth and providing practical examples for success.",
        skills: ["JavaScript", "Python"],
    },
];

export const codingProfiles = [
    {
        name: "leetcode",
        themeColor: "rgb(254, 161, 22)",
        link: "https://leetcode.com/jaiteja123/",
        icon: <StyledComponent.LeetcodeIcon />,
    },
    {
        name: "code chef",
        themeColor: "rgb(223, 168, 120)",
        link: "https://www.codechef.com/users/jaiteja123",
        icon: <StyledComponent.CodeChefIcon />,
    },

    {
        name: "hacker rank",
        themeColor: "rgb(6, 137, 50)",
        link: "https://www.hackerrank.com/profile/chongalateja1234",
        icon: <StyledComponent.HackerRankIcon />,
    },
    {
        name: "coding ninjas",
        themeColor: "rgb(250, 115, 40)",
        link: "https://www.naukri.com/code360/profile/93385171-aea5-4e8b-83c8-1a1e3aca3e0e",
        icon: <StyledComponent.CodingNinjasIcon />,
    },
    {
        name: "geeks for geeks",
        themeColor: "rgb(47, 141, 70)",
        link: "https://auth.geeksforgeeks.org/user/chongala_jaiteja1234",
        icon: <StyledComponent.GeeksForGeeksIcon />,
    },
];
