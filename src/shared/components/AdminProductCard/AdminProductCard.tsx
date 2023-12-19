import React, {useEffect} from 'react';
import {IProduct} from "@/entities";
import * as Styles from './AdminProductCard.styles';
import { Delete as DeleteIcon } from "@/shared/ui";
import {Link} from "react-router-dom";

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
                        <Styles.MainPhoto src={product.photos.at(0)}/>
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
                    <Styles.CircleButton color={'#E94D4D'} onClick={toggleStock} />
                    <Styles.CircleButton color={'#5CD969'} onClick={toggleStock} />
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
