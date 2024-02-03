import React, {useEffect, useState} from 'react';

import * as Styles from './AdditionalInfo.styles';
import {useStores} from "@/shared/hooks";
import {observer} from "mobx-react";
import {IManufacturer, PRODUCT_KEYS} from "@/entities";
import {getManufacturers} from "@/pages/AdminSubCategory/api";

export const AdditionalInfo = observer(() => {
  const { adminProductStore } = useStores();
  const { product } = adminProductStore;

  const [manufacturers, setManufacturers] = useState<IManufacturer[]>([]);

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

  const handleManufacturerSelect = (id: number) => {
      if (adminProductStore.product) {
        adminProductStore.product.manufacturerId = id;
      }
  }

  useEffect(() => {
    getManufacturers()
      .then(res => {
        setManufacturers(res);
      })
  }, []);

  return (
    <Styles.Wrapper>
      <Styles.DescriptionWrapper>
        <Styles.Label>
          Короткое описание:
        </Styles.Label>
        <Styles.Description
          value={product?.shortDescription}
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
      <Styles.Input>
        <Styles.Title>
          Производитель
        </Styles.Title>
        <Styles.Select
          onChange={(e) =>
            handleManufacturerSelect(Number(e.target.value))}
        >
          {manufacturers.map((m, i) => (
            <option
              value={m.id}
              selected={adminProductStore.product?.manufacturerId === m.id}
              key={m.id}
            >
              {m.name}
            </option>
          ))}
        </Styles.Select>
      </Styles.Input>
    </Styles.Wrapper>
  );
});
