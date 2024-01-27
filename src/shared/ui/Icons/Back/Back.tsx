import React, {ComponentPropsWithoutRef} from 'react';
import {Color} from "@/shared/constants";

export const Back = ({
    width = 70, height = 70, color = Color.blue, ...restProps
}: ComponentPropsWithoutRef<'svg'>) => (
    <svg width={width} height={height} viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
        <rect width={width} height={height} rx="10" fill={color} />
        <path
            d="M22.9393 33.9393C22.3536 34.5251 22.3536 35.4749 22.9393 36.0607L32.4853 45.6066C33.0711 46.1924 34.0208 46.1924 34.6066 45.6066C35.1924 45.0208 35.1924 44.0711 34.6066 43.4853L26.1213 35L34.6066 26.5147C35.1924 25.9289 35.1924 24.9792 34.6066 24.3934C34.0208 23.8076 33.0711 23.8076 32.4853 24.3934L22.9393 33.9393ZM47 33.5H24V36.5H47V33.5Z"
            fill="white"/>
    </svg>
);
