import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {observer} from "mobx-react";

import {Container} from "@/shared/ui";
import {AdminHeader} from "@/shared/components";
import {useStores} from "@/shared/hooks";
import {DocumentEditor} from "@/widgets";
import {IDescriptionData} from "@/entities/interfaces";

import {getProductById} from "../api";
import {MainInfo} from "./MainInfo";
import {Partition} from "./Partition";


import * as Styles from './AdminProduct.styles';

export const AdminProduct = observer(() => {
  const {
    categoryId,
    subCategoryId,
    productId
  } = useParams();
  const {adminProductStore} = useStores();
  const [isEditorOpen, setEditorOpen] = useState(false);
  const [descriptionId, setDescriptionId] = useState(0);
  const [currentDescription, setCurrentDescription] = useState<IDescriptionData | undefined>(undefined);

  const { product } = adminProductStore;
  const productName = product?.name || '';

  useEffect(() => {
    const response = getProductById(Number(productId));
    response.then(result => {
      adminProductStore.set(result);
      console.log(result)
      setCurrentDescription(adminProductStore.getDescription(descriptionId))
    })


    return adminProductStore.clear;
  }, []);

  useEffect(() => {
    if (product) {
      setCurrentDescription(adminProductStore.getDescription(descriptionId))
    }
  }, [descriptionId]);

  return (
    <Container>
      <Styles.Wrapper>
        <AdminHeader title={productName}/>
        <Styles.InfoWrapper>
          <Styles.MainInfoWrapper>
            <MainInfo/>
          </Styles.MainInfoWrapper>
          <Styles.PartitionWrapper>
            <Partition
              descriptionId={descriptionId}
              setDescriptionId={setDescriptionId}
              setEditorOpen={setEditorOpen}
              setCurrentDescription={setCurrentDescription}
            />
          </Styles.PartitionWrapper>
        </Styles.InfoWrapper>
        {isEditorOpen && (
          <Styles.TextAreaWrapper>
            {currentDescription && (
              <DocumentEditor
                description={currentDescription.body}
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
});
