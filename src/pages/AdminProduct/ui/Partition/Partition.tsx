import React from 'react';

import { Delete, Plus } from "@/shared/ui";

import * as Styles from './Partition.styles';

export const Partition = () => {
    return (
        <Styles.Wrapper>
            <Styles.Header>
                <Styles.Title>
                    Разделы
                </Styles.Title>
                <Styles.Button>
                    <Plus width={28} height={28} />
                </Styles.Button>
            </Styles.Header>
            <Styles.PartitionBlock>
                <Styles.PartitionTitle>
                    Title
                </Styles.PartitionTitle>
                <Styles.DeleteButton>
                    <Delete width={22} height={22} />
                </Styles.DeleteButton>
            </Styles.PartitionBlock>
        </Styles.Wrapper>
    );
};
