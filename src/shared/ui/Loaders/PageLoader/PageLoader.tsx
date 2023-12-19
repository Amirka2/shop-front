import React from 'react';
import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

import * as Styles from './PageLoader.styles';

export const PageLoader = () => {
  return (
    <Styles.Wrapper>
      <Spin indicator={
        <LoadingOutlined
          style={{ fontSize: 120 }}
          spin
        />}
      />
    </Styles.Wrapper>
  );
};
