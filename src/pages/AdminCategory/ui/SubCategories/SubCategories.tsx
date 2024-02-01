import React, {useRef, useState} from 'react';
import {observer} from "mobx-react";
import {Spin} from "antd";

import {ISubCategory} from "@/entities";
import {Editor} from "@/pages/AdminCategory/ui/Editor";
import {useStores, useToken} from "@/shared/hooks";
import {getPhotoUrl, postFiles} from "@/shared/libs";
import {Cross, Minus, Plus} from "@/shared/ui";

import {createSubCategory, deleteSubCategory} from "../../api";

import * as Styles from "./SubCategories.styles";

interface SubCategoriesProps {
  categoryId: number;
  subCategories: ISubCategory[];
  updateData: () => void;
}

export const SubCategories = observer(({categoryId, subCategories, updateData}: SubCategoriesProps) => {
  const [isEditorOpen, setEditorOpen] = useState(false);
  const [photos, setPhotos] = useState<Blob[]>([]);

  const {subCategoriesStore} = useStores();
  const {setAdminSubCategoryName, isLoading} = subCategoriesStore;
  const adminSubCategory = subCategoriesStore.getAdminSubCategory();

  const [token] = useToken();

  const handleDeleteClick = (id: number) => {
    deleteSubCategory(token, id)
      .then(() => updateData());
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdminSubCategoryName(e.target.value);
  }

  const handleSave = async () => {
    if (photos) {
      const response = await postFiles(token, photos);

      if (response?.[0].ok) {
        const photoName = response?.[0].body?.fileName;

        if (photoName) {
          subCategoriesStore.setAdminSubCategoryPhoto(photoName);
        } else {
          console.error("Имя файла в ответе не найдено!");
        }
      }
    }

    createSubCategory(token, {
      categoryId,
      title: adminSubCategory.name,
      photo: adminSubCategory.subgroupPhotoLink || 'Без фото',
    }).then(() => {
      updateData();
    })

    subCategoriesStore.clearAdminSubCategory();
    setEditorOpen(false);
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSave();
    }
  };
  const reloadRef = useRef(null);

  return isLoading ? (<Spin/>) : (
    <Styles.Wrapper>
      <Styles.AddSubCategory onClick={() => setEditorOpen(prev => !prev)}>
        {isEditorOpen ? <Minus /> : <Plus />}
      </Styles.AddSubCategory>
      <Styles.SubCategories>
        <ul>
          {subCategories.map(subCategory => (
            <Styles.SubCategory key={subCategory.id}>
              <Styles.Flex>
                <Styles.Photo src={getPhotoUrl(subCategory.subgroupPhotoLink)}/>
                <Styles.Title>
                  <Styles.StyledLink to={`/admin/${categoryId}/${subCategory.id}`}>
                    {subCategory.name}
                  </Styles.StyledLink>
                </Styles.Title>
              </Styles.Flex>
              <Styles.DeleteButton size="S" onClick={() => handleDeleteClick(subCategory.id)}>
                <Cross />
              </Styles.DeleteButton>
            </Styles.SubCategory>
          ))}
        </ul>
      </Styles.SubCategories>
      {isEditorOpen && (
        <Editor
          nameInput={adminSubCategory.name}
          placeholder={'Название подкатегории'}
          handleNameInputChange={handleChange}
          handleSave={handleSave}
          handleKeyPress={handleKeyPress}
          setPhotosBlob={setPhotos}
          ref={reloadRef}
        />
      )}
    </Styles.Wrapper>
  );
});
