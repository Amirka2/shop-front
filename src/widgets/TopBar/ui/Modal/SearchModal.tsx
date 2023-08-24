import React from 'react';
import {Wrapper} from './SearchModal.styles';

const style = {
    position: 'absolute' as 'absolute',
    top: '200px',
    left: '49%',
    transform: 'translate(-50%, -50%)',
    width: 620,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface SearchModalProps {
    open: boolean;
    setOpen: (flag: boolean) => void;
}

export const SearchModal = ({open, setOpen}: SearchModalProps) => {
    return (
        <Wrapper open={open}>text</Wrapper>
    );
};
