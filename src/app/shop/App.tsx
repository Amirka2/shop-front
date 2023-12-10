import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import { categories, contacts } from './mock';

import { Paths } from "@/shared/routing";
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
  ContactsPage,
  AdminMain,
  AdminCategory,
  AdminSubCategory,
  AdminProduct,
} from "@/pages";

export function App() {
  const mainPageProps = {
    itemsValue: 12,
    categories,
    ...contacts,
  }
  return (
    <BrowserRouter>
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
          element={<ProductPage/>}
        />
        <Route
          path={'/:name'}
          element={<ProductPage/>}
        />
        <Route path={Paths.contacts} element={<ContactsPage/>}/>
        <Route path={Paths.cart} element={<CartPage/>}/>
        <Route path={Paths.payment} element={<PaymentPage/>}/>
        <Route path={Paths.shipping} element={<ShippingPage/>}/>

        <Route path={Paths.admin} element={<AdminMain/>}/>
        <Route path={Paths.adminCategory} element={<AdminCategory/>}/>
        <Route path={Paths.adminSubCategory} element={<AdminSubCategory/>}/>
        <Route path={Paths.adminProduct} element={<AdminProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}
