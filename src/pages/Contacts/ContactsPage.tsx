import React from 'react';
import * as Styles from './ContactsPage.styles';
import {contacts} from '@/app/shop/mock';
import { Container } from "@/shared/ui/Container";

export const ContactsPage = () => {
    return (
        <Container>
            <Styles.WrapperAddress>
                <Styles.ContentAddress>
                    <Styles.ContainerAdress>
                        <Styles.HeaderAddress>Наш адресс</Styles.HeaderAddress>
                        <Styles.TextAddress>г.Москва, Токмаков переулок, д14 стр 3</Styles.TextAddress>
                    </Styles.ContainerAdress>
                    <Styles.ContainerAdress>
                        <Styles.HeaderAddress>Время работы</Styles.HeaderAddress>
                        <Styles.TextAddress>Пн-Пт: 9:00-18:00, без перерыва</Styles.TextAddress>
                        <Styles.TextAddress>Сб, Вс: Выходной</Styles.TextAddress>
                    </Styles.ContainerAdress>
                </Styles.ContentAddress>
                <Styles.ContentAddress>
                    <Styles.ContainerAdress>
                        <Styles.HeaderAddress>Наш адресс</Styles.HeaderAddress>
                        <Styles.TextAddress>г.Москва, Токмаков переулок, д14 стр 3</Styles.TextAddress>
                    </Styles.ContainerAdress>
                    <Styles.ContainerAdress>
                        <Styles.HeaderAddress>Время работы</Styles.HeaderAddress>
                        <Styles.TextAddress>Пн-Пт: 9:00-18:00, без перерыва</Styles.TextAddress>
                        <Styles.TextAddress>Сб, Вс: Выходной</Styles.TextAddress>
                    </Styles.ContainerAdress>
                </Styles.ContentAddress>
            </Styles.WrapperAddress>
            <Styles.WrapperContact>
                <Styles.ContentContact>
                    <Styles.HeaderContact>Наши номера</Styles.HeaderContact>
                    <Styles.ContentTextContact>
                        <Styles.WrapperLinkContact>
                            <Styles.LinkContact href={'tel:' + contacts.phone}>{contacts.phone}</Styles.LinkContact>
                        </Styles.WrapperLinkContact>
                        <Styles.WrapperLinkContact>
                            <Styles.LinkContact href={contacts.whatsAppLink}>{contacts.whatsAppNumber}</Styles.LinkContact>
                        </Styles.WrapperLinkContact>
                    </Styles.ContentTextContact>
                </Styles.ContentContact>
                <Styles.ContentContact>
                    <Styles.HeaderContact>Наша почта</Styles.HeaderContact>
                    <Styles.ContentTextContact>
                        <Styles.WrapperLinkContact>
                            <Styles.LinkContact href={'mailto:' + contacts.email}>{contacts.email}</Styles.LinkContact>
                        </Styles.WrapperLinkContact>
                    </Styles.ContentTextContact>
                </Styles.ContentContact>
                <Styles.ContentContact>
                    <Styles.HeaderContact>Наши мессенджеры</Styles.HeaderContact>
                    <Styles.ContantIcon>
                        <Styles.IconContact $src={'/icons/whatsapp.png'}>
                            <a href={contacts.whatsAppLink}/>
                        </Styles.IconContact>
                        <Styles.IconContact $src={'/icons/telegram.png'}>
                            <a href={contacts.telegramLink}/>
                        </Styles.IconContact>
                    </Styles.ContantIcon>
                </Styles.ContentContact>
            </Styles.WrapperContact>
        </Container>
    );
};