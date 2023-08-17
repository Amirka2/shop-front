import React from 'react';
import './app.styles';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {paths} from "@/shared/constants";

import {NavBar} from "@/shared/navbar";
import {Footer} from "@/shared/footer";

import {NotFoundPage, MainPage, ShippingPage, PaymentPage, CartPage, CatalogPage, AboutUsPage} from "@/pages";
import {TopBar} from "@/widgets/TopBar";

import {MainWrapper} from "@/app/shop/app.styles";

export function App() {
  return (
    <BrowserRouter>
        <MainWrapper>
            <TopBar/>
            <NavBar paths={paths}/>
            <Routes>
                <Route path='*' Component={NotFoundPage}/>
                <Route path={paths.main} Component={MainPage}/>
                <Route path={paths.aboutUs} Component={AboutUsPage}/>
                <Route path={paths.catalog} Component={CatalogPage}/>
                <Route path={paths.cart} Component={CartPage}/>
                <Route path={paths.payment} Component={PaymentPage}/>
                <Route path={paths.shipping} Component={ShippingPage}/>
            </Routes>
            <Footer/>
        </MainWrapper>
    </BrowserRouter>
  );
}
