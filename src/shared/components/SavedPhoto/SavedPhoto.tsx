import React, {ComponentPropsWithoutRef} from 'react';

import * as Styles from './SavedPhoto.styles';
import {Cross} from "@/shared/ui";
import {Color} from "@/shared/constants";

export const SavedPhoto = (props: ComponentPropsWithoutRef<'img'> & {onClick: () => void}) => {
  return (
    <Styles.Wrapper>
      <Styles.StyledPhoto {...props} />
      <Styles.Cross onClick={props.onClick}>
        <Cross width='25px' height='25px' color={Color.black}/>
      </Styles.Cross>
    </Styles.Wrapper>
  );
};
