import React from 'react';
import {MainWrapper, Wrapper} from "./Footer.styles";
import {FooterNav} from "./FooterNav";
import {Contacts} from "@/entities";
import {FooterInfo} from "../ui/FooterInfo";
import {useMobileOrDesktop} from "@/shared/hooks";

export const Footer = () => {
    const isMobile = useMobileOrDesktop();

    return (
        <MainWrapper $isMobile={isMobile}>
            <Wrapper $isMobile={isMobile}>
                <FooterNav/>
                <FooterInfo/>
                <Contacts/>
            </Wrapper>
            <br/>
            <div>
                <span>© Компания/магазин</span>
            </div>
        </MainWrapper>
    );
};
