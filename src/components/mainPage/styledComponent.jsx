import { FaArrowCircleUp } from "react-icons/fa";
import styled from "styled-components";

export const MoveTopIcon = styled(FaArrowCircleUp)`
    font-size: clamp(0.5rem, 1vw + 1.5rem, 2rem);
    position: fixed;
    cursor: pointer;
    bottom: 5%;
    color: ${({ theme }) => (theme.isLightTheme ? "black" : "white")};
    z-index: 300;
    right: 25px;
`;
