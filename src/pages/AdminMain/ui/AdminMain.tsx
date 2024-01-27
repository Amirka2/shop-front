import React from 'react';
import {useCookies} from "react-cookie";

import {Paths} from "@/shared/routing";
import {AdminLayout} from "@/shared/ui/Layouts";

import * as Styles from './AdminMain.styles';

export const AdminMain = () => {
  const [cookies, setCookies, removeCookies] = useCookies(['token']);

  const handleExitClick = () => {
    removeCookies('token');
  }

  return (
    <AdminLayout>
      <Styles.SmallButton to={Paths.main} onClick={handleExitClick}>Выйти</Styles.SmallButton>
      <Styles.SectionButtonsWrapper>
        <Styles.BigButton to={Paths.adminBestSellers}>
          BestSeller
        </Styles.BigButton>
        <Styles.BigButton to={Paths.adminCategory}>
          Каталог товаров
        </Styles.BigButton>
      </Styles.SectionButtonsWrapper>
    </AdminLayout>
  );
};
