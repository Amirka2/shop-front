import React from 'react';
import { useParams } from "react-router";

import { Container } from "@/shared/ui";
import { AdminHeader } from "@/shared/components";

import { getProductById } from "../api";
import { MainInfo } from "./MainInfo";
import { Partition } from "./Partition";

import * as Styles from './AdminProduct.styles';

export const AdminProduct = () => {
    const {
        categoryId,
        subCategoryId,
        productId
    } = useParams();

    const product = getProductById(Number(productId));

    return (
        <Container>
            <Styles.Wrapper>
                <AdminHeader title={product.name} />
                <Styles.InfoWrapper>
                    <Styles.MainInfoWrapper>
                        <MainInfo />
                    </Styles.MainInfoWrapper>
                    <Styles.PartitionWrapper>
                        <Partition />
                    </Styles.PartitionWrapper>
                </Styles.InfoWrapper>
                <Styles.TextAreaWrapper>
                    <Styles.TextArea
                        placeholder={'Описание раздела'}
                    >
                    </Styles.TextArea>
                </Styles.TextAreaWrapper>
            </Styles.Wrapper>
        </Container>
    );
};
