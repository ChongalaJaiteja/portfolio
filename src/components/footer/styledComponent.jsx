import styled, { keyframes } from "styled-components";
import {
    AboutPageBgContainer,
    AboutPageSectionBodyContainer,
} from "../about/styledComponent";
import { RiReactjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiStyledcomponents } from "react-icons/si";
import { motion } from "framer-motion";

export const FooterBgContainer = styled(AboutPageBgContainer)``;

export const FooterPageSectionBodyContainer = styled(
    AboutPageSectionBodyContainer
)``;

export const FooterContentBgContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 3.1em;
`;

export const ThankYouNoteBgContainer = styled(motion.div)`
    text-align: center;
`;

export const ThankYouHeading = styled.h4`
    color: ${({ theme }) => theme.secondText};
    font-weight: normal;
    font-size: clamp(0.2rem, 1vw + 0.45rem, 1rem);
    text-transform: uppercase;
`;

export const MySignature = styled.h1`
    color: ${({ theme }) => theme.primaryAccentColor};
    font-family: "Dancing Script", cursive;
    font-size: clamp(0.3rem, 1vw + 3rem, 5rem);
`;

export const MadeWithBgContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 0.7em;
    text-align: center;
`;

export const MadeWithHeading = styled(ThankYouHeading)``;

export const TechnologiesUsedBgContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: clamp(0.3em, 1vw + 1.7em, 5em);
    cursor: pointer;
`;

const Rotate = keyframes`
from {
    rotate: 0deg;
} to {
    rotate: 360deg;
}
`;

export const ReactJsIcon = styled(RiReactjsFill)`
    font-size: clamp(0.3rem, 1vw + 1.8rem, 4rem);
    animation: ${Rotate} 5s linear infinite;
`;

export const FrameMotionIcon = styled(TbBrandFramerMotion)`
    font-size: clamp(0.3rem, 1vw + 1.8rem, 4rem);
`;

export const StyledComponentIcon = styled(SiStyledcomponents)`
    font-size: clamp(0.3rem, 1vw + 1.8rem, 4rem);
`;

export const PageInstructionsBgContainer = styled.div``;

export const InstructionDescription = styled.p`
    color: ${({ theme }) => theme.secondText};
`;

export const HeartSymbol = styled.span`
    color: red;
`;