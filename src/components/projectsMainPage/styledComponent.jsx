import styled from "styled-components";
import {
    AboutPageBgContainer,
    AboutPageSectionBodyContainer,
} from "../about/styledComponent";

export const ProjectMainPageBgContainer = styled(AboutPageBgContainer)`
    padding-top: clamp(0.8em, 1vw + 2.6rem, 29rem);
    padding-bottom: 0;
`;

export const ProjectMainPageBodyContainer = styled(
    AboutPageSectionBodyContainer
)``;

export const ProjectMainPagContentBgContainer = styled.div`
    min-height: 100vh;
`;

export const ProjectBgContainer = styled.div`
    display: flex;
    flex-direction: column;
    --gap: 1em;
    gap: var(--gap);
    @media (min-width: 700px) {
        flex-direction: row;
        align-items: flex-start;
    }
`;
