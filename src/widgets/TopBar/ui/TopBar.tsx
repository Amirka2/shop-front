import React, {useState} from 'react';
import {Wrapper, Textarea} from "./TopBar.styles";
import {SearchModal} from './Modal';

interface TopBarProps {
    isMobile: boolean;
}
export const TopBar = (props: TopBarProps) => {
    const [open, setOpen] = useState(false);
    const handleSearch = function () {

    }
    return (
        <Wrapper $isMobile={props.isMobile}>
            <Textarea onClick={() => setOpen(true)}/>
            <img src={'./icons/search.png'} alt={'search btn'} onClick={handleSearch}/>
            {/*<SearchModal open={open} setOpen={setOpen}/>*/}
        </Wrapper>
    );
};
