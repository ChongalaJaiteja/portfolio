import styled from "styled-components";
import {
    AboutPageHeading,
    AboutPageBgContainer,
    AboutPageSectionBodyContainer,
} from "../about/styledComponent";

import { MdOutlineMailOutline } from "react-icons/md";

export const ContactPageBgContainer = styled(AboutPageBgContainer)``;

export const ContactPageHeading = styled(AboutPageHeading)``;

export const ContactPageSectionBodyContainer = styled(
    AboutPageSectionBodyContainer
)``;

export const ContactPageContentBgContainer = styled.div`
    /* outline: auto; */
    @media (min-width: 620px) {
        display: flex;
        /* align-items: center; */
        justify-content: space-evenly;
        gap: 1.3em;
    }
`;

export const ContactFormBgContainer = styled.form`
    /* outline: auto; */
    padding: 1em;
    display: flex;
    flex-direction: column;
    gap: 1.2em;
    @media (min-width: 620px) {
        flex: 1 1 calc(70% - 1.3em);
        max-width: 39rem;
    }
`;

export const ContactFormContentBgContainer = styled.div``;
export const ContactFormHeading = styled.h2`
    font-size: clamp(0.3rem, 1vw + 1rem, 1.9rem);
`;

export const ContactFormDescription = styled.p`
    font-size: clamp(0.2rem, 1vw + 0.63rem, 1.1rem);
`;
export const ContactFormInputFieldsBgContainer = styled.div`
    /* outline: auto; */
    display: flex;
    flex-direction: column;
    gap: 1.3em;
`;

export const ContactFormInputField = styled.input`
    padding: 1em;
    border-radius: 11px;
    outline: none;
    background-color: ${({ theme }) => theme.inputBackgroundColor};
    color: ${({ theme }) => theme.inputText};
    border: 1px solid ${({ theme }) => theme.inputBorderColor};
    &::placeholder {
        color: ${({ theme }) => theme.placeholderText};
        font-weight: 600;
        font-size: clamp(0.2rem, 1vw + 0.5rem, 0.9rem);
    }
    &:focus {
        box-shadow: 0px 0px 2px 3px ${({ theme }) => theme.primaryAccentColor};
    }
`;

export const ContactFormMessageInputField = styled(ContactFormInputField).attrs(
    {
        as: "textarea",
    }
)`
    resize: none;
`;

export const ContactFormSubmitBtn = styled.button`
    align-self: center;
    background-color: ${({ theme }) => theme.primaryAccentColor};
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    padding: 0.8em 1.5em;
    transition: transform 0.4s;
    &:hover {
        transform: scale(1.05);
    }
`;

export const ContactSocialAccountsBgContainer = styled.div`
    outline: auto;
    padding: 1em;
    display: flex;
    flex-direction: column;
    @media (min-width: 620px) {
        flex: 1 1 calc(30% - 1.3em);
        max-width: 13rem;
        /* align-self: flex-end; */
    }
`;

export const EmailMeContainer = styled.div`
    display: flex;
    cursor: pointer;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.divideLineColor};
    padding-block: 1em;
`;

export const EmailIcon = styled(MdOutlineMailOutline)`
    font-size: clamp(0.2rem, 1vw + 1.66rem, 125rem);
    color: green;
`;

export const SocialLinkText = styled.a`
    text-decoration: none;
`;
