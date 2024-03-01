import styled from "styled-components";

export const ExperienceCardSkillItem = styled.li`
    font-size: clamp(0.1rem, 1vw + 0.35rem, 0.8rem);
    background-color: ${({ theme }) => theme.primaryAccentColor};
    border-radius: 20px;
    padding: 0.3em 0.5em;
`;
