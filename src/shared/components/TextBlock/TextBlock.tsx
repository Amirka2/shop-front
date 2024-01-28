import React, {ComponentPropsWithoutRef} from 'react';

import * as Styles from './TextBlock.styles';

export const TextBlock = ({children, ...props}: ComponentPropsWithoutRef<'div'>) => {
  return (
    <Styles.Content {...props}>
      {children}
    </Styles.Content>
  );
};
