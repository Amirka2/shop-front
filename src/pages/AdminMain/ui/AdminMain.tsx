import React, {useState} from 'react';
import * as Styles from './AdminMain.styles';
import {CatalogContent} from "./CatalogContent";
import {CATEGORIES} from "../api";

export const AdminMain = () => {
    const [isCatalogOpen, setCatalogOpen] = useState(false);
    const handleCatalogButtonClick = function () {
        setCatalogOpen(prev => !prev);
    }

    return (
        <Styles.Wrapper>
            <Styles.ExitButton to={'/'}>Выйти</Styles.ExitButton>
            <Styles.SectionButtonsWrapper>
                <Styles.SectionButton to={'/admin'}>BestSeller</Styles.SectionButton>
                <Styles.CatalogButton onClick={handleCatalogButtonClick}>
                    <Styles.CatalogTitle>
                        Каталог товаров {isCatalogOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="45" viewBox="0 0 30 45" fill="none">
                            <path d="M30 22.5L5.67568 45L0 39.75L18.6486 22.5L0 5.25L5.67568 0L30 22.5Z" fill="white"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="30" viewBox="0 0 45 30" fill="none">
                            <path d="M22.5 30L0 5.67568L5.25 0L22.5 18.6486L39.75 0L45 5.67568L22.5 30Z" fill="white"/>
                        </svg>
                    )}
                    </Styles.CatalogTitle>
                    {isCatalogOpen && (
                        <CatalogContent categories={CATEGORIES}/>
                    )}
                </Styles.CatalogButton>
            </Styles.SectionButtonsWrapper>
        </Styles.Wrapper>
    );
};
