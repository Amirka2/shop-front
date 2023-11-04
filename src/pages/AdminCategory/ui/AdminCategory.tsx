import React, {useEffect, useRef, useState} from 'react';

import {Container} from "@/shared/components";

import {CATEGORIES, createCategory} from '../api';
import * as Styles from './AdminCategory.styles';
import {SubCategories} from "./SubCategories";
import {subCategories as SubCategoriesData} from "@/app/shop/mock";
import {Editor} from "./Editor";
import {useNavigate} from "react-router";
import {Back} from "@/shared/ui";

export const AdminCategory = () => {
    const [isEditorOpen, setEditorOpen] = useState(false);
    const [categoryName, setCategoryName] = useState('');
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategoryName(e.target.value);
    }
    const handleSave = () => {
        createCategory({
            title: categoryName,
        });
        setCategoryName('');
        setEditorOpen(false);
    }
    const reloadRef = useRef(null);
    useEffect(() => {
        console.log('rerendered');
    }, [reloadRef])

    const navigate = useNavigate();

    return (
        <main>
            <Container>
                <Styles.Wrapper>
                    <Styles.BackButton onClick={() => navigate(-1)}>
                        <Back />
                    </Styles.BackButton>

                    <Styles.ContentWrapper>
                        <Styles.AddCategoryWrapper>
                            <Styles.AddCategory onClick={() => setEditorOpen(prev => !prev)}>
                                {isEditorOpen ? '-' : '+'}
                            </Styles.AddCategory>
                        </Styles.AddCategoryWrapper>

                        <Styles.Categories>
                            {CATEGORIES.map(category => {
                                return (
                                    <Styles.Category>
                                        <Styles.Title>
                                            {category.title}
                                        </Styles.Title>
                                        <SubCategories
                                            categoryId={category.id}
                                            subCategories={SubCategoriesData}
                                        />
                                    </Styles.Category>
                                )
                            })}
                        </Styles.Categories>

                        {isEditorOpen && (
                            <Editor
                                inputState={categoryName}
                                placeholder={'Название категории'}
                                handleChange={handleChange}
                                handleSave={handleSave}
                                ref={reloadRef}
                            />
                        )}
                    </Styles.ContentWrapper>
                </Styles.Wrapper>
            </Container>
        </main>
    );
};
