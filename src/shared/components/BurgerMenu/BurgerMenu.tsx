import React from 'react';

import * as Styles from './BurgerMenu.styles';
import {BurgerButton} from "./BurgerButton";
import {Link} from "react-router-dom";
import {Paths} from "@/shared/routing";

export const BurgerMenu = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <BurgerButton open={open} setOpen={setOpen}/>
            <Menu open={open} setOpen={setOpen}/>
        </>
    )
}

interface MenuProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({open, setOpen}: MenuProps) => {
    const close = () => {
        setOpen(false);
    }
    return (
        <Styles.StyledMenu open={open}>
            <Link to={Paths.categories} onClick={close}>Категории</Link>
            <Link to={Paths.aboutUs} onClick={close}>О нас</Link>
            <Link to={Paths.main} onClick={close}>Главная</Link>
            <Link to={Paths.payment} onClick={close}>Оплата</Link>
            <Link to={Paths.shipping} onClick={close}>Доставка</Link>
        </Styles.StyledMenu>
    )
}





