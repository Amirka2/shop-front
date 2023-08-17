import React from 'react';
import {Wrapper, Link} from "./NavBar.styles";
import {IPaths} from "@/shared/interfaces";

interface NavBarProps {
    paths: IPaths;
}
export const NavBar = ({paths}: NavBarProps) => {
    return (
        <Wrapper>
            <Link to={paths.catalog}>Каталог</Link>
            <Link to={paths.aboutUs}>О нас</Link>
            <Link to={paths.main}>Главная</Link>
            <Link to={paths.payment}>Оплата</Link>
            <Link to={paths.shipping}>Доставка</Link>
        </Wrapper>
    );
};

