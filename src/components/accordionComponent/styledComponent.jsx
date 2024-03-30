import styled from "styled-components";
import Accordion from "@mui/material/Accordion";

export const AccordionBgContainer = styled(Accordion)`
    margin-bottom: 1.2em;
    &.MuiAccordion-root {
        background-color: var(--theme-container-bg-color);
        color: var(--theme-text-color);
        box-shadow: none;
        max-width: 31rem;
    }
    & .MuiAccordionSummary-expandIconWrapper {
        color: var(--theme-text-color);
    }
    & .MuiAccordionDetails-root {
        padding: 0;
        padding-top: 1em;
        background-color: ${({ theme }) =>
            theme.isLightTheme ? "rgb(255, 247, 252)" : "rgb(39, 40, 41)"};
    }
`;

export const TechnologiesBgContainer = styled.ul`
    padding: 0;
    list-style-type: none;
    display: flex;
    gap: 1em;
    flex-flow: row wrap;
`;

export const TechnologyItem = styled.li`
    text-transform: capitalize;
    background-color: ${({ theme }) =>
        theme.isLightTheme
            ? "rgba(46, 175, 255, 0.7)"
            : "rgb(124, 45, 18, 0.3)"};
    color: ${({ theme }) =>
        theme.isLightTheme ? "white" : "rgb(251, 146, 60, 1)"};
    font-weight: 600;
    border-radius: 0.6rem;
    padding: 0.7em 1em;
    font-size: clamp(0.1rem, 1vw + 0.6rem, 1rem);
    display: flex;
    align-items: center;
    gap: 0.3em;
    transition: background-color 0.18s linear;
    &:hover {
        background-color: ${({ theme }) =>
            theme.isLightTheme
                ? "rgba(46, 175, 255, 0.9)"
                : "rgba(124, 45, 18, 0.65)"};
    }
`;
