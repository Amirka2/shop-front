import React from 'react';
import './app.styles';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {Paths} from "@/shared/constants";

import {NavBar} from "@/shared/navbar";
import {Footer} from "@/shared/footer";

import {NotFoundPage, MainPage, ShippingPage, PaymentPage, CartPage, CatalogPage, AboutUsPage} from "@/pages";
import {TopBar} from "@/widgets/TopBar";

import {MainWrapper} from "@/app/shop/app.styles";
import {useMobileOrDesktop} from "@/shared/libs/hooks";

export function App() {
    let isMobile = useMobileOrDesktop();
  return (
    <BrowserRouter>
        <MainWrapper $isMobile={isMobile}>
            <TopBar isMobile={isMobile}/>
            <NavBar paths={Paths} isMobile={isMobile}/>
            <Routes>
                <Route path='*' Component={NotFoundPage}/>
                <Route path={Paths.main} Component={MainPage}/>
                <Route path={Paths.aboutUs} Component={AboutUsPage}/>
                <Route path={Paths.catalog} element={<CatalogPage isMobile={isMobile} itemsValue={12} />}/>
                <Route path={Paths.cart} Component={CartPage}/>
                <Route path={Paths.payment} Component={PaymentPage}/>
                <Route path={Paths.shipping} Component={ShippingPage}/>
            </Routes>
            <Footer isMobile={isMobile}/>
        </MainWrapper>
    </BrowserRouter>
  );
}
