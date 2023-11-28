import React from 'react';

import { Edit, Plus } from "@/shared/ui";
import { DragAndDrop } from "@/shared/components/DragAndDrop";
import useFileSelection from "@/shared/hooks/useFileSelection";

import * as Styles from './MainInfo.styles';
import { useStores } from "@/shared/hooks";

export const MainInfo = () => {
    const { adminProductStore } = useStores();
    const [addFile, removeFile] = useFileSelection();
    const { product } = adminProductStore;

    const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newName = e.currentTarget.value;
        adminProductStore.changeState({
            ...product,
            name: newName,
        })
    }

    const handleProductPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPrice = e.currentTarget.value;
        adminProductStore.changeState({
            ...product,
            price: Number(newPrice),
        })
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
                <DragAndDrop addFile={addFile} removeFile={removeFile}/>
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
};
