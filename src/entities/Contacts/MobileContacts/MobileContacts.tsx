import React from 'react';
import * as Styles from './MobileContacts.styles';
import {useMobileOrDesktop} from "@/shared/hooks";
import {contacts} from "@/app/shop/mock";

export const MobileContacts = () => {
    const isMobile = useMobileOrDesktop();

    return (
        isMobile
            ? (
                <Styles.MobileContacts>
                    <a href={'tel:' + contacts.phone}>
                        <Styles.Number>
                            {contacts.phone}
                        </Styles.Number>
                    </a>
                    <Styles.IconsWrapper>
                        <Styles.Icon $src={'icons/whatsapp.png'}>
                            <a href={contacts.whatsApp}/>
                        </Styles.Icon>
                    </Styles.IconsWrapper>
                </Styles.MobileContacts>
            )
            : null
    )
        ;
};