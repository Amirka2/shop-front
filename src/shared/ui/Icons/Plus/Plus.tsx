import React, {ComponentPropsWithoutRef} from 'react';
import {Color} from "@/shared/constants";

export const Plus = ({
 width = 40, height = 40, color = Color.white, ...restProps
}: ComponentPropsWithoutRef<'svg'>) => (
    <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
        <path
            d="M18.3334 21.6668H8.33337V18.3335H18.3334V8.3335H21.6667V18.3335H31.6667V21.6668H21.6667V31.6668H18.3334V21.6668Z"
            fill={color}/>
    </svg>
);
