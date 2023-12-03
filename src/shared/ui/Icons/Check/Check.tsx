import React, {ComponentPropsWithoutRef} from 'react';
import {Color} from "@/shared/constants";

export const Check = ({
                         width = 30, height = 30, color = Color.blue, ...restProps
                     }: ComponentPropsWithoutRef<'svg'>) => (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none"
         xmlns="http://www.w3.org/2000/svg" {...restProps}>
        <path
            d="M25.1059 2L9.81993 17.286L4.8623 12.3284L0 17.1907L4.95762 22.1483L9.85168 27.0424L14.714 22.1801L30 6.8941L25.1059 2Z"
            fill={color}/>
    </svg>
);
