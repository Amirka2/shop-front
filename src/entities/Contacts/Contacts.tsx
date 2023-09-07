/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import {Icon, IconsWrapper, Wrapper} from "./Contacts.styles";
import {contacts} from '@/app/shop/mock';

export const Contacts = () => {
    return (
        <Wrapper>
            <h4>Наши контакты</h4>
            <IconsWrapper>
                <Icon $src={'/icons/whatsapp.png'}><a href={contacts.whatsApp}/></Icon>
                <Icon $src={'/icons/mail.png'}><a href={contacts.email}/></Icon>
                {/*<Icon $src={'/icons/telegram.png'}><a href={contacts.telegram}/></Icon>*/}
                {/*<Icon $src={'/icons/viber.png'}><a href={contacts.viber}/></Icon>*/}
            </IconsWrapper>
            <a href={'mailto:' + contacts.email}>{contacts.email}</a>
            <a href={'tel:' + contacts.phone}>{contacts.phone}</a>
        </Wrapper>
    );
};
