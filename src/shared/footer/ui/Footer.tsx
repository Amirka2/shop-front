import React from 'react';
import {MainWrapper, Wrapper} from "./Footer.styles";
import {FooterNav} from "./FooterNav";
import {FooterContacts} from "@/shared/footer/ui/FooterContacts";
import {Contacts as IContacts} from './FooterContacts';
import {FooterInfo} from "@/shared/footer/ui/FooterInfo";
interface FooterProps extends IContacts{
}
export const Footer = (props: FooterProps) => {
    return (
        <MainWrapper $isMobile={props.isMobile}>
            <Wrapper $isMobile={props.isMobile}>
                <FooterNav/>
                <FooterInfo isMobile={props.isMobile}></FooterInfo>
                <FooterContacts {...props}/>
            </Wrapper>
            <br/>
            <div>
                <span>© Компания/магазин</span>
            </div>
        </MainWrapper>
    );
};
