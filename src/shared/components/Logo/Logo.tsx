import React from 'react';
import {LogoIcon} from './Logo.styles';
import {Link} from "react-router-dom";
import {Paths} from "@/shared/constants";

interface LogoProps {
    isMobile?: boolean;
}

export const Logo = ({isMobile}: LogoProps) => {
    return (
        <Link to={Paths.main}>
            <LogoIcon isMobile={isMobile} src={'icons/logo.png'} alt='mitcad doo logo'/>
        </Link>
    );
};

