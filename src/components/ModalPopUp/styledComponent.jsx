import styled from "styled-components";
import { IoCloseCircleOutline } from "react-icons/io5";

export const ModalContent = styled.div`
    outline: none;
    background-color: var(--theme-container-bg-color);
    border-radius: 20px;
    overflow: hidden;
    color: var(--theme-page-text-color);
    width: min(65%, 70rem);
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding-block: 1em;
`;

export const ModalHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 1.2em;
`;

export const CloseBtnBgContainer = styled.div`
`;

export const CloseIcon = styled(IoCloseCircleOutline)`
    cursor: pointer;
    font-size: clamp(0.3rem, 1vw + 0.8rem, 3rem);
    &:hover {
        color: red;
    }
`;
