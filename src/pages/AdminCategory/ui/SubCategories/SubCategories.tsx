import React, {useEffect, useRef, useState} from 'react';
import {ISubCategory} from "@/entities";
import {createSubCategory} from "../../api";
import {Editor} from "@/pages/AdminCategory/ui/Editor";
import * as Styles from "./SubCategories.styles";

interface SubCategories {
    categoryId: number;
    subCategories: ISubCategory[];
}

export const SubCategories = ({categoryId, subCategories}: SubCategories) => {
    const [isEditorOpen, setEditorOpen] = useState(false);
    const [subCategoryName, setSubCategoryName] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSubCategoryName(e.target.value);
    }
    const handleSave = () => {
        createSubCategory({
            title: subCategoryName,
            categoryId,
        });
        setSubCategoryName('');
        setEditorOpen(false);
    }
    const reloadRef = useRef(null);
    useEffect(() => {
        console.log('rerendered subCat');
    }, [reloadRef])

    // TODO create subCategories with products page
    return (
        <Styles.Wrapper>
            <Styles.AddSubCategory onClick={() => setEditorOpen(prev => !prev)}>
                {isEditorOpen ? '-' : '+'}
            </Styles.AddSubCategory>
            <Styles.SubCategories>
                {subCategories.map(subCategory => (
                    <ul>
                        <Styles.SubCategory key={subCategory.id}>
                            <Styles.Title>
                                <Styles.StyledLink to={`/admin/${categoryId}/${subCategory.id}`}>
                                    {subCategory.name}
                                </Styles.StyledLink>
                            </Styles.Title>
                        </Styles.SubCategory>
                    </ul>
                ))}
            </Styles.SubCategories>
            {isEditorOpen && (
                <Editor
                    inputState={subCategoryName}
                    placeholder={'Название подкатегории'}
                    handleChange={handleChange}
                    handleSave={handleSave}
                    ref={reloadRef}
                />
            )}
        </Styles.Wrapper>
    );
};
