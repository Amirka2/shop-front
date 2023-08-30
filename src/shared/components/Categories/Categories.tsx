import React, {useState} from 'react';
import {Wrapper, CategoryList, CategoryItem, Button} from "./Categories.styles";
import {Link} from "react-router-dom";

interface Category {
    name: string;
    url: string;
}
export interface CategoriesProps {
    categories: Category[];
}
export const Categories = ({categories}: CategoriesProps) => {
    let count = 10;
    const [more, setMore] = useState(false);
    const [categoriesState, setCategories] = useState(categories.slice(0, count))

    let liElements = categoriesState.map((category) => {
        return (
            <CategoryItem><Link to={category.url}>{category.name}</Link></CategoryItem>
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
            <CategoryList>
                {liElements}
            </CategoryList>
            <Button
                onClick={handleMoreClick}
            >
                {more ? 'Меньше' : 'Больше'}
            </Button>
        </Wrapper>
    );
};
