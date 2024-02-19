import React from 'react';

import {IManufacturer} from "@/entities";
import {Card} from "@/shared/components";
import {getPhotoUrl} from "@/shared/libs";

import * as Styles from "@/entities/Cards/SubCategoryCard/SubCategory.styles";

export const ManufacturerCard = (props: IManufacturer & {
  photoSrc: string;
  count: number;
}) => {
  const {
    id,
    name,
    photoSrc,
    count,
  } = props;

  return (
    <Card linkTo={id + '/products'} photoSrc={getPhotoUrl(photoSrc)}>
      <Styles.SubCategoryInfoWrapper>
        <Styles.Title>
          {name}
        </Styles.Title>
        <Styles.Count>
          {`Товаров: ${count}`}
        </Styles.Count>
      </Styles.SubCategoryInfoWrapper>
    </Card>
  );
};
