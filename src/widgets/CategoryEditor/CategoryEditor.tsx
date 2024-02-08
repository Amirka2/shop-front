import React, {useEffect, useState} from 'react';

import {Button} from "@/shared/ui";
import {PhotoUpload, SavedPhoto} from "@/shared/components";
import {getPhotoUrl, postFiles} from "@/shared/libs";
import {useToken} from "@/shared/hooks";

import * as Styles from './CategoryEditor.styles';

interface CategoryEditorProps {
  id: number;
  categoryId?: number;
  photoLink: string;
  name: string;
  onSubmit: (data: any) => void;
}

export const CategoryEditor = ({id, photoLink, name, categoryId, onSubmit}: CategoryEditorProps) => {
  const [currentName, setCurrentName] = useState(name);
  const [currentPhoto, setCurrentPhoto] = useState<string | null>(photoLink);
  const [changedPhoto, setChangedPhoto] = useState<Blob[]>([]);
  const [token] = useToken();

  const handleSavedPhotoDeleteClick = () => {
    setCurrentPhoto(null);
  }

  const sendPhoto = async () => {
    if (changedPhoto.length > 0) {
      const response = await postFiles(token, changedPhoto);

      if (response) {
        const photoName = response?.[0]?.body?.fileName;

        if (photoName) {
          setCurrentPhoto(photoName);
        } else {
          console.error("Имя файла в ответе не найдено!");
        }
      }

      setChangedPhoto([]);
    }
  }

  useEffect(() => {
    sendPhoto();
  }, [changedPhoto]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (currentPhoto) {
      if (categoryId) {
        onSubmit({
          id,
          categoryId,
          title: currentName,
          photo: currentPhoto,
        })
      } else {
        onSubmit({
          id,
          title: currentName,
          photo: currentPhoto,
        })
      }
    } else {
      alert('Нельзя сохранить пока не добавлено новое фото');
    }
  }

  return (
    <Styles.Form onSubmit={handleSubmit}>
      <Button size={"M"}>
        Сохранить
      </Button>

      <Styles.Input
        type="text"
        value={currentName}
        onChange={(e) => setCurrentName(e.currentTarget.value)}
      />

      <Styles.PhotoWrapper>
        {currentPhoto && (
          <SavedPhoto
            src={getPhotoUrl(currentPhoto)}
            onClick={() => handleSavedPhotoDeleteClick()}
          />
        )}
      </Styles.PhotoWrapper>

      {!currentPhoto && (
        <PhotoUpload setPhotosBlob={setChangedPhoto} />
      )}
    </Styles.Form>
  );
};

