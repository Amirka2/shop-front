import React, {Dispatch} from 'react';
import {observer} from "mobx-react";

import {useStores, useToken} from "@/shared/hooks";
import {getPhotoUrl} from "@/shared/libs";
import {PhotoUpload, SavedPhoto} from "@/shared/components";
import {deletePhoto} from "@/pages/AdminProduct/api";

import * as Styles from './MainInfo.styles';

export const MainInfo = observer(({setPhotos}: { setPhotos: Dispatch<React.SetStateAction<Blob[]>> }) => {
  const [token] = useToken();
  const {adminProductStore} = useStores();
  const { isLoading, setLoading } = adminProductStore;
  const {product} = adminProductStore;

  const handlePhotoDelete = async (id: number) => {
    setLoading(true);
    const response = await deletePhoto(token, id);
    if (response && response?.ok) {
      adminProductStore.deletePhotoFromStore(id);
    }
    setLoading(false);
  }

  const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.currentTarget.value;
    if (product) {
      adminProductStore.set({
        ...product,
        name: newName,
      })
    }
  }

  const handleProductPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = e.currentTarget.value;
    if (product) {
      adminProductStore.set({
        ...product,
        price: Number(newPrice),
      })
    }
  }

  return (
    <Styles.Wrapper>
      <Styles.Header>
        <Styles.Label>
          Название:
        </Styles.Label>
        <Styles.Input
          as="input"
          placeholder={'Название товара'}
          value={product?.name}
          onChange={handleProductNameChange}
        />
      </Styles.Header>
      <Styles.Photos>
        <Styles.SavedPhotos>
          {product && product.photos && product.photos.map(p => (
            <SavedPhoto
              key={p.id}
              src={getPhotoUrl(p.link)}
              alt={p.link}
              onClick={() => handlePhotoDelete(p.id || 0)}
            />
          ))}
        </Styles.SavedPhotos>
        <PhotoUpload setPhotosBlob={setPhotos}/>
      </Styles.Photos>
      <Styles.Footer>
        <Styles.Label>
          Цена:
        </Styles.Label>
        <Styles.Input
          as="input"
          placeholder={'Цена товара'}
          value={product?.price}
          onChange={handleProductPriceChange}
        />
        <Styles.Label>
          Руб.
        </Styles.Label>
      </Styles.Footer>
    </Styles.Wrapper>
  );
});
