import React from 'react';

import {Wrapper, Link} from "./FooterNav.styles";

import {Paths} from '@/shared/routing'

export const FooterNav = () => {
    return (
        <Wrapper>
            <h3>Меню</h3>
            <Link to={Paths.categories}>Категории</Link>
            <Link to={Paths.aboutUs}>О нас</Link>
            <Link to={Paths.main}>Главная</Link>
            <Link to={Paths.payment}>Оплата</Link>
            <Link to={Paths.contacts}>Контакты</Link>
            <Link to={Paths.shipping}>Доставка</Link>
        </Wrapper>
    );
};
