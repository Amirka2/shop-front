import React from 'react';

import {FooterNav} from "./FooterNav";
import {FooterInfo} from "../ui/FooterInfo";
import {useMobileOrDesktop} from "@/shared/hooks";
import {Contacts} from "@/entities";
import {CallOrdering} from "@/shared/components/CallOrdering";

import * as Styles from "./Footer.styles";

export const Footer = () => {
    const isMobile = useMobileOrDesktop();

    return (
        <Styles.FooterWrapper>
            <CallOrdering />
            <Styles.MainWrapper $isMobile={isMobile}>
                <Styles.Wrapper $isMobile={isMobile}>
                    <FooterNav/>
                    <FooterInfo/>
                    <Contacts/>
                </Styles.Wrapper>
                <Styles.CopyRightWrapper>
                    {new Date().getFullYear()} © constrspb
                </Styles.CopyRightWrapper>
            </Styles.MainWrapper>
        </Styles.FooterWrapper>
    );
};
