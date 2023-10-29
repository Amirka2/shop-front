import React from 'react';
import * as Styles from './AdminMain.styles';
import { Container } from "@/shared/ui";
import { Paths } from "@/shared/routing";

export const AdminMain = () => {
    return (
        <Container>
            <Styles.Wrapper>
                <Styles.SmallButton to={Paths.main}>Выйти</Styles.SmallButton>
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
