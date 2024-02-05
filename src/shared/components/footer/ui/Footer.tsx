import React from 'react';

import {FooterNav} from "./FooterNav";
import {FooterInfo} from "../ui/FooterInfo";
import {Contacts} from "@/entities";
import {CallOrdering} from "@/shared/components/CallOrdering";

import * as Styles from "./Footer.styles";

export const Footer = ({withoutPlane}: {withoutPlane?: boolean}) => {
  return (
    <Styles.FooterWrapper>
      {!withoutPlane && (
        <CallOrdering/>
      )}
      <Styles.MainWrapper>
        <Styles.Wrapper>
          <FooterNav/>
          <FooterInfo/>
          <Contacts/>
        </Styles.Wrapper>
        <Styles.CopyRightWrapper>
          {new Date().getFullYear()} © constrspb
        </Styles.CopyRightWrapper>
      </Styles.MainWrapper>
    </Styles.FooterWrapper>
  );
};
