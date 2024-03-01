import styled, { css } from "styled-components";
import { FaUserGraduate } from "react-icons/fa6";
import { FaSchoolFlag } from "react-icons/fa6";
import { LuSchool2 } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";


const IconColor = css`
    color: white;
`;
const customeIcon = css``;

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
