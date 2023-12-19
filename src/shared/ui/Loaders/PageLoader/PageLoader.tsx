import React from 'react';
import {Spin} from "antd";

import * as Styles from './PageLoader.styles';

export const PageLoader = () => {
  return (
    <Styles.Wrapper>
      <Spin size="large"/>
    </Styles.Wrapper>
  );
};
