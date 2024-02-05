import React, {useEffect, useState} from 'react';

import {IProduct} from "@/entities";
import {Check, Delete as DeleteIcon} from "@/shared/ui";
import {getPhotoUrl} from "@/shared/libs";
import {Color} from "@/shared/constants";

import * as Styles from './AdminProductCard.styles';

interface AdminProductCardProps {
    product: IProduct;
    handleDelete: (id: number) => void;
    changePriority: (id: number, priority: number) => void;
}

export const AdminProductCard = ({
    product,
    handleDelete : handleDeleteClick,
    changePriority,
}: AdminProductCardProps) => {
    const [priority, setPriority] = useState(product.priority);

    const toggleStock = () => {

    }

    const handlePriorityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPriority = e.currentTarget.value;
        setPriority(Number(newPriority));
    }

    useEffect(() => {

    }, [toggleStock, handleDeleteClick]);

    return (
        <>
            <Styles.Wrapper>
                <Styles.PriorityBlock>
                    <Styles.Label>
                        Порядок
                    </Styles.Label>
                    <Styles.PriorityWrapper>
                        <Styles.Priority
                          type="text"
                          value={priority}
                          onChange={handlePriorityChange}
                        />
                        <Styles.SavePriorityChange
                          onClick={() => changePriority(product.id, priority)}
                        >
                            <Check color={Color.white} />
                        </Styles.SavePriorityChange>
                    </Styles.PriorityWrapper>
                </Styles.PriorityBlock>
                <Styles.PhotoWrapper>
                    {product.photos && (
                        <Styles.MainPhoto src={getPhotoUrl(product.photos?.[0]?.link || '')}/>
                    )}
                </Styles.PhotoWrapper>
                <Styles.StyledLink
                  to={String(product.id)}
                >
                    <Styles.MainText>
                        {product.name}
                    </Styles.MainText>
                </Styles.StyledLink>
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
        </>
    );
};
