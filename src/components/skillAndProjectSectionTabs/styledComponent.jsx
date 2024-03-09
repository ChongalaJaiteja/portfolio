import styled from "styled-components";

export const SkillAndProjectsCardBgContainer = styled.div`
    border-radius: 15px;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    border: 2px solid var(--theme-divide-line-color);
    overflow: hidden;
    @media (min-width: 800px) {
        flex-direction: row;
    }
`;

export const SkillAndProjectsTabsBgContainer = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    overflow: auto;
    width: 100%;
    scrollbar-width: none; /* For Firefox */
    -ms-overflow-style: none; /* For Internet Explorer 10+ */
    @media (min-width: 800px) {
        max-width: 13rem;
        flex-direction: column;
        justify-content: flex-start;
        flex: 1 1 20%;
    }

    &::-webkit-scrollbar {
        display: none !important;
    }
`;

export const SkillAndProjectsTabContentBgContainer = styled.div`
    padding: 1em;
    @media (min-width: 800px) {
        flex: 1 1 80%;
    }
`;
