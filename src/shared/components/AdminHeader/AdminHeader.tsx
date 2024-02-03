import React from 'react';

import * as Styles from "./AdminHeader.styles";

export const AdminHeader = ({title}: {title: string}) => {
    return (
        <Styles.HeaderWrapper>
            <Styles.Title>
                {title}
            </Styles.Title>
        </Styles.HeaderWrapper>
    );
};
