import React, {ReactNode} from 'react';

import * as Styles from './Card.styles';

interface CardProps {
    width?: string;
    height?: string;
    linkTo: string;
    photoSrc: string;
    children: ReactNode;
}

export const Card = ({width = '315px', height = '500px', linkTo, photoSrc, children}: CardProps) => {

    return (
        <Styles.Wrapper width={width} height={height}>
            <Styles.CardLink to={linkTo}>
                <Styles.PhotoWrapper>
                    <Styles.Photo src={photoSrc} alt={''}/>
                </Styles.PhotoWrapper>
                {children}
            </Styles.CardLink>
        </Styles.Wrapper>
    );
};
