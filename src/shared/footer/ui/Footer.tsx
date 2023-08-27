import React from 'react';
import {MainWrapper, Wrapper} from "./Footer.styles";
import {FooterNav} from "./FooterNav";
import {Contacts, ContactsProps} from "@/shared/components";
import {FooterInfo} from "@/shared/footer/ui/FooterInfo";
interface FooterProps extends ContactsProps{
    isMobile: boolean;
}
export const Footer = (props: FooterProps) => {
    return (
        <MainWrapper $isMobile={props.isMobile}>
            <Wrapper $isMobile={props.isMobile}>
                <FooterNav/>
                <FooterInfo isMobile={props.isMobile}></FooterInfo>
                <Contacts {...props}/>
            </Wrapper>
            <br/>
            <div>
                <span>© Компания/магазин</span>
            </div>
        </MainWrapper>
    );
};
