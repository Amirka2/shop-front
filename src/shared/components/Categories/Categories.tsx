import React, {useState} from 'react';
import {Wrapper, Ul, Li, Button} from "./Categories.styles";

export interface CategoriesProps {
    categories: string[];
}
export const Categories = ({categories}: CategoriesProps) => {
    let count = 10;
    const [more, setMore] = useState(false);
    const [categoriesState, setCategories] = useState(categories.slice(0, count))

    let liElements = categoriesState.map((category) => {
        return (
            <Li>{category}</Li>
        );
    })
    const handleMoreClick = function() {
        setMore(prev => !prev);
        more
            ? (count = 10)
            : (count = categories.length);
        setCategories(categories.slice(0, count));
    }

    return (
        <Wrapper>
            <h2>
                <span>Категории</span>
            </h2>
            <Ul>
                {liElements}
            </Ul>
            <Button
                onClick={handleMoreClick}
            >
                {more ? 'Меньше' : 'Больше'}
            </Button>
        </Wrapper>
    );
};
