import React from 'react';
import { Container } from "@/shared/ui";

import * as Styles from './AdminProduct.styles';
import { useParams } from "react-router";
import { getProductById } from "../api";
import { AdminHeader } from "@/shared/components";

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
                Product page
            </Styles.Wrapper>
        </Container>
    );
};
