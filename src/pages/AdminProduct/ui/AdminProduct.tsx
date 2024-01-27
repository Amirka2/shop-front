import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {observer} from "mobx-react";
import {useCookies} from "react-cookie";

import {createProductFromNullable, productBackToFront, postFiles} from "@/shared/libs";
import {Button, Container, PageLoader} from "@/shared/ui";
import {AdminHeader} from "@/shared/components";
import {useStores} from "@/shared/hooks";
import {DocumentEditor} from "@/widgets";
import {IDescriptionData} from "@/entities/interfaces";
import {AdditionalInfo} from "@/pages/AdminProduct/ui/AdditionalInfo";

import {changeProduct, createPhoto, getProductById} from "../api";
import {MainInfo} from "./MainInfo";
import {Partition} from "./Partition";

import * as Styles from './AdminProduct.styles';

export const AdminProduct = observer(() => {
  const {
    categoryId,
    subCategoryId,
    productId
  } = useParams();
  const {adminProductStore, descriptionsStore} = useStores();
  const [cookies] = useCookies(['token']);
  const [photos, setPhotos] = useState<Blob[]>([]);

  const { product, isLoading } = adminProductStore;
  const { setLoading } = adminProductStore;
  const currentDescription = descriptionsStore.getActiveDescription();
  const productName = product?.name || '';

  const { token } = cookies;

  const handleSaveProduct = async () => {
    setLoading(true);

    if (photos && photos.length > 0) {
      const response = await postFiles(photos);

      response.forEach(fileResponse => {
        if (fileResponse.ok) {
          const photoName = fileResponse.body?.fileName;

          if (photoName) {
            createPhoto(token, {
              productId: Number(productId),
              link: photoName
            })
          } else {
            console.error("Имя файла в ответе не найдено!");
          }
        }
      })
    }

    if (product) {
      const resultProduct = createProductFromNullable(product, adminProductStore.photos);
      changeProduct(token, resultProduct)
        .then(res => {
          const frontProduct = productBackToFront(res?.body.product)

          adminProductStore.set(frontProduct);
        })
    }

    setPhotos([]);
    setLoading(false);
  }

  useEffect(() => {
    const response = getProductById(Number(productId));
    response.then(result => {
      adminProductStore.set(result);
    })
  }, [isLoading]);

  return isLoading ? (
    <PageLoader />
  ) : (
    <Container>
      <Styles.Wrapper>
        <AdminHeader title={productName}/>
        <Styles.SaveButtonContainer>
          <Button
            size="M"
            onClick={handleSaveProduct}
          >
            Сохранить изменения
          </Button>
        </Styles.SaveButtonContainer>
        <Styles.InfoWrapper>
          <Styles.MainInfoWrapper>
            <MainInfo setPhotos={setPhotos}/>
          </Styles.MainInfoWrapper>
          <Styles.AdditionalInfoWrapper>
            <AdditionalInfo />
          </Styles.AdditionalInfoWrapper>
          <Styles.PartitionWrapper>
            <Partition
            />
          </Styles.PartitionWrapper>
        </Styles.InfoWrapper>
        {currentDescription && (
          <Styles.TextAreaWrapper>
              <DocumentEditor />
          </Styles.TextAreaWrapper>
        )}
      </Styles.Wrapper>
    </Container>
  );
});

