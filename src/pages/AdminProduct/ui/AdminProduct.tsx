import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {observer} from "mobx-react";
import {useCookies} from "react-cookie";

import {createProductFromNullable, postFiles} from "@/shared/libs";
import {Button, PageLoader} from "@/shared/ui";
import {AdminHeader} from "@/shared/components";
import {useStores} from "@/shared/hooks";
import {DocumentEditor} from "@/widgets";
import {AdditionalInfo} from "@/pages/AdminProduct/ui/AdditionalInfo";

import {changeDescription, changeProduct, createDescription, createPhoto, getProductById} from "../api";
import {MainInfo} from "./MainInfo";
import {Partition} from "./Partition";

import * as Styles from './AdminProduct.styles';
import {AdminLayout} from "@/shared/ui/Layouts";

export const AdminProduct = observer(() => {
  const {
    categoryId,
    subCategoryId,
    productId
  } = useParams();
  const {adminProductStore, descriptionsStore} = useStores();
  const [cookies] = useCookies(['token']);
  const [photos, setPhotos] = useState<Blob[]>([]);

  const {product, isLoading} = adminProductStore;
  const {setLoading} = adminProductStore;
  const descriptions = descriptionsStore.descriptions;
  const currentDescription = descriptionsStore.getActiveDescription();
  const productName = product?.name || '';

  const {token} = cookies;

  const handleSaveProduct = async () => {
    setLoading(true);

    const backDescriptions = adminProductStore.product?.productDescriptions;

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

    if (descriptions) {
      descriptions.forEach(description => {
        const isBackDescription = backDescriptions && Boolean(backDescriptions.find(d => d.id === description.id));
        const backDescription = backDescriptions?.filter(d => d.id === description.id)[0];
        const isEditedDescription =
          backDescriptions && ((
            backDescription?.header !== description.header) || (
            backDescription?.text !== description.text));

        if (!isBackDescription) {
          const response = createDescription(token, {
            productId: Number(productId),
            header: description.header || '',
            text: description.text || '',
          })
        }

        if (isEditedDescription) {
          const response = changeDescription(token, {
            productId: Number(productId),
            id: description.id,
            header: description.header || '',
            text: description.text || '',
          })
        }
      })
    }

    if (product) {
      const resultProduct = createProductFromNullable(product, adminProductStore.photos);
      changeProduct(token, resultProduct)
        .then(() => {
          setPhotos([]);
          setLoading(false);
        })
    }
  }

  useEffect(() => {
    const response = getProductById(Number(productId));
    response.then(result => {
      adminProductStore.set(result);
      if (result.productDescriptions) {
        descriptionsStore.set(result.productDescriptions);
      }
    })
  }, [isLoading]);

  return isLoading ? (
    <PageLoader/>
  ) : (
    <AdminLayout>
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
          <AdditionalInfo/>
        </Styles.AdditionalInfoWrapper>
        <Styles.PartitionWrapper>
          <Partition/>
        </Styles.PartitionWrapper>
      </Styles.InfoWrapper>
      {currentDescription && (
        <Styles.TextAreaWrapper>
          <DocumentEditor/>
        </Styles.TextAreaWrapper>
      )}
    </AdminLayout>
  );
});

