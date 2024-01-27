import React, {Dispatch} from 'react';
import {useCookies} from "react-cookie";
import {observer} from "mobx-react";

import {Edit, Plus} from "@/shared/ui";
import {useStores} from "@/shared/hooks";
import {getPhotoUrl} from "@/shared/libs";
import {PhotoUpload, SavedPhoto} from "@/shared/components";
import {deletePhoto} from "@/pages/AdminProduct/api";

import * as Styles from './MainInfo.styles';

export const MainInfo = observer(({setPhotos}: { setPhotos: Dispatch<React.SetStateAction<Blob[]>> }) => {
  const [cookies] = useCookies(['token']);
  const {token} = cookies;
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
        <Styles.Button>
          <Plus width={28} height={28}/>
        </Styles.Button>
        <Styles.Input
          as="input"
          placeholder={'Название товара'}
          value={product?.name}
          onChange={handleProductNameChange}
        />
        <Styles.EditIconButton>
          <Edit/>
        </Styles.EditIconButton>
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
        <Styles.Input
          as="input"
          placeholder={'Цена товара'}
          value={product?.price}
          onChange={handleProductPriceChange}
        />
        <Styles.EditIconButton>
          <Edit/>
        </Styles.EditIconButton>
      </Styles.Footer>
    </Styles.Wrapper>
  );
});
