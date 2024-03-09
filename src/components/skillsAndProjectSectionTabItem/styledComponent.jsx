import styled from "styled-components";

const primaryColor = "var(--theme-primary-color)";

export const SkillsAndProjectsTabItemBgContainer = styled.li`
    background-color: ${({ isActive }) =>
        isActive
            ? `rgba(${primaryColor}, 0.8)`
            : "var(--theme-container-bg-color)"};
    text-align: center;
    flex: 1 0 auto;
    width: 30%;
    max-width: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 10rem;
    @media (min-width: 800px) {
        width: 100%;
        max-width: none;
    }
`;
export const tabBtn = styled.button`
    cursor: pointer;
    padding: 1em;
    border: none;
    width: 100%;
    height: 100%;
    background-color: transparent;
    color: var(--theme-primary-text-color);
`;
