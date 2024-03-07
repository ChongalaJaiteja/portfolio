import styled from "styled-components";
import {
    AboutPageHeading,
    AboutPageBgContainer,
    AboutPageSectionBodyContainer,
} from "../about/styledComponent";

export const DevelopmentPageBgContainer = styled(AboutPageBgContainer)``;

export const DevelopmentMainHeading = styled(AboutPageHeading)``;

export const DevelopmentSectionBodyContainer = styled(
    AboutPageSectionBodyContainer
)``;

export const DevelopmentPageContentBgContainer = styled.div`
    min-height: 77.85vh;
`;

export const DomainsListBgContainer = styled.ul`
    padding: 0;
    list-style-type: none;
    /* outline: auto; */
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    @media (min-width: 530px) {
        justify-content: flex-start;
    }
`;
