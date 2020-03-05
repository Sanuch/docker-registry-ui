import React from "react";

import {
    ModalCloseButton,
    ModalContent,
    ModalWrapper,
    ModalContentText,
    ModalActions,
    ButtonYes,
    ButtonCancel, ModalHeader, ModalTitle
} from "./styles";

const Modal = ({onCancel, onYes, children}: any) => {
    return (
        <ModalWrapper>
            <ModalHeader>
                <ModalTitle>Remove image</ModalTitle>
                <ModalCloseButton onClick={() => onCancel()}>&times;</ModalCloseButton>
            </ModalHeader>
            <ModalContent>
                <ModalContentText>
                    {children}
                </ModalContentText>
            </ModalContent>
            <ModalActions>
                <ButtonYes onClick={() => onYes()}>Yes</ButtonYes>
                <ButtonCancel onClick={() => onCancel()}>Cancel</ButtonCancel>
            </ModalActions>
        </ModalWrapper>
    )
};

export default Modal;