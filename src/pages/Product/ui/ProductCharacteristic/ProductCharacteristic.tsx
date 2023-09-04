import React from 'react';
import * as Styled from './ProductCharacteristic.styles';
import {IProduct} from "@/entities";

export const ProductCharacteristic = ({price, specifications}: IProduct) => {
    return (
        <Styled.Container>
            <Styled.Title>О товаре:</Styled.Title>
            <Styled.DescriptionList>
                <Styled.DescriptionListItem>
                    <span>
                        Вид
                    </span>
                    <span>
                        {specifications.type}
                    </span>
                </Styled.DescriptionListItem>
                <Styled.DescriptionListItem>
                    <span>Цена</span> <span>{price + ' ₽'}</span>
                </Styled.DescriptionListItem>
                <Styled.DescriptionListItem>
                    <span>Производитель</span> <span>{specifications.manufacturer}</span>
                </Styled.DescriptionListItem>
                <Styled.DescriptionListItem>
                    <span>Страна производства</span> <span>{specifications.manufactureCountry}</span>
                </Styled.DescriptionListItem>
                <Styled.DescriptionListItem>
                    <span>Экспортер</span> <span>Мидкаду</span>
                </Styled.DescriptionListItem>
            </Styled.DescriptionList>
        </Styled.Container>
    );
};
