import React, {PropsWithChildren, useEffect} from 'react';
import {createPortal} from "react-dom";

import * as Styles from "./Modal.styles"

interface ModalProps {
    isModalOpen: boolean;
    toggle: () => void;
}

const search = document.createElement("div");
search.id = 'search';

export const Modal = ({toggle, isModalOpen, children}: PropsWithChildren<ModalProps>) => {
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
                <Styles.ModalOverlay onClick={toggle}>
                    <Styles.ModalBox onClick={stopPropagation}>
                        {children}
                    </Styles.ModalBox>
                </Styles.ModalOverlay>,
                document.body.appendChild(search)
            )}
        </>
    );
};