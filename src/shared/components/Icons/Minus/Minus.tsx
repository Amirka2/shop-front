import React, {ComponentPropsWithoutRef} from 'react';

export const Minus = ({
                         width = 18, height = 2, ...restProps
                     }: ComponentPropsWithoutRef<'svg'>) => (
    <svg width={width} height={height} viewBox="0 0 18 2" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
        <g id="minus">
            <path id="Vector" d="M17 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1C18 1.26522 17.8946 1.51957 17.7071 1.70711C17.5196 1.89464 17.2652 2 17 2Z" fill="white"/>
        </g>
    </svg>
);
