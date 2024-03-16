import styled from "styled-components";

export const SkillsAndProjectsTabItemBgContainer = styled.li`
    /* background-color: ${({ isActive }) =>
        isActive ? "rgb(30 41 59 / 1)" : "var(--theme-container-bg-color)"}; */
    background-color: ${({ isLightTheme, isActive }) =>
        isActive
            ? isLightTheme
                ? "red"
                : "rgb(30 41 59 / 1)"
            : "var(--theme-container-bg-color)"};
    text-align: center;
    width: clamp(8rem, 1vw + 30%, 10rem);
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 10rem;
    &:hover {
        background-color: rgb(30 41 59 / 1);
    }
    @media (min-width: 800px) {
        width: 100%;
        max-width: none;
        /* min-height: 3rem; */
        max-height: 8.4rem;
    }
`;
export const tabBtn = styled.button`
    cursor: pointer;
    padding: clamp(0.1em, 1vw + 0.9em, 1.2em) clamp(0.1em, 1vw + 1em, 1.4em);
    border: none;
    width: 100%;
    height: 100%;
    background-color: transparent;
    color: var(--theme-primary-text-color);
    font-size: clamp(0.2rem, 1vw + 0.57rem, 1.17rem);
`;
