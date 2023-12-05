import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";

import {Container} from "@/shared/ui";
import {AdminHeader} from "@/shared/components";
import {useStores} from "@/shared/hooks";
import {DocumentEditor} from "@/widgets";

import {getProductById} from "../api";
import {MainInfo} from "./MainInfo";
import {Partition} from "./Partition";

import * as Styles from './AdminProduct.styles';

export const AdminProduct = () => {
  const {
    categoryId,
    subCategoryId,
    productId
  } = useParams();
  const {adminProductStore} = useStores();

  const { product } = adminProductStore;
  const productName = product?.name || '';

  useEffect(() => {
    const response = getProductById(Number(productId));
    response.then(result => {
      adminProductStore.set(result);
      console.log(result)
    })
    return adminProductStore.clear;

  }, []);

  const [isEditorOpen, setEditorOpen] = useState(false);
  const [descriptionId, setDescriptionId] = useState(0);
  if (product && product.description && product?.description?.[descriptionId]) {
    console.log(product)
  }

  return (
    <Container>
      <Styles.Wrapper>
        <AdminHeader title={productName}/>
        <Styles.InfoWrapper>
          <Styles.MainInfoWrapper>
            <MainInfo/>
          </Styles.MainInfoWrapper>
          <Styles.PartitionWrapper>
            <Partition descriptionId={descriptionId} setDescriptionId={setDescriptionId} setEditorOpen={setEditorOpen}/>
          </Styles.PartitionWrapper>
        </Styles.InfoWrapper>
        {isEditorOpen && (
          <Styles.TextAreaWrapper>
            {product && product.description && product.description[descriptionId] && (
              <DocumentEditor
                description={product.description[descriptionId].body}
                descriptionId={descriptionId}
                setDescriptionId={setDescriptionId}
                setEditorOpen={setEditorOpen}
              />
            )}
          </Styles.TextAreaWrapper>
        )}
      </Styles.Wrapper>
    </Container>
  );
};
