import React from 'react';
import {LogoIcon} from './Logo.styles';
import {Link} from "react-router-dom";
import {Paths} from "@/shared/constants";
import {useMobileOrDesktop} from "@/shared/hooks";

export const Logo = () => {
    const isMobile = useMobileOrDesktop();
    return (
        <Link to={Paths.main}>
            <LogoIcon isMobile={isMobile}/>
        </Link>
    );
};

