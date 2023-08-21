import React from 'react';
import {Icon, IconsWrapper, Wrapper} from "./FooterContacts.styles";

export interface Contacts {
    isMobile: boolean;
    whatsApp: string;
    telegram: string;
    viber: string;
    email: string;
    phone: string;
}
export const FooterContacts = (props: Contacts) => {
    return (
        <Wrapper $isMobile={props.isMobile}>
            <h4>Наши контакты</h4>
            <IconsWrapper>
                <Icon $src={'/icons/whatsapp.png'}><a href={props.whatsApp}/></Icon>
                <Icon $src={'/icons/telegram.png'}><a href={props.telegram}/></Icon>
                <Icon $src={'/icons/viber.png'}><a href={props.viber}/></Icon>
            </IconsWrapper>
            <a href={'mailto:' + props.email}>{props.email}</a>
            <a href={'tel:' + props.phone}>{props.phone}</a>
        </Wrapper>
    );
};
