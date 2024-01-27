import React from 'react';
import * as Styles from './AdminMain.styles';
import { Container } from "@/shared/ui";
import { Paths } from "@/shared/routing";
import {useCookies} from "react-cookie";

export const AdminMain = () => {
    const [cookies, setCookies, removeCookies] = useCookies(['token']);

    const handleExitClick = () => {
        removeCookies('token');
    }

    return (
        <Container>
            <Styles.Wrapper>
                <Styles.SmallButton to={Paths.main} onClick={handleExitClick}>Выйти</Styles.SmallButton>
                <Styles.SectionButtonsWrapper>
                    <Styles.BigButton to={Paths.adminBestSellers}>
                        BestSeller
                    </Styles.BigButton>
                    <Styles.BigButton to={Paths.adminCategory}>
                        Каталог товаров
                    </Styles.BigButton>
                </Styles.SectionButtonsWrapper>
            </Styles.Wrapper>
        </Container>
    );
};
