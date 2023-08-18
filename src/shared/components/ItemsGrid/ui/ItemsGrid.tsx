import React, {PropsWithChildren} from 'react';
import {GridWrapper} from "@/shared/components/ItemsGrid/ui/ItemsGrid.styles";

interface IItemsGrid {
    height: number;
    width: number;
}

export const ItemsGrid = ({height, width, children}: PropsWithChildren<IItemsGrid>) => {
    return (
        <GridWrapper $height={height} $width={width}>
            {children}
        </GridWrapper>
    );
};
