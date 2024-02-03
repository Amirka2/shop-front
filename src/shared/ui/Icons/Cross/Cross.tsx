import React, {ComponentPropsWithoutRef} from 'react';
import {Color} from "@/shared/constants";

export const Cross = ({
                       width = 40, height = 40, color = Color.white, ...restProps
                     }: ComponentPropsWithoutRef<'svg'>) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
    <g id="close">
      <path id="Path 2" d="M17.6569 17.6569L6.34316 6.34315" stroke={color} strokeLinecap="round"/>
      <path id="Path 2_2" d="M17.6568 6.34315L6.34314 17.6569" stroke={color} strokeLinecap="round"/>
    </g>
  </svg>
);
