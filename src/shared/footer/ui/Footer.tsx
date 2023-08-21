import React from 'react';
import {MainWrapper, Wrapper} from "./Footer.styles";
import {FooterNav} from "./FooterNav";
import {FooterContacts} from "@/shared/footer/ui/FooterContacts";
import {Contacts as IContacts} from './FooterContacts';
import {FooterInfo} from "@/shared/footer/ui/FooterInfo";
interface FooterProps extends IContacts{
    isMobile: boolean;
}
export const Footer = (props: FooterProps) => {
    return (
        <MainWrapper $isMobile={props.isMobile}>
            <Wrapper>
                <FooterNav/>
                <FooterInfo></FooterInfo>
                <FooterContacts {...props}/>
            </Wrapper>
            <div>
                <span>Компания/магазин</span>
            </div>
        </MainWrapper>
    );
};
