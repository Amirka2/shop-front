import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

import {IProduct} from "@/entities";
import { Delete as DeleteIcon } from "@/shared/ui";
import {getPhotoUrl} from "@/shared/libs";

import * as Styles from './AdminProductCard.styles';

interface AdminProductCardProps {
    product: IProduct;
    handleDelete: (id: number) => void;
}

export const AdminProductCard = ({
    product,
    handleDelete : handleDeleteClick
}: AdminProductCardProps) => {
    const toggleStock = () => {

    }

    useEffect(() => {

    }, [toggleStock, handleDeleteClick]);

    return (
        <Link to={String(product.id)}>
            <Styles.Wrapper>
                <Styles.PhotoWrapper>
                    {product.photos && (
                        <Styles.MainPhoto src={getPhotoUrl(product.photos.at(0)?.link || '')}/>
                    )}
                </Styles.PhotoWrapper>
                <Styles.MainText>
                    {product.name}
                </Styles.MainText>
                <Styles.MainText>
                    {`${product.price} Руб`}
                </Styles.MainText>
                <Styles.Description>
                    {product.shortDescription}
                </Styles.Description>
                <Styles.InStockToggler>
                    {product.inStock ? (
                    <Styles.CircleButton color={'#5CD969'} onClick={toggleStock} />
                    ): (
                    <Styles.CircleButton color={'#E94D4D'} onClick={toggleStock} />
                    )}
                </Styles.InStockToggler>
                <Styles.DeleteIconWrapper onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    handleDeleteClick(product.id);
                }}>
                    <DeleteIcon />
                </Styles.DeleteIconWrapper>
            </Styles.Wrapper>
        </Link>
    );
};
