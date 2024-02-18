import { MdOutlineFileDownload } from "react-icons/md";
import styled from "styled-components";

export const HomeBgContainer = styled.div`
    background-image: ${({ theme }) =>
        theme.isLightTheme ? `url("/cloudBg.png")` : `url("/cloudDark.png")`};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.8em clamp(0.5em, 1vw + 1em, 1.6em);
    gap: 1em;
    @media (min-width: 620px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }
`;

export const AnimatedDevContainer = styled.div`
    /* flex: 1 1 50%; */
    width: 90%;
    max-width: 28rem;
    @media (min-width: 620px) {
        & {
            width: 100%;
            order: 1;
            align-self: flex-start;
        }
    }
`;

export const HomeContentContainer = styled.div`
    /* flex: 1 1 40%; */
    width: min(100%, 39rem);
    margin-bottom: 3em;
`;

export const GreetingHeading = styled.h1`
    color: ${({ theme }) => theme.color};
    font-size: clamp(0.5rem, 1vw + 1.2rem, 2.4rem);
`;

export const MyNameSpan = styled.span`
    color: #2eafff;
`;

export const HomeContentPara = styled.p`
    color: ${({ theme }) => theme.color};
    font-size: clamp(0.5rem, 1vw + 0.64rem, 1.23rem);
`;

export const contactLinksListContainer = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 1.3em;
    flex-flow: row wrap;
`;

export const contactListItem = styled.li`
    &:hover {
        transform: scale(1.1);
    }
`;

export const contactListItemLink = styled.a``;

export const contactListItemImg = styled.img`
    width: clamp(0.5rem, 1vw + 1.67rem, 2.7rem);
`;

export const ResumeBtn = styled.button`
    background-color: #2eafff;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 0.85em 0;
    width: min(42%, 28rem);
    margin-top: 1.8em;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const ResumeBtnText = styled.span`
    font-size: clamp(0.5rem, 1vw + 0.76rem, 1.3rem);
    text-align: center;
`;

export const DownloadBtnIcon = styled(MdOutlineFileDownload)`
    font-size: clamp(0.4rem, 1vw + 1rem, 5rem);
`;
