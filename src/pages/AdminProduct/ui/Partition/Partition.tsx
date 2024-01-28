import React from 'react';
import {observer} from "mobx-react";
import {useCookies} from "react-cookie";

import {Delete, Plus} from "@/shared/ui";
import {useStores} from "@/shared/hooks";
import {deleteDescription} from "@/pages/AdminProduct/api";

import * as Styles from './Partition.styles';

export const Partition = observer(() => {
    const [cookies] = useCookies(['token']);
    const { token } = cookies;
    const { adminProductStore, descriptionsStore } = useStores();
    const descriptions = descriptionsStore.descriptions;
    const backDescriptions = adminProductStore.product?.productDescriptions;

    if (descriptions) {
        descriptionsStore.set(descriptions);
        descriptionsStore.setProductId(adminProductStore?.product?.id || 0);
    }

    if (!descriptions) return <span>ERROR</span>

    const handleNameChange = (newValue: string, id: number) => {
        descriptionsStore.setActiveDescription(id);

        descriptionsStore.changeActiveDescriptionHeader(newValue);
    }

    const handleAddClick = () => {
        descriptionsStore.addDescription({
            header: '',
            text: '',
        })
    }

    const handleDeleteClick = (id: number) => {
        if (backDescriptions && backDescriptions.filter(d => d.id === id)) {
            deleteDescription(token, id);
        }
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
                    <Styles.PartitionBlock key={d.id} isActive={d.id === descriptionsStore.getActiveDescription()?.id}>
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
