import styled from "styled-components";

export const ContactListItem = styled.li`
    transition: transform 0.27s linear;
    &:hover {
        transform: scale(1.1);
    }
`;

export const ContactListItemLink = styled.a`
    text-decoration: none;
`;

export const ContactListItemImg = styled.img`
    width: clamp(0.5rem, 1vw + 1.67rem, 2.7rem);
`;
