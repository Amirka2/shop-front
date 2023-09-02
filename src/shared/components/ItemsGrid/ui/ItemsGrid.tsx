import React, {PropsWithChildren} from 'react';
import {GridWrapper} from "@/shared/components/ItemsGrid/ui/ItemsGrid.styles";

interface IItemsGrid {
    height?: string;
    width?: string;
    maxHeight?: number;
    maxWidth?: number;
}

export const ItemsGrid = ({height, width, maxHeight, maxWidth, children}: PropsWithChildren<IItemsGrid>) => {
    return (
        <GridWrapper height={height} width={width} maxHeight={maxHeight} maxWidth={maxWidth}>
            {children}
        </GridWrapper>
    );
};
