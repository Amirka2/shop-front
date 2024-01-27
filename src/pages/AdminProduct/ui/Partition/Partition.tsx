import React, { SetStateAction } from 'react';
import { observer } from "mobx-react";

import { Delete, Plus } from "@/shared/ui";
import {IDescriptionData, PRODUCT_DESCRIPTION_KEYS} from "@/entities/interfaces";
import { useStores } from "@/shared/hooks";

import * as Styles from './Partition.styles';

interface PartitionProps {
    setEditorOpen: React.Dispatch<SetStateAction<boolean>>;
    setDescriptionId: React.Dispatch<SetStateAction<number>>
    descriptionId: number;
    setCurrentDescription: React.Dispatch<React.SetStateAction<IDescriptionData | undefined>>;
}

export const Partition = observer(({setDescriptionId, setEditorOpen, setCurrentDescription}: PartitionProps) => {
    const {adminProductStore} = useStores();
    const {product} = adminProductStore;
    if (!product) return <span>ERROR</span>

    const handleNameChange = (e:  React.ChangeEvent<HTMLInputElement>, id: number) => {
        setCurrentDescription(adminProductStore.getDescription(id));
        adminProductStore.addDescriptionField(id, PRODUCT_DESCRIPTION_KEYS.NAME, e.currentTarget.value);
        console.log({...adminProductStore.product})
    }

    const handleAddClick = () => {
        setEditorOpen(true);

        let newItemIndex = 0;
        if (product?.description?.length) {
            newItemIndex = product?.description?.length;
        }

        setCurrentDescription(adminProductStore.getDescription(newItemIndex));
        adminProductStore.addDescriptionField(newItemIndex, PRODUCT_DESCRIPTION_KEYS.NAME, '');
        console.log(product.description)
    }

    const handleDeleteClick = (id: number) => {
        setEditorOpen(false);
        setCurrentDescription(undefined);
        setDescriptionId(id);
        adminProductStore.deleteDescription(id);
    }

    return (
        <Styles.Wrapper>
            <Styles.Header>
                <Styles.Title>
                    Разделы
                </Styles.Title>
                <Styles.Button onClick={handleAddClick}>
                    <Plus width={28} height={28}/>
                </Styles.Button>
            </Styles.Header>
            <Styles.PartitionBlocksWrapper>
                {adminProductStore.product && adminProductStore.product.description && adminProductStore?.product?.description
                  .map((d, index) => (
                    <Styles.PartitionBlock key={index}>
                        {product.description && (
                          <Styles.PartitionTitle
                            value={d.name || ''}
                            onClick={() => {
                              setCurrentDescription(adminProductStore.getDescription(index));

                              setDescriptionId((prev) => {
                                    console.log('clicked partition ', index);
                                    return index
                                });
                                setEditorOpen(true);
                            }}
                            onChange={(e) => {
                                handleNameChange(e, index);
                            }}
                          />
                        )
                        }
                        <Styles.DeleteButton onClick={() => {
                            handleDeleteClick(index);
                        }}>
                            <Delete width={22} height={22}/>
                        </Styles.DeleteButton>
                    </Styles.PartitionBlock>
                  ))}
            </Styles.PartitionBlocksWrapper>
        </Styles.Wrapper>
    );
});
