import React, {ComponentPropsWithoutRef} from 'react';
import {Color} from "@/shared/constants";

export const Minus = ({
                        width = 40, height = 40, color = Color.white, ...restProps
                      }: ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
      <g>
        <path id="Path 2" d="M20 12H4" stroke={color} strokeLinecap="round"/>
      </g>
    </svg>
  );
};
