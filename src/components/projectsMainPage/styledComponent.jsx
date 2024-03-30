import styled from "styled-components";
import {
    AboutPageBgContainer,
    AboutPageSectionBodyContainer,
} from "../about/styledComponent";

export const ProjectMainPageBgContainer = styled(AboutPageBgContainer)``;

export const ProjectMainPageBodyContainer = styled(
    AboutPageSectionBodyContainer
)``;

export const ProjectMainPagContentBgContainer = styled.div`
    min-height: 100vh;
    outline: auto;
    padding: 1em;
`;

export const ProjectBgContainer = styled.div`
    /* outline: auto; */
    display: flex;
    flex-direction: column;
    --gap: 1em;
    gap: var(--gap);
    @media (min-width: 700px) {
        flex-direction: row;
        align-items: flex-start;
    }
    & > * {
        outline: auto;
    }
`;
