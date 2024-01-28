import React, {ComponentPropsWithoutRef} from 'react';

import * as Styles from './SavedPhoto.styles';

export const SavedPhoto = (props: ComponentPropsWithoutRef<'img'> & {onClick: () => void}) => {
  return (
    <Styles.Wrapper>
      <Styles.StyledPhoto {...props} />
      <Styles.Cross onClick={props.onClick}>x</Styles.Cross>
    </Styles.Wrapper>
  );
};
