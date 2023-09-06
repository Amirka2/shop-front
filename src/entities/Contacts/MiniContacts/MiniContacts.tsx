import React from 'react';

import * as Styles from './MiniContacts.styles';

import {contacts} from '@/app/shop/mock';

export const MiniContacts = () => {
    return (
        <Styles.Flex>
            <Styles.LinkWrapper>
                <Styles.ContactLink href={'mailto:' + contacts.email}>{contacts.email}</Styles.ContactLink>
                <Styles.MiniIcon $src={'/icons/mail.png'}>
                    <a href={contacts.whatsApp}/>
                </Styles.MiniIcon>
            </Styles.LinkWrapper>
            <Styles.LinkWrapper>
                <Styles.ContactLink href={'tel:' + contacts.phone}>{contacts.phone}</Styles.ContactLink>
                <Styles.MiniIcon $src={'/icons/whatsapp.png'}>
                    <a href={contacts.whatsApp}/>
                </Styles.MiniIcon>
            </Styles.LinkWrapper>
        </Styles.Flex>
    );
};