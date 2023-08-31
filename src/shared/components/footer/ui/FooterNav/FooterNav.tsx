import React from 'react';
import {Paths} from '@/shared/constants'
import {Wrapper, Link} from "./FooterNav.styles";
export const FooterNav = () => {
    return (
        <Wrapper>
            <h3>Меню</h3>
            <Link to={Paths.catalog}>Каталог</Link>
            <Link to={Paths.aboutUs}>О нас</Link>
            <Link to={Paths.main}>Главная</Link>
            <Link to={Paths.payment}>Оплата</Link>
            <Link to={Paths.shipping}>Доставка</Link>
        </Wrapper>
    );
};
