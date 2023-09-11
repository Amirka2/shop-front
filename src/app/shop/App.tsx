import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';

import {MainWrapper} from "./app.styles";
import {categories, contacts} from './mock';

import {Paths} from "@/shared/routing";
import {NavBar} from "@/shared/components";
import {Footer} from "@/shared/components";
import {TopBar} from "@/widgets/TopBar";
import {useMobileOrDesktop} from "@/shared/hooks";
import {
    NotFoundPage,
    MainPage,
    ShippingPage,
    PaymentPage,
    CategoriesPage,
    AboutUsPage,
    ProductPage,
    CartPage,
    SubCategoriesPage,
    ProductsPage,
} from "@/pages";
import {MobileContacts} from "@/entities/Contacts";

export function App() {
    let isMobile = useMobileOrDesktop();
    const mainPageProps = {
        itemsValue: 12,
        categories,
        ...contacts,
    }
    console.log(Paths.category + Paths.subCategory + Paths.products)
    return (
        <BrowserRouter>
            <MainWrapper $isMobile={isMobile}>
                <TopBar/>
                <NavBar paths={Paths}/>
                <Routes>
                    <Route path='*' element={<NotFoundPage/>}/>
                    <Route path={Paths.main} element={<MainPage {...mainPageProps} />}/>
                    <Route path={Paths.aboutUs} element={<AboutUsPage/>}/>
                    <Route path={Paths.categories} element={<CategoriesPage/>}/>
                    <Route
                        path={Paths.category + Paths.subCategories}
                        element={<SubCategoriesPage/>}
                    />
                    <Route
                        path={Paths.category + Paths.subCategory + Paths.products}
                        element={<ProductsPage/>}
                    />
                    <Route
                        path={Paths.category + Paths.subCategory + Paths.product}
                        element={<ProductPage />}
                    />
                    <Route
                        path={'/:name'}
                        element={<ProductPage />}
                    />
                    <Route path={Paths.cart} element={<CartPage/>}/>
                    <Route path={Paths.payment} element={<PaymentPage/>}/>
                    <Route path={Paths.shipping} element={<ShippingPage/>}/>
                </Routes>
                <Footer/>
            </MainWrapper>
        </BrowserRouter>
    );
}
