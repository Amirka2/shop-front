import React from 'react';
import {Wrapper, Ul, Li} from "./Categories.styles";

export interface CategoriesProps {
    categories: string[];
}
export const Categories = ({categories}: CategoriesProps) => {
    const liElements = categories.map((category) => {
        return (
            <Li>{category}</Li>
        );
    })

    return (
        <Wrapper>
            <h2>
                <span>Категории</span>
            </h2>
            <Ul>
                {liElements}
            </Ul>
        </Wrapper>
    );
};
