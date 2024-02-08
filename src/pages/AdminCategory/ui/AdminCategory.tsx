import React, {useEffect, useRef, useState} from 'react';
import {observer} from "mobx-react";
import {Dictionary} from 'lodash'

import {useStores, useToken} from "@/shared/hooks";
import {Cross, Edit, Minus, PageLoader, Plus} from "@/shared/ui";
import {ISubCategory} from "@/entities";
import {getPhotoUrl, postFiles} from "@/shared/libs";
import {AdminLayout} from "@/shared/ui/Layouts";
import {Modal} from "@/shared/components/Modal";
import {CategoryEditor} from "@/widgets";

import {SubCategories} from "./SubCategories";
import {Editor} from "./Editor";

import {
  changeCategory,
  ChangeCategoryProps,
  createCategory,
  deleteCategory,
  getCategories,
  getSubCategories,
  groupSubCategories
} from '../api';

import * as Styles from './AdminCategory.styles';

export const AdminCategory = observer(() => {
  const [groupedSubCategories, setGroupedSubCategories] = useState<Dictionary<ISubCategory[]>>();
  const [isEditorOpen, setEditorOpen] = useState(false);
  const [photos, setPhotos] = useState<Blob[]>([]);

  const [token] = useToken();

  const {categoriesStore, subCategoriesStore} = useStores();
  const {categories, setLoading} = categoriesStore;
  const adminCategory = categoriesStore.getAdminCategory();
  const {subCategories} = subCategoriesStore;
  const isLoading = categoriesStore.getIsLoading();

  const handleCategoryNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    categoriesStore.setCategoryName(e.target.value);
  }

  const handleSave = async () => {
    setLoading(true);

    if (photos) {
      const response = await postFiles(token, photos);

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

  return isLoading ? (
    <PageLoader/>
  ) : (
    <AdminLayout>
      <Styles.ContentWrapper>
        <Styles.AddCategoryWrapper>
          <Styles.AddCategory onClick={() => setEditorOpen(prev => !prev)}>
            {isEditorOpen ? <Minus/> : <Plus/>}
          </Styles.AddCategory>
        </Styles.AddCategoryWrapper>

        <Styles.Categories>
          {categories && categories.map(category => (
              <Category
                key={category.id}
                category={category}
                updateData={updateData}
                token={token}
                groupedSubCategories={groupedSubCategories}
              />
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
            isSubmitDisabled={photos.length === 0}
          />
        )}
      </Styles.ContentWrapper>
    </AdminLayout>
  );
});

const Category = ({category, groupedSubCategories, updateData, token}: any) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCategoryChangeSubmit = (submitData: ChangeCategoryProps) => {
    changeCategory(token, submitData)
      .then(() => {
        updateData();
      })
  }

  const handleDeleteClick = (id: number) => {
    deleteCategory(token, id).then(() => updateData());
  }

  return (
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
          <div onClick={() => setModalOpen(true)}>
            <Edit />
          </div>
          <Modal
            isModalOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
          >
            <CategoryEditor
              id={category.id}
              name={category.name}
              photoLink={category.groupPhotoLink}
              onSubmit={handleCategoryChangeSubmit}
            />
          </Modal>
          <Styles.DeleteButton size="S" onClick={() => handleDeleteClick(category.id)}>
            <Cross/>
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
}
