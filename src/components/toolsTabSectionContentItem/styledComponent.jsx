import styled from "styled-components";
import { motion } from "framer-motion";

export const ToolItem = styled(motion.li)`
    display: flex;
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
    box-shadow: var(--theme-box-shadow);
    @media (min-width: 465px) {
        flex: 0 1 calc(50% - (var(--gap) + var(--pd-l)));
    }
    @media (min-width: 609px) {
        flex: 0 1 calc(33.33% - (var(--gap) + var(--pd-l)));
    }
    @media (min-width: 1115px) {
        flex: 0 1 calc(25% - (var(--gap) + var(--pd-l)));
    }
    @media (min-width: 1500px) {
        flex: 0 1 calc(20% - (var(--gap) + var(--pd-l)));
    }
    @media (min-width: 1850px) {
        flex: 0 1 calc(16.6% - (var(--gap) + var(--pd-l)));
    }
`;

export const ToolItemIconBgContainer = styled.div`
    font-size: clamp(0.2rem, 1vw + 1.8rem, 2.5rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* outline: auto; */
`;

export const ToolItemName = styled.p`
    font-size: clamp(0.2rem, 1vw + 0.71rem, 1.2rem);
    text-transform: capitalize;
    padding-right: 0.4em;
`;
