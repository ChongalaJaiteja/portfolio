import styled from "styled-components";

export const SkillAndProjectsCardBgContainer = styled.div`
    border-radius: 15px;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    background-color: var(--theme-container-bg-color);
    border: 2px solid var(--theme-divide-line-color);
    overflow: hidden;
    @media (min-width: 800px) {
        flex-direction: row;
        max-height: 15rem;
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
    &::-webkit-scrollbar {
        display: none !important;
    }
    @media (min-width: 800px) {
        max-width: 13rem;
        flex-direction: column;
        justify-content: flex-start;
        flex: 1 1 20%;
    }
`;

export const SkillAndProjectsTabContentBgContainer = styled.div`
    /* outline: auto; */
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    overflow: auto;
    padding-block: clamp(0.1em, 1vw + 2em, 3em) clamp(0.1em, 1vw + 1.5em, 2.7em);
    padding-inline: clamp(0.1em, 1vw + 1em, 2.5em);
    scrollbar-width: none; /* For Firefox */
    -ms-overflow-style: none; /* For Internet Explorer 10+ */
    &::-webkit-scrollbar {
        display: none !important;
    }
    @media (min-width: 800px) {
        padding-block: clamp(0.1em, 1vw + 1.5em, 2.7em);
        flex: 1 1 80%;
    }
`;
