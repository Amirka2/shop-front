import React, {ComponentPropsWithoutRef} from 'react';

import * as Styles from "./ItemsGrid.styles";

export const ItemsGrid = (props: ComponentPropsWithoutRef<'div'>) => {
    return (
        <Styles.Wrapper {...props}>
            {props.children}
        </Styles.Wrapper>
    );
};
