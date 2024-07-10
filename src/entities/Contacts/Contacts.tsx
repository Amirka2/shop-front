import React from 'react';

import {Phone, Mail} from "@/shared/components/Icons";
import {contacts} from '@/app/shop/mock';
import { handleYMClick } from '@/entities/Metrics';

import * as Styles from './Contacts.styles';

export const Contacts = () => {
    return (
        <Styles.Flex>
            <Styles.LinkWrapper>
                <Styles.ContactLink href={'mailto:' + contacts.email}>{contacts.email}</Styles.ContactLink>
                <a href={'mailto:' + contacts.email}>
                    <Mail size={30}/>
                </a>
            </Styles.LinkWrapper>
            <Styles.LinkWrapper>
                <Styles.ContactLink href={'tel:' + contacts.phone} onClick={() => handleYMClick("phone")}>{contacts.phone}</Styles.ContactLink>
                <a href={'tel:' + contacts.phone}>
                    <Phone size={30}/>
                </a>
            </Styles.LinkWrapper>
            <Styles.LinkWrapper>
                <Styles.ContactLink href={contacts.whatsAppLink} onClick={() => handleYMClick('whatsapp')}>{contacts.whatsAppNumber}</Styles.ContactLink>
                <Styles.MiniIcon $src={'/icons/whatsapp.png'}>
                    <a href={contacts.whatsAppLink} onClick={() => handleYMClick('whatsapp')}/>
                </Styles.MiniIcon>
            </Styles.LinkWrapper>
        </Styles.Flex>
    );
};