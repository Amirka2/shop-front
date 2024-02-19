import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

import {ManufacturerGroupModel} from "@/entities";
import {MainLayout} from "@/shared/ui/Layouts";
import {ManufacturerCard} from "@/entities/Cards";
import {ItemsGrid, MainWrapper, PagePlaceHolder} from "@/shared/components";

import {getManufacturers} from "../api";

export const Manufacturers = () => {
  const params = useParams();
  const { subCategoryId } = params;

  const [isLoading, setLoading] = useState(true);
  const [manufacturers, setManufacturers] = useState<ManufacturerGroupModel[]>([]);
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    setLoading(true);

    getManufacturers(Number(subCategoryId))
      .then((result) => {
      if (result) {
        const backManufacturers = result?.map(r => r.manufacturer);

        setManufacturers(result);

        const p: string[] = [];
        backManufacturers?.forEach((m, i) =>
          p.push(result?.[i].products?.[0].photos?.[0].link));

        setPhotos(p);
        setLoading(false);
      }
    })
  }, [])

  if (isLoading) {
    return (
      <MainLayout>
        <PagePlaceHolder>
          <Spin indicator={
            <LoadingOutlined
              style={{ fontSize: 120 }}
              spin
            />}
          />
        </PagePlaceHolder>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <MainWrapper>
        <h1>Производители</h1>
        <ItemsGrid>
          {manufacturers.map((m, i) =>
            <ManufacturerCard
              key={m.manufacturer.id}
              id={m.manufacturer.id}
              name={m.manufacturer.name}
              count={m.count}
              photoSrc={photos?.[i] || ''}
            />
          )}
        </ItemsGrid>
      </MainWrapper>
    </MainLayout>
  );
};
