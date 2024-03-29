import React, {PropsWithChildren, useEffect} from 'react';
import {createPortal} from "react-dom";

import {Cross} from "@/shared/ui";
import {Color} from "@/shared/constants";

import * as Styles from "./Modal.styles"


interface ModalProps {
    isModalOpen: boolean;
    onClose: () => void;
}

const search = document.createElement("div");
search.id = 'search';

export const Modal = ({isModalOpen, children, onClose}: PropsWithChildren<ModalProps>) => {
    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [isModalOpen]);

    return (
        <>
            {isModalOpen && createPortal(
                <Styles.ModalOverlay onClick={onClose}>
                    <Styles.ModalBox onClick={stopPropagation}>
                        <Styles.CloseModalButton onClick={onClose}>
                            <Cross width='26px' height='26px' color={Color.black}/>
                        </Styles.CloseModalButton>
                        <Styles.ModalContent>
                            {children}
                        </Styles.ModalContent>
                    </Styles.ModalBox>
                </Styles.ModalOverlay>,
                document.body.appendChild(search)
            )}
        </>
    );
};
