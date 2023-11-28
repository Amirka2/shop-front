import React, { useState } from 'react';

import { Edit, Plus } from "@/shared/ui";
import { DragAndDrop } from "@/shared/components/DragAndDrop";
import useFileSelection from "@/shared/hooks/useFileSelection";

import * as Styles from './MainInfo.styles';

export const MainInfo = () => {
    const [productName, setProductNameChange] = useState('Product name');
    const [productPrice, setProductPriceChange] = useState('0');
    const [addFile, removeFile] = useFileSelection();

    const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductNameChange(e.currentTarget.value);
    }

    const handleProductPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductPriceChange(e.currentTarget.value);
    }

    return (
        <Styles.Wrapper>
            <Styles.Header>
                <Styles.Button>
                    <Plus width={28} height={28}/>
                </Styles.Button>
                <Styles.Input
                    as="input"
                    value={productName}
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
                    value={productPrice}
                    onChange={handleProductPriceChange}
                />
                <Styles.EditIconButton>
                    <Edit />
                </Styles.EditIconButton>
            </Styles.Footer>
        </Styles.Wrapper>
    );
};
