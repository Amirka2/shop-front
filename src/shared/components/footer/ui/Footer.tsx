import React from 'react';
import * as Styles from "./Footer.styles";
import {FooterNav} from "./FooterNav";
import {FooterInfo} from "../ui/FooterInfo";
import {useMobileOrDesktop} from "@/shared/hooks";
import {HeaderContacts} from "@/entities";

export const Footer = () => {
    const isMobile = useMobileOrDesktop();

    return (
        <Styles.MainWrapper $isMobile={isMobile}>
            <Styles.Wrapper $isMobile={isMobile}>
                <FooterNav/>
                <FooterInfo/>
                <HeaderContacts/>
            </Styles.Wrapper>
            <Styles.CopyRightWrapper>
                <Styles.CopyRight>{new Date().getFullYear()} © constrspb</Styles.CopyRight>
            </Styles.CopyRightWrapper>
        </Styles.MainWrapper>
    );
};
