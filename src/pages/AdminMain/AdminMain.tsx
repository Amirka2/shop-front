import React, {useState} from 'react';
import * as Styles from './AdminMain.styles';
import {CatalogContent} from "./CatalogContent";

export const AdminMain = () => {
    const [isCatalogOpen, setCatalogOpen] = useState(false);
    const handleCatalogButtonClick = function () {
        setCatalogOpen(prev => !prev);
    }
    const categories = [
        {
            title: 'category',
            subCategories: ['subCategory', 'subCategory'],
        },
    ];

    return (
        <Styles.Wrapper>
            <Styles.ExitButton to={'/'}>Exit</Styles.ExitButton>
            main page
            <Styles.SectionButtonsWrapper>
                <Styles.SectionButton to={'/admin'}>BestSeller</Styles.SectionButton>
                <Styles.CatalogButton onClick={handleCatalogButtonClick}>
                    Catalog
                    {isCatalogOpen && (
                        <CatalogContent categories={categories}/>
                    )}
                </Styles.CatalogButton>
            </Styles.SectionButtonsWrapper>
        </Styles.Wrapper>
    );
};
