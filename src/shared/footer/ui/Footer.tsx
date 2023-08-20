import React from 'react';
import {Wrapper} from "./Footer.styles";

interface FooterProps {
    isMobile: boolean;
}
export const Footer = (props: FooterProps) => {
    return (
        <Wrapper $isMobile={props.isMobile}>
            <h1>Footer</h1>
        </Wrapper>
    );
};
