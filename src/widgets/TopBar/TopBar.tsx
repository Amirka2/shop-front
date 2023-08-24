import React, {useState} from 'react';
import {Wrapper, LogoCityWrapper, SearchWrapper, Textarea, CartButtonWrapper} from "./TopBar.styles";
import {SearchModal} from './Modal';
import {City, Logo} from '@/shared/components';
import { CartButton } from './CartButton';

interface TopBarProps {
    isMobile: boolean;
}
export const TopBar = (props: TopBarProps) => {
    const [open, setOpen] = useState(false);
    const handleSearch = function () {

    }
    return (
        <Wrapper $isMobile={props.isMobile}>
            <LogoCityWrapper>
                <Logo/>
                <City/>
            </LogoCityWrapper>
            <SearchWrapper>
                <Textarea onClick={() => setOpen(true)}/>
                <img src={'./icons/search.png'} alt={'search btn'} onClick={handleSearch}/>
            </SearchWrapper>
            <CartButtonWrapper>
                <CartButton/>
            </CartButtonWrapper>
            {/*<SearchModal open={open} setOpen={setOpen}/>*/}
        </Wrapper>
    );
};
