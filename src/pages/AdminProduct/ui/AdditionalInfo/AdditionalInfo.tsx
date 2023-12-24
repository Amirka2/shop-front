import React from 'react';

import * as Styles from './AdditionalInfo.styles';

export const AdditionalInfo = () => {
  return (
    <Styles.Wrapper>
      <Styles.DescriptionWrapper>
        <Styles.Label>
          Короткое описание:
        </Styles.Label>
        <Styles.Description />
      </Styles.DescriptionWrapper>
      <Styles.InStockWrapper>
        <Styles.Label>
          В наличии:
        </Styles.Label>
        <Styles.InStock type="checkbox" />
      </Styles.InStockWrapper>
    </Styles.Wrapper>
  );
};
