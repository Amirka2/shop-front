import React from 'react';
import * as Styles from './AdminMain.styles';
import {Container} from "@/shared/ui";

export const AdminMain = () => {
    return (
        <Container>
            <Styles.Wrapper>
                <Styles.SmallButton to={'/'}>Выйти</Styles.SmallButton>
                <Styles.SectionButtonsWrapper>
                    <Styles.BigButton to={'bestsellers'}>BestSeller</Styles.BigButton>
                    <Styles.BigButton to={'categories'}>
                        Каталог товаров
                    </Styles.BigButton>
                </Styles.SectionButtonsWrapper>
            </Styles.Wrapper>
        </Container>
    );
};
