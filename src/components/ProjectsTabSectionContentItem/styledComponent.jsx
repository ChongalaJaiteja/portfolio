import styled from "styled-components";
import { motion } from "framer-motion";
import { getImageUrl } from "../../utils/imageUtil";

export const ProjectItem = styled(motion.li)`
    background-image: ${({ bgImage }) => `url(${getImageUrl(bgImage)})`};
    background-size: cover;
    object-fit: center;
    outline: auto;
    width: 100%;
    height: 40vh;
    /* display: flex;
    align-items: center;
    gap: 0.6em;
    border: 1px solid var(--theme-divide-line-color);
    border-radius: 0.7rem;
    cursor: pointer;
    --pd-l: clamp(0.1em, 1vw + 1em, 1.35em);
    --gap: 1em;
    padding-left: var(--pd-l);
    padding-block: 0.22em;
    flex: 1 1 100%;
    @media (min-width: 350px) {
        flex: 0 1 calc(50% - (var(--gap) + var(--pd-l)));
    }
    @media (min-width: 560px) {
        flex: 0 1 calc(33.3% - (var(--gap) + var(--pd-l)));
    }
    @media (min-width: 960px) {
        flex: 0 1 calc(25% - (var(--gap) + var(--pd-l)));
    }
    @media (min-width: 1300px) {
        flex: 0 1 calc(20% - (var(--gap) + var(--pd-l)));
    }
    @media (min-width: 1900px) {
        flex: 0 1 calc(16.6% - (var(--gap) + var(--pd-l)));
    } */
`;

export const ProjectItemIconBgContainer = styled.div`
    font-size: clamp(0.2rem, 1vw + 1.8rem, 2.5rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* outline: auto; */
`;

export const ProjectItemName = styled.p`
    font-size: clamp(0.2rem, 1vw + 0.71rem, 1.2rem);
    text-transform: capitalize;
    padding-right: 0.4em;
`;
