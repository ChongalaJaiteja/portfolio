import * as React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { styled } from "@mui/system";
import { Modal as BaseModal } from "@mui/base/Modal";
import * as StyledComponent from "./styledComponent";

const ModalUnstyled = ({ isOpen, toggleModel, modelContent }) => {
    const handleOpen = () => {
        toggleModel(true);
    };
    const handleClose = () => {
        toggleModel(false);
    };

    return (
        <div>
            <Modal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={isOpen}
                onClose={handleClose}
                slots={{ backdrop: StyledBackdrop }}
            >
                <StyledComponent.ModalContent>
                    <StyledComponent.ModalHeaderContainer onClick={handleClose}>
                        <StyledComponent.CloseBtnBgContainer>
                            <StyledComponent.CloseIcon />
                        </StyledComponent.CloseBtnBgContainer>
                    </StyledComponent.ModalHeaderContainer>
                    {modelContent}
                </StyledComponent.ModalContent>
            </Modal>
        </div>
    );
};

export default ModalUnstyled;

const Backdrop = React.forwardRef((props, ref) => {
    const { isOpen, className, ...other } = props;
    return (
        <div
            className={clsx({ "base-Backdrop-open": isOpen }, className)}
            ref={ref}
            {...other}
        />
    );
});

Backdrop.propTypes = {
    className: PropTypes.string.isRequired,
    open: PropTypes.bool,
};

const Modal = styled(BaseModal)`
    position: fixed;
    z-index: 1300;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
    z-index: -1;
    position: fixed;
    inset: 0;
    background-color: rgb(0 0 0 / 0.5);
    -webkit-tap-highlight-color: transparent;
`;
