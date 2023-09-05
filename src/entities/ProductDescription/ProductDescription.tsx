import React from 'react';
import * as Styles from './ProductDescription.styles';
import {IProduct} from "@/entities";

export const ProductDescription = (product: IProduct) => {
    const descriptionParts = [
        {
            id: 'description',
            name: 'Описание',
        },
        {
            id: 'specifications',
            name: 'Характеристики',
        },
        {
            id: 'usage',
            name: 'Использование',
        },
        {
            id: 'examples',
            name: 'Примеры',
        },
    ]

    const headerLinkElements = descriptionParts.map(l => {
        return (
            <Styles.DescriptionHeaderLink href={'#' + l.id} key={l.id}>{l.name}</Styles.DescriptionHeaderLink>
        );
    })

    return (
        <Styles.Wrapper>
            <Styles.DescriptionHeader>
                {headerLinkElements}
            </Styles.DescriptionHeader>
            <Styles.DescriptionPart id={descriptionParts[0].id}>
                <Styles.DescriptionPartTitle>{descriptionParts[0].name}</Styles.DescriptionPartTitle>
                <Styles.DescriptionPartContent>
                    {product.description}
                </Styles.DescriptionPartContent>
            </Styles.DescriptionPart>
            <Styles.DescriptionPart id={descriptionParts[1].id}>
                <Styles.DescriptionPartTitle>{descriptionParts[1].name}</Styles.DescriptionPartTitle>
                <Styles.DescriptionPartContent>
                    {product.specifications.type}
                </Styles.DescriptionPartContent>
            </Styles.DescriptionPart>
            <Styles.DescriptionPart id={descriptionParts[2].id}>
                <Styles.DescriptionPartTitle>{descriptionParts[2].name}</Styles.DescriptionPartTitle>
                <Styles.DescriptionPartContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dicta minima natus non officiis quia quidem repellat sed totam unde veniam. Ad aut hic
                    laboriosam molestias perferendis repudiandae unde velit vero.
                </Styles.DescriptionPartContent>
                {/*{product.usage}*/}
            </Styles.DescriptionPart>
            <Styles.DescriptionPart id={descriptionParts[3].id}>
                <Styles.DescriptionPartTitle>{descriptionParts[3].name}</Styles.DescriptionPartTitle>
                {/*{product.examples}*/}
                <Styles.DescriptionPartContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, quasi, velit! Commodi
                    debitis explicabo minus molestias nihil qui soluta. Deserunt dolores enim inventore iure
                    odio omnis ratione? Cupiditate, dolore, similique.
                </Styles.DescriptionPartContent>
            </Styles.DescriptionPart>
        </Styles.Wrapper>
    );
};
