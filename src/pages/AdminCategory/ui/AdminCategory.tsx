import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router";
import {observer} from "mobx-react";
import {Dictionary} from 'lodash'
import {useCookies} from "react-cookie";

import {Container} from "@/shared/components";
import {useStores} from "@/shared/hooks";
import {Back} from "@/shared/ui";
import {ISubCategory} from "@/entities";

import {SubCategories} from "./SubCategories";
import {Editor} from "./Editor";

import {
  createCategory,
  getCategories,
  getSubCategories,
  groupSubCategories,
} from '../api';

import * as Styles from './AdminCategory.styles';

export const AdminCategory = observer(() => {
  const [groupedSubCategories, setGroupedSubCategories] = useState<Dictionary<ISubCategory[]>>();
  const [isEditorOpen, setEditorOpen] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [isLoading, setLoading] = useState(false);

  const [cookies] = useCookies(['token']);
  const { token } = cookies;

  const { categoriesStore, subCategoriesStore } = useStores();
  const { categories } = categoriesStore;
  const { subCategories } = subCategoriesStore;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value);
  }

  const handleSave = () => {
    setLoading(true);
    createCategory(token , {
      title: categoryName
    }).then(() => setLoading(false));

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
    setLoading(true);
    getCategories()
      .then(res => {
        categoriesStore.set(res);
        setLoading(false);
      });
    getSubCategories()
      .then(res => {
        subCategoriesStore.set(res);

        const grouped = groupSubCategories(subCategories);
        setGroupedSubCategories(grouped);
        setLoading(false);
      })
  }, [])

  useEffect(() => {
    getCategories()
      .then(res => {
        categoriesStore.set(res);
      });
    getSubCategories()
      .then(res => {
        subCategoriesStore.set(res);

        const grouped = groupSubCategories(subCategories);
        setGroupedSubCategories(grouped);
      })
  }, [isLoading])

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
            {categories && categories.map(category => (
                <Styles.Category>
                  <Styles.Title>
                    {category.name}
                  </Styles.Title>
                  {groupedSubCategories && (
                    <SubCategories
                      categoryId={category.id}
                      subCategories={groupedSubCategories?.[category.id] || []}
                    />
                  )}
                </Styles.Category>
              )
            )}
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
