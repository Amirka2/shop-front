/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import {Icon, IconsWrapper, Wrapper} from "./Contacts.styles";
import {contacts} from '@/app/shop/mock';
import {Mail} from "@/shared/components";

export const Contacts = () => {
    return (
        <Wrapper>
            <h4>Наши контакты</h4>
            <IconsWrapper>
                <Icon $src={'/icons/whatsapp.png'}><a href={contacts.whatsAppLink}/></Icon>
                <a href={contacts.email}>
                    <Mail size={50} />
                </a>
                {/*<Icon $src={'/icons/telegram.png'}><a href={contacts.telegram}/></Icon>*/}
            </IconsWrapper>
            <a href={'mailto:' + contacts.email}>{contacts.email}</a>
            <a href={'tel:' + contacts.phone}>{contacts.phone}</a>
        </Wrapper>
    );
};
