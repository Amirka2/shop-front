import React from 'react';

import {Paths} from "@/shared/routing";
import {AdminLayout} from "@/shared/ui/Layouts";

import * as Styles from './AdminMain.styles';

export const AdminMain = () => {
  return (
    <AdminLayout>
      <Styles.SectionButtonsWrapper>
        <Styles.BigButton to={Paths.adminCategory}>
          Каталог товаров
        </Styles.BigButton>
      </Styles.SectionButtonsWrapper>
    </AdminLayout>
  );
};
