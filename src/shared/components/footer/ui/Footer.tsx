import React from 'react';
import * as Styles from "./Footer.styles";
import {FooterNav} from "./FooterNav";
import {Contacts} from "@/entities";
import {FooterInfo} from "../ui/FooterInfo";
import {useMobileOrDesktop} from "@/shared/hooks";

export const Footer = () => {
    const isMobile = useMobileOrDesktop();

    return (
        <Styles.MainWrapper $isMobile={isMobile}>
            <Styles.Wrapper $isMobile={isMobile}>
                <FooterNav/>
                <FooterInfo/>
                <Contacts/>
            </Styles.Wrapper>
            <Styles.CopyRightWrapper>
                <Styles.CopyRight>{new Date().getFullYear()} © constrspb</Styles.CopyRight>
            </Styles.CopyRightWrapper>
        </Styles.MainWrapper>
    );
};
