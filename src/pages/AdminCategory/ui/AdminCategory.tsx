import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router";
import {observer} from "mobx-react";
import {Dictionary} from 'lodash'
import {useCookies} from "react-cookie";

import {useStores} from "@/shared/hooks";
import {Back, PageLoader} from "@/shared/ui";
import {ISubCategory} from "@/entities";
import {postFiles, getPhotoUrl} from "@/shared/libs";
import {AdminLayout} from "@/shared/ui/Layouts";

import {SubCategories} from "./SubCategories";
import {Editor} from "./Editor";

import {
  createCategory, deleteCategory,
  getCategories,
  getSubCategories,
  groupSubCategories,
} from '../api';

import * as Styles from './AdminCategory.styles';

export const AdminCategory = observer(() => {
  const [groupedSubCategories, setGroupedSubCategories] = useState<Dictionary<ISubCategory[]>>();
  const [isEditorOpen, setEditorOpen] = useState(false);
  const [photos, setPhotos] = useState<Blob[]>([]);

  const [cookies] = useCookies(['token']);
  const {token} = cookies;

  const {categoriesStore, subCategoriesStore} = useStores();
  const {categories, setLoading} = categoriesStore;
  const adminCategory = categoriesStore.getAdminCategory();
  const {subCategories} = subCategoriesStore;
  const isLoading = categoriesStore.getIsLoading();

  const handleDeleteClick = (id: number) => {
    setLoading(true);
    deleteCategory(token, id).then(() => setLoading(false));
  }

  const handleCategoryNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    categoriesStore.setCategoryName(e.target.value);
  }

  const handleSave = async () => {
    setLoading(true);

    if (photos) {
      const response = await postFiles(photos);

      if (response?.[0].ok) {
        const photoName = response?.[0].body?.fileName;

        if (photoName) {
          categoriesStore.setCategoryPhoto(photoName);
        } else {
          console.error("Имя файла в ответе не найдено!");
        }
      }
    }

    createCategory(token, {
      title: adminCategory.name,
      photo: adminCategory.groupPhotoLink,
    }).then(() => {
      updateData();
    });

    categoriesStore.clearAdminCategory();
    setPhotos([]);
    setEditorOpen(false);
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSave();
    }
  };

  const reloadRef = useRef(null);

  const updateData = () => {
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
  }

  useEffect(() => {
    updateData();
  }, [])

  useEffect(() => {
    const grouped = groupSubCategories(subCategories);
    setGroupedSubCategories(grouped);
  }, [subCategories]);

  const navigate = useNavigate();

  return isLoading ? (
    <PageLoader/>
  ) : (
    <AdminLayout>
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
                <Styles.Flex>
                  {/*<Styles.Photo src={getPhotoUrl(category.groupPhotoLink)} onError={({ currentTarget }) => {*/}
                  {/*  currentTarget.onerror = null; // prevents looping*/}
                  {/*  currentTarget.src="photos/1.jpg";*/}
                  {/*}}/>// FIXME */}
                  <Styles.Photo src={getPhotoUrl(category.groupPhotoLink)}/>
                  <Styles.TitleWrapper>
                    <Styles.Title>
                      {category.name}
                    </Styles.Title>
                    <Styles.DeleteButton size="S" onClick={() => handleDeleteClick(category.id)}>
                      X
                    </Styles.DeleteButton>
                  </Styles.TitleWrapper>
                </Styles.Flex>
                {groupedSubCategories && (
                  <SubCategories
                    categoryId={category.id}
                    subCategories={groupedSubCategories?.[category.id] || []}
                    updateData={updateData}
                  />
                )}
              </Styles.Category>
            )
          )}
        </Styles.Categories>

        {isEditorOpen && (
          <Editor
            nameInput={categoriesStore.getAdminCategory().name}
            placeholder={'Название категории'}
            handleKeyPress={handleKeyPress}
            handleNameInputChange={handleCategoryNameChange}
            handleSave={handleSave}
            setPhotosBlob={setPhotos}
            ref={reloadRef}
          />
        )}
      </Styles.ContentWrapper>
    </AdminLayout>
  );
});
