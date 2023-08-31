import React, {useState} from 'react';
import {Wrapper, LogoCityWrapper, SearchWrapper, Textarea, CartButtonWrapper} from "./TopBar.styles";
import { Logo } from '@/shared/components';
import { City } from '@/entities'
import { CartButton } from './CartButton';
import {useMobileOrDesktop} from "@/shared/hooks";

export const TopBar = () => {
    const [open, setOpen] = useState(false);
    const isMobile = useMobileOrDesktop();
    const handleSearch = function () {

    }
    return (
        <Wrapper $isMobile={isMobile}>
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
