import React, {useEffect, useRef, useState} from 'react';
import {observer} from "mobx-react";

import {Container} from "@/shared/components";
import {useStores} from "@/shared/hooks";
import {Back} from "@/shared/ui";

import {SubCategories} from "./SubCategories";
import {Editor} from "./Editor";
import {useNavigate} from "react-router";

import {createCategory, getCategories, getSubCategories} from '../api';

import * as Styles from './AdminCategory.styles';

export const AdminCategory = observer(() => {
  const [isEditorOpen, setEditorOpen] = useState(false);
  const [categoryName, setCategoryName] = useState('');

  const { categoriesStore, subCategoriesStore } = useStores();
  const { categories } = categoriesStore;
  const { subCategories } = subCategoriesStore;

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
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSave();
    }
  };
  const reloadRef = useRef(null);
  useEffect(() => {
    getCategories()
      .then(res => {
        categoriesStore.set(res);
      });
    getSubCategories()
      .then(res => {
        subCategoriesStore.set(res);
      })
  }, [])

  const navigate = useNavigate();

  return (
    <Styles.Wrapper>
      <Container>

        <Styles.BackButton onClick={() => navigate(-1)}>
          <Back/>
        </Styles.BackButton>

        <Styles.ContentWrapper>
          <Styles.AddCategoryWrapper>
            <Styles.AddCategory onClick={() => setEditorOpen(prev => !prev)}>
              {isEditorOpen ? '-' : '+'}
            </Styles.AddCategory>
          </Styles.AddCategoryWrapper>

          <Styles.Categories>
            {categories && categories.map(category => {
              return (
                <Styles.Category>
                  <Styles.Title>
                    {category.name}
                  </Styles.Title>
                  <SubCategories
                    categoryId={category.id}
                    subCategories={subCategories}
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
      </Container>
    </Styles.Wrapper>
  );
});
