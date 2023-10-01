import React, {useEffect, useRef, useState} from 'react';

import {SUB_CATEGORY, createSubCategory} from '../api';

import * as Styles from './AdminSubCategory.styles';

export const AdminSubCategory = () => {
    const [isEditorOpen, setEditorOpen] = useState(false);
    const [subCategoryName, setSubCategoryName] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSubCategoryName(e.target.value);
    }
    const handleSave = () => {
        createSubCategory({
            title: subCategoryName,
        });
        setSubCategoryName('');
        setEditorOpen(false);
    }
    const reloadRef = useRef(null);
    useEffect(() => {
        console.log('rerendered');
    }, [reloadRef])

    return (
        <Styles.Container>
            <Styles.Wrapper>
                <Styles.MetaInfo>
                    <span>{SUB_CATEGORY.categoryTitle}</span>
                    <span>/</span>
                    <span>{SUB_CATEGORY.subCategoryTitle}</span>
                </Styles.MetaInfo>
                <Styles.Products>
                    {SUB_CATEGORY.products.map(product => {
                        return (
                            <ul>
                                <li>{product.title}</li>
                            </ul>
                        )
                    })}
                </Styles.Products>
                <Styles.AddSubCategory onClick={() => setEditorOpen(prev => !prev)}>
                    {isEditorOpen ? '-' : '+'}
                </Styles.AddSubCategory>
                {isEditorOpen && (
                    <Styles.EditorWindow>
                        <Styles.Editor
                            value={subCategoryName}
                            placeholder={'Название подкатегории'}
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
        </Styles.Container>
    );
};
