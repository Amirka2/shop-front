import React, {ComponentPropsWithoutRef} from 'react';
import {Color} from "@/shared/constants";

export const Delete = ({
   width = 40, height = 40, color = Color.blue, ...restProps
}: ComponentPropsWithoutRef<'svg'>) => (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }} {...restProps}>
        <path
            d="M7.5 23.75C7.5 24.413 7.76339 25.0489 8.23223 25.5178C8.70107 25.9866 9.33696 26.25 10 26.25H20C20.663 26.25 21.2989 25.9866 21.7678 25.5178C22.2366 25.0489 22.5 24.413 22.5 23.75V8.75H7.5V23.75ZM10 11.25H20V23.75H10V11.25ZM19.375 5L18.125 3.75H11.875L10.625 5H6.25V7.5H23.75V5H19.375Z"
            fill={color}/>
    </svg>
);
