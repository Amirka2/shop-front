import React from 'react';
import {Link} from "react-router-dom";

import {LogoIcon} from './Logo.styles';

import {Paths} from "@/shared/routing";
import {useMobileOrDesktop} from "@/shared/hooks";

export const Logo = () => {
    const isMobile = useMobileOrDesktop();
    return (
        <Link to={Paths.main}>
            <LogoIcon isMobile={isMobile}/>
        </Link>
    );
};

