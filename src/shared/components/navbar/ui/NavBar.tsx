import React from 'react';

import * as Styles from "./NavBar.styles";

import {Paths} from "@/shared/routing";

export const NavBar = () => {
  return (
    <Styles.Wrapper>
      <Styles.Link to={Paths.categories}>Категории</Styles.Link>
      <Styles.Link to={Paths.contacts}>Контакты</Styles.Link>
      <Styles.Link to={Paths.aboutUs}>О нас</Styles.Link>
      <Styles.Link to={Paths.main}>Главная</Styles.Link>
      <Styles.Link to={Paths.payment}>Оплата</Styles.Link>
      <Styles.Link to={Paths.shipping}>Доставка</Styles.Link>
    </Styles.Wrapper>
  );
};

