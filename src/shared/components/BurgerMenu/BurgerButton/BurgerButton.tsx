import React from 'react';
import * as Styles from "./BurgerButton.styles";

interface BurgerProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerButton = ({open, setOpen}: BurgerProps) => {
    return (
        <Styles.StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div/>
            <div/>
            <div/>
        </Styles.StyledBurger>
    )
}