import React, { useRef, useState} from 'react';

import {ISubCategory} from "@/entities";
import {createSubCategory, deleteSubCategory} from "../../api";
import {Editor} from "@/pages/AdminCategory/ui/Editor";

import * as Styles from "./SubCategories.styles";
import {useCookies} from "react-cookie";
import {Spin} from "antd";

interface SubCategoriesProps {
    categoryId: number;
    subCategories: ISubCategory[];
    updateData: () => void;
    isLoading: boolean;
}

export const SubCategories = ({categoryId, subCategories, updateData, isLoading}: SubCategoriesProps) => {
    const [isEditorOpen, setEditorOpen] = useState(false);
    const [subCategoryName, setSubCategoryName] = useState('');

    const [cookies] = useCookies(['token']);
    const { token } = cookies;

    const handleDeleteClick = (id: number) => {
        deleteSubCategory(token, id)
          .then(() => updateData());
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSubCategoryName(e.target.value);
    }

    const handleSave = () => {
        createSubCategory(token, {
            title: subCategoryName,
            categoryId,
        }).then(() => {
            updateData();
        })

        setSubCategoryName('');
        setEditorOpen(false);
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSave();
        }
    };
    const reloadRef = useRef(null);


    return isLoading ? (<Spin />) : (
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
                            <Styles.DeleteButton size="S" onClick={() => handleDeleteClick(subCategory.id)}>
                                Удалить
                            </Styles.DeleteButton>
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
                    handleKeyPress={handleKeyPress}
                    ref={reloadRef}
                />
            )}
        </Styles.Wrapper>
    );
};
