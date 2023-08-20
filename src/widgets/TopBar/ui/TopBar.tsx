import React from 'react';
import {Wrapper} from "./TopBar.styles";

interface TopBarProps {
    isMobile: boolean;
}
export const TopBar = (props: TopBarProps) => {
    return (
        <Wrapper $isMobile={props.isMobile}>
            <h1>TopBar</h1>
        </Wrapper>
    );
};
