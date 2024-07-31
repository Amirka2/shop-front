import React, {useEffect, useState} from 'react';
import { observer } from "mobx-react";
import { useParams } from "react-router";
import {Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

import {CeoData, ItemsGrid, MainWrapper, PagePlaceHolder} from "@/shared/components";
import { CeoPagesData } from '@/shared/constants';
import { useStores } from "@/shared/hooks";
import { MainLayout } from "@/shared/ui/Layouts";
import {productBackToFront} from "@/shared/libs";
import { ProductCard } from "@/widgets";

import {getProductsInSubCategory} from "../api";

export const ProductsPage = observer(() => {
    const { productsStore } = useStores();
    const { subCategoryId, manufacturerId } = useParams();

    const [isLoading, setLoading] = useState(true);

    const { products } = productsStore;
    let itemsComponents = products?.map(i => <ProductCard key={i.id} {...i}/>);

    useEffect(() => {
        setLoading(true);

        const get = async () => await getProductsInSubCategory(Number(subCategoryId), Number(manufacturerId))

        const response = get();

        response.then(result => {
            const frontProducts = result?.map(p => {
                return productBackToFront(p)
            });
            const groupedProducts = frontProducts
              ?.filter(p => p.manufacturerId === Number(manufacturerId))

            productsStore.set(groupedProducts);
            setLoading(false);
        })

        return productsStore.clear;
    }, []);

    if (isLoading) {
        return (
          <MainLayout>
            <CeoData {...CeoPagesData.products} />
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
            <CeoData {...CeoPagesData.products} />
            <MainWrapper>
                <ItemsGrid style={{
                    justifyContent: 'center',
                }}>
                    {itemsComponents}
                </ItemsGrid>
            </MainWrapper>
        </MainLayout>
    );
});
