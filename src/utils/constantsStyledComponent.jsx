import styled, { css } from "styled-components";
import { FaUserGraduate } from "react-icons/fa6";
import { FaSchoolFlag } from "react-icons/fa6";
import { LuSchool2 } from "react-icons/lu";

const IconColor = css`
    color: white;
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
