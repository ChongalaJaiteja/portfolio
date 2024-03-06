import styled from "styled-components";
import { motion } from "framer-motion";

import {
    AboutPageHeading,
    AboutPageBgContainer,
    AboutPageSectionBodyContainer,
} from "../about/styledComponent";

export const ContactPageBgContainer = styled(AboutPageBgContainer)``;

export const ContactPageHeading = styled(AboutPageHeading)``;

export const ContactPageSectionBodyContainer = styled(
    AboutPageSectionBodyContainer
)``;

export const ContactPageContentBgContainer = styled.div`
    @media (min-width: 620px) {
        display: flex;
        justify-content: space-evenly;
        gap: 1.3em;
    }
`;

export const ContactFormBgContainer = styled(motion.form)`
    display: flex;
    flex-direction: column;
    gap: 1.2em;
    @media (min-width: 620px) {
        flex: 1 1 calc(50% - 1.3em);
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
    display: flex;
    flex-direction: column;
    gap: 1.3em;
`;

export const ContactFormInputField = styled.input`
    padding: 1em;
    border-radius: 11px;
    outline: none;
    background-color: var(--theme-input-bg-color);
    color: var(--theme-input-text-color);
    border: 2px solid var(--theme-input-border-color);
    &::placeholder {
        color: var(--theme-input-placeholder-text-color);
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
    border-radius: 20px;
    cursor: pointer;
    padding: 0.84em 1.6em;
    font-size: clamp(0.3rem, 1vw + 0.51rem, 1rem);
    transition: transform 0.4s;
    &:hover {
        transform: scale(0.97);
    }
`;

export const ContactSectionAnimationImgBgContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 620px) {
        order: 1;
        flex: 1 1 calc(50% - 1.3em);
        max-width: 28rem;
    }
`;

export const SocialLinkText = styled.a`
    text-decoration: none;
`;

export const SocialMediaHandlesBgContainerLg = styled.div`
    display: none;
    margin-top: 1.5em;
    @media (min-width: 620px) {
        display: block;
    }
`;

export const SocialMediaHeading = styled.h2`
    font-size: clamp(0.3rem, 1vw + 1rem, 1.9rem);
    @media (min-width: 620px) {
        text-align: center;
    }
`;

export const SocialMediaHandlesBgContainerSm = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5em;
    @media (min-width: 620px) {
        display: none;
    }
`;
