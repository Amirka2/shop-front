import React, {useEffect, useRef, useState} from 'react';

import {CATEGORIES, createCategory} from '../api';

import * as Styles from './AdminCategory.styles';

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

    return (
        <Styles.Wrapper>
            <Styles.Categories>
                {CATEGORIES.map(category => {
                    return (
                        <Styles.Category>
                            <h1>{category.title}</h1>
                            <ul>
                                {category.subCategories.map(subCategory => <li>{subCategory}</li>)}
                            </ul>
                        </Styles.Category>
                    )
                })}
            </Styles.Categories>
            <Styles.AddCategory onClick={() => setEditorOpen(prev => !prev)}>
                {isEditorOpen ? '-' : '+'}
            </Styles.AddCategory>
            {isEditorOpen && (
                <Styles.EditorWindow>
                    <Styles.Editor
                        value={categoryName}
                        placeholder={'Название категории'}
                        onChange={handleChange}
                    />
                    <Styles.SaveButton
                        ref={reloadRef}
                        onClick={handleSave}
                    >
                        Сохранить
                    </Styles.SaveButton>
                </Styles.EditorWindow>
            )}
        </Styles.Wrapper>
    );
};
