import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {Paths} from "@/shared/routing";
import {
  AboutUsPage,
  AdminAuth,
  AdminCategory,
  AdminMain,
  AdminManufacturers,
  AdminProduct,
  AdminSubCategory,
  CartPage,
  CategoriesPage,
  ContactsPage,
  MainPage,
  Manufacturers,
  NotFoundPage,
  PaymentPage,
  PrivacyPolicy,
  ProductPage,
  ProductsPage,
  ShippingPage,
  SubCategoriesPage,
} from "@/pages";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFoundPage/>}/>
        <Route path={Paths.main} element={<MainPage />}/>
        <Route path={Paths.aboutUs} element={<AboutUsPage/>}/>
        <Route path={Paths.categories} element={<CategoriesPage/>}/>
        <Route
          path={Paths.category + Paths.subCategories}
          element={<SubCategoriesPage/>}
        />
        <Route path={Paths.category + Paths.subCategory + Paths.manufacturers} element={<Manufacturers/>}/>
        <Route
          path={Paths.category + Paths.subCategory + Paths.manufacturer + Paths.products}
          element={<ProductsPage/>}
        />
        <Route
          path={Paths.category + Paths.subCategory + Paths.manufacturer + Paths.product}
          element={<ProductPage/>}
        />
        <Route
          path={Paths.product}
          element={<ProductPage/>}
        />
        <Route path={Paths.contacts} element={<ContactsPage/>}/>
        <Route path={Paths.cart} element={<CartPage/>}/>
        <Route path={Paths.payment} element={<PaymentPage/>}/>
        <Route path={Paths.shipping} element={<ShippingPage/>}/>
        <Route path={Paths.privacyPolicy} element={<PrivacyPolicy/>}/>

        <Route path={Paths.adminAuth} element={<AdminAuth />} />
        <Route path={Paths.admin} element={<AdminMain/>}/>
        <Route path={Paths.adminCategory} element={<AdminCategory/>}/>
        <Route path={Paths.adminSubCategory} element={<AdminSubCategory/>}/>
        <Route path={Paths.adminProduct} element={<AdminProduct/>}/>
        <Route path={Paths.adminManufacturers} element={<AdminManufacturers/>}/>
      </Routes>
    </BrowserRouter>
  );
}
