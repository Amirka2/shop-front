import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';

import {Paths} from "@/shared/constants";
import {NavBar} from "@/shared/components";
import {Footer} from "@/shared/components";
import {TopBar} from "@/widgets/TopBar";
import {useMobileOrDesktop} from "@/shared/hooks";
import {
    NotFoundPage,
    MainPage,
    ShippingPage,
    PaymentPage,
    CatalogPage,
    AboutUsPage,
    ProductPage,
    CartPage,
} from "@/pages";

import {MainWrapper} from "./app.styles";
import { products, categories, contacts } from './mock';

export function App() {
    let isMobile = useMobileOrDesktop();
    const mainPageProps = {
        itemsValue: 12,
        categories,
        ...contacts,
    }
    return (
        <BrowserRouter>
            <MainWrapper $isMobile={isMobile}>
                <TopBar/>
                <NavBar paths={Paths}/>
                <Routes>
                    <Route path='*' Component={NotFoundPage}/>
                    <Route path={Paths.main} element={<MainPage {...mainPageProps} />}/>
                    <Route path={Paths.aboutUs} Component={AboutUsPage}/>
                    <Route path={Paths.catalog} element={<CatalogPage itemsValue={12}/>}/>
                    <Route path={Paths.cart} Component={CartPage}/>
                    <Route path={Paths.payment} Component={PaymentPage}/>
                    <Route path={Paths.shipping} Component={ShippingPage}/>
                    <Route path={Paths.product} element={<ProductPage/> }/>
                </Routes>
                <Footer />
            </MainWrapper>
        </BrowserRouter>
    );
}
