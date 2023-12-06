import React from 'react';

import { Edit, Plus } from "@/shared/ui";
import { DragAndDrop } from "@/shared/components/DragAndDrop";
import useFileSelection from "@/shared/hooks/useFileSelection";
import { useStores } from "@/shared/hooks";
import { IPhoto, PRODUCT_KEYS } from "@/entities/interfaces";

import * as Styles from './MainInfo.styles';
import {observer} from "mobx-react";

export const MainInfo = observer(() => {
    const { adminProductStore } = useStores();
    const [addFile, removeFile] = useFileSelection();
    const { product } = adminProductStore;

    const handleAddPhoto = (file: IPhoto) => {
        console.log(file);
        if (adminProductStore.product?.photos) {
            adminProductStore.addProductField(PRODUCT_KEYS.PHOTOS, [
                ...adminProductStore.product.photos,
                file.name
            ])
        }
        addFile(file);
    }

    const handlePhotoDelete = (file: any) => {
        console.log(file);
        removeFile(file)
    }

    const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newName = e.currentTarget.value;
        if (product) {
            adminProductStore.set({
                ...product,
                name: newName,
            })
        }
        console.log({...product})
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
                    <Edit />
                </Styles.EditIconButton>
            </Styles.Header>
            <Styles.Photos>
                <DragAndDrop addFile={handleAddPhoto} removeFile={handlePhotoDelete}/>
            </Styles.Photos>
            <Styles.Footer>
                <Styles.Input
                    as="input"
                    placeholder={'Цена товара'}
                    value={product?.price}
                    onChange={handleProductPriceChange}
                />
                <Styles.EditIconButton>
                    <Edit />
                </Styles.EditIconButton>
            </Styles.Footer>
        </Styles.Wrapper>
    );
});
