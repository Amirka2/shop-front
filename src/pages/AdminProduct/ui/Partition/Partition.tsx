import React from 'react';
import {observer} from "mobx-react";

import {Delete, Plus} from "@/shared/ui";
import {useStores} from "@/shared/hooks";

import * as Styles from './Partition.styles';

export const Partition = observer(() => {
    const { adminProductStore, descriptionsStore } = useStores();
    const descriptions = descriptionsStore.descriptions;

    if (descriptions) {
        descriptionsStore.set(descriptions);
        descriptionsStore.setProductId(adminProductStore?.product?.id || 0);
    }

    if (!descriptions) return <span>ERROR</span>

    const handleNameChange = (newValue: string, id: number) => {
        descriptionsStore.setActiveDescription(id);

        descriptionsStore.changeActiveDescriptionHeader(newValue);

        // adminProductStore.addDescriptionField(id, PRODUCT_DESCRIPTION_KEYS.NAME, e.currentTarget.value);
        // console.log({...adminProductStore.product})
    }

    const handleAddClick = () => {
        descriptionsStore.addDescription({
            header: '',
            text: '',
        })
    }

    const handleDeleteClick = (id: number) => {
        descriptionsStore.deleteDescription(id);
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
                {descriptions && descriptions
                  .map((d) => (
                    <Styles.PartitionBlock key={d.id}>
                      <Styles.PartitionTitle
                        value={d.header || ''}
                        onClick={() => {
                            descriptionsStore.setActiveDescription(d.id);
                        }}
                        onChange={(e) => {
                            handleNameChange(e.currentTarget.value, d.id);
                        }}
                      />
                        <Styles.DeleteButton onClick={() => {
                            handleDeleteClick(d.id);
                        }}>
                            <Delete width={22} height={22}/>
                        </Styles.DeleteButton>
                    </Styles.PartitionBlock>
                  ))}
            </Styles.PartitionBlocksWrapper>
        </Styles.Wrapper>
    );
});
