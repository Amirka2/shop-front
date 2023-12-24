import React from 'react';

import * as Styles from './AdditionalInfo.styles';
import {useStores} from "@/shared/hooks";
import {observer} from "mobx-react";
import {PRODUCT_KEYS} from "@/entities";

export const AdditionalInfo = observer(() => {
  const { adminProductStore } = useStores();
  const { product } = adminProductStore;

  const handleToggleChange = () => {
      if (product && product.inStock) {
        product.inStock = !product.inStock;
      } else {
        adminProductStore.addProductField(PRODUCT_KEYS.IN_STOCK, true);
      }
  }

  const handleShortDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;

    if (product && product.shortDescription) {
      product.shortDescription = value;
    } else {
      adminProductStore.addProductField(PRODUCT_KEYS.SHORT_DESCRIPTION, value);
    }
  }

  return (
    <Styles.Wrapper>
      <Styles.DescriptionWrapper>
        <Styles.Label>
          Короткое описание:
        </Styles.Label>
        <Styles.Description
          onChange={handleShortDescriptionChange}
        />
      </Styles.DescriptionWrapper>
      <Styles.InStockWrapper>
        <Styles.Label>
          В наличии:
        </Styles.Label>
        <Styles.InStock
          type="checkbox"
          onChange={handleToggleChange}
          checked={product?.inStock}
        />
      </Styles.InStockWrapper>
    </Styles.Wrapper>
  );
});
