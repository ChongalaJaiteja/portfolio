import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectPostsBgContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 1em;
    @media (min-width: 700px) {
        flex: 1 1 calc(45% - var(--gap));
    }
`;

export const ProjectImageContainer = styled.div`
    display: none;
    width: 100%;
    @media (min-width: 700px) {
        display: block;
    }
`;

export const ProjectPostBgContainerSm = styled.div`
    @media (min-width: 700px) {
        display: none;
    }
`;

export const ProjectPostBgContainerSmMainHeading = styled.h2`
    margin-bottom: 1em;
    text-transform: capitalize;
`;

export const IframeProjectPost = styled.iframe`
    width: 100%;
    border-radius: 0.6rem;
    box-shadow: var(--theme-box-shadow);
`;

export const ProjectPostBgContainerLg = styled.div`
    display: none;
    @media (min-width: 700px) {
        display: block;
    }
`;
