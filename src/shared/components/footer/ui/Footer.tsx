import React from 'react';

import {FooterNav} from "./FooterNav";
import {FooterInfo} from "../ui/FooterInfo";
import {Contacts} from "@/entities";

import * as Styles from "./Footer.styles";

export const Footer = () => {
    return (
        <Styles.MainWrapper>
            <Styles.Wrapper>
                <FooterNav/>
                <FooterInfo/>
                <Contacts/>
            </Styles.Wrapper>
            <Styles.CopyRightWrapper>
                {new Date().getFullYear()} © constrspb
            </Styles.CopyRightWrapper>
        </Styles.MainWrapper>
    );
};
