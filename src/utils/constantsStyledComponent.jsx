import styled, { css } from "styled-components";
import { FaUserGraduate } from "react-icons/fa6";
import { FaSchoolFlag } from "react-icons/fa6";
import { LuSchool2 } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiGeeksforgeeks } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiCodechef } from "react-icons/si";
import { SiHackerrank } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";

import {
    faStackOverflow,
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const IconColor = css`
    color: white;
`;
const customeIcon = css``;

export const StackOverFlowIcon = styled(FontAwesomeIcon).attrs(() => ({
    icon: faStackOverflow,
}))`
    color: #ffd43b;
    font-size: clamp(0.2rem, 1vw + 1.6rem, 2.2rem);
    border-radius: 10px;
    padding: 0.22em 0.32em;
    background-color: white;
    border: 1px solid transparent;
    border-color: ${({ theme }) =>
        theme.isLightTheme ? "var(--theme-divide-line-color)" : "none"};
    box-shadow: none;
    transition: box-shadow 0.26s linear;
    &:hover {
        box-shadow: var(--theme-box-shadow);
    }
`;

export const GithubIcon = styled(StackOverFlowIcon).attrs(() => ({
    icon: faGithub,
}))`
    background-color: white;
    color: black;
    border-radius: 10px;
    padding: 0.22em;
`;

export const LinkedInIcon = styled(StackOverFlowIcon).attrs(() => ({
    icon: faLinkedin,
}))`
    color: white;
    background-color: rgb(19, 132, 223);
    border-radius: 10px;
    padding: 0.22em;
`;

export const EmailIcon = styled(StackOverFlowIcon).attrs(() => ({
    icon: faEnvelope,
}))`
    color: white;
    background-color: grey;
    border-radius: 10px;
    padding: 0.22em;
`;

export const GraduateIcon = styled(FaUserGraduate)`
    ${IconColor};
`;

export const SchoolIcon = styled(FaSchoolFlag)`
    ${IconColor};
`;

export const CollegeIcon = styled(LuSchool2)`
    ${IconColor};
`;
export const DevelopmentIcon = styled(FaLaptopCode)`
    font-size: clamp(0.4rem, 1vw + 1.3rem, 1.8rem);
`;

export const ProgrammingIcon = styled(FaCode)`
    font-size: clamp(0.4rem, 1vw + 1.3rem, 1.8rem);
`;

export const InfoIcon = styled(IoInformationCircle)`
    font-size: clamp(0.1rem, 1vw + 0.72rem, 1.5rem);
`;

export const TeachingAssistantIcon = styled(FaChalkboardTeacher)`
    font-size: clamp(0.1rem, 1vw + 0.72rem, 1.5rem);
`;

export const NavLinkIcon = styled(FaExternalLinkAlt)`
    font-size: clamp(0.1em, 1vw + 0.6em, 1em);
`;

export const GeeksForGeeksIcon = styled(SiGeeksforgeeks)`
    font-size: clamp(0.4rem, 1vw + 1.3rem, 1.8rem);
`;

export const LeetcodeIcon = styled(GeeksForGeeksIcon).attrs({
    as: TbBrandLeetcode,
})``;

export const CodeChefIcon = styled(GeeksForGeeksIcon).attrs({
    as: SiCodechef,
})``;

export const HackerRankIcon = styled(GeeksForGeeksIcon).attrs({
    as: SiHackerrank,
})``;

export const CodingNinjasIcon = styled(GeeksForGeeksIcon).attrs({
    as: SiCodingninjas,
})``;
