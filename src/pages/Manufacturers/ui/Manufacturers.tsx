import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";

import {IManufacturer} from "@/entities";
import {MainLayout} from "@/shared/ui/Layouts";
import {ManufacturerCard} from "@/entities/Cards";
import {ItemsGrid, MainWrapper} from "@/shared/components";

import {getManufacturers, getManufacturersPhotos, getProductsInSubCategory} from "../api";

export const Manufacturers = () => {
  const params = useParams();
  const { subCategoryId } = params;

  const [manufacturers, setManufacturers] = useState<IManufacturer[]>([]);
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    const response = getManufacturers();
    response.then(result => {
      setManufacturers(result);
    })
  }, [])

  useEffect(() => {
      if (manufacturers) {
        getProductsInSubCategory(Number(subCategoryId))
          .then(res => {
            setPhotos(getManufacturersPhotos(res));
          })
      }
    }
  ,[manufacturers])

  return (
    <MainLayout>
      <MainWrapper>
        <h1>Производители</h1>
        <ItemsGrid>
          {manufacturers.map((m, i) =>
            <ManufacturerCard
              key={m.id}
              id={m.id}
              name={m.name}
              photoSrc={photos?.[i] || ''}/>
          )}
        </ItemsGrid>
      </MainWrapper>
    </MainLayout>
  );
};
