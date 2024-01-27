import React from 'react';

import { MainLayout } from "@/shared/ui/Layouts";

import { Wrapper } from "./NotFoundPage.styles";

export const NotFoundPage = () => {
    return (
        <MainLayout>
          <Wrapper>
            <h1>Страница не найдена :(</h1>
          </Wrapper>
        </MainLayout>
    );
};
