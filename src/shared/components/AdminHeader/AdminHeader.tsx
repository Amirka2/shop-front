import React from 'react';
import {useNavigate} from "react-router";
import {Back} from "@/shared/ui";

import * as Styles from "./AdminHeader.styles";

export const AdminHeader = ({title}: {title: string}) => {
    const navigate = useNavigate();

    return (
        <Styles.HeaderWrapper>
            <Styles.BackButton onClick={() => navigate(-1)}>
                <Back/>
            </Styles.BackButton>
            <Styles.Title>
                {title}
            </Styles.Title>
            <Styles.Placeholder/>
        </Styles.HeaderWrapper>
    );
};
