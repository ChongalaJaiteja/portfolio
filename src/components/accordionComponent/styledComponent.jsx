import styled from "styled-components";
import Accordion from "@mui/material/Accordion";

export const AccordionBgContainer = styled(Accordion)`
    &.MuiAccordion-root {
        background-color: var(--theme-container-bg-color);
        color: var(--theme-text-color);
    }
    & .MuiAccordionSummary-expandIconWrapper {
        color: var(--theme-text-color);
    }
    & .MuiAccordionDetails-root {
        background-color: ${({ theme }) =>
            theme.isLightTheme ? "rgb(255, 247, 252)" : "rgb(39, 40, 41)"};
    }
`;

export const TechnologiesBgContainer = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
`;

export const TechnologyItem = styled.li`
    text-transform: capitalize;
`;
