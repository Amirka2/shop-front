import React from 'react';
import './app.styles';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {Paths, Contacts} from "@/shared/constants";

import {NavBar} from "@/shared/navbar";
import {Footer} from "@/shared/footer";

import {
    NotFoundPage,
    MainPage,
    ShippingPage,
    PaymentPage,
    CartPage,
    CatalogPage,
    AboutUsPage,
    ProductPage
} from "@/pages";
import {TopBar} from "@/widgets/TopBar";

import {MainWrapper} from "@/app/shop/app.styles";
import {useMobileOrDesktop} from "@/shared/libs/hooks";
import {IProduct} from "@/shared/components";

const product : IProduct = {
    id: 0,
    price: 0,
    name: '123',
    inStock: false,
    photos: ['https://avatars.mds.yandex.net/i?id=e6eb37ed9a9038339a646ded771b478604a95906-9882590-images-thumbs&n=13',
             'https://avatars.mds.yandex.net/i?id=4480f1b6dc39779541ed076e04586d008d78f0c7-9043236-images-thumbs&n=13',
             'https://avatars.mds.yandex.net/i?id=d6ab298e0cff6a88d995d26f0bb75608dc19f29e-8448606-images-thumbs&n=13',
             'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666374456_1-mykaleidoscope-ru-p-priroda-ozero-oboi-1.jpg'],
}

export function App() {
    let isMobile = useMobileOrDesktop();
    const mainPageProps = {
        isMobile,
        itemsValue: 12,
        categories: [
            {
                name: 'Шлемы из папье-маше',
                url: '/not-found'
            },
            {
                name: 'Автомобильные прокладки',
                url: '/xxx'
            },
            {
                name: 'Семечки',
                url: '/'
            },
            {
                name: 'Цветочные арки для свадьбы',
                url: '/'
            },
            {
                name: 'Семечки',
                url: '/'
            },
            {
                name: 'Семечки',
                url: '/'
            },
            {
                name: 'Семечки',
                url: '/'
            },
            {
                name: 'Семечки',
                url: '/'
            },
            {
                name: 'Семечки',
                url: '/'
            },
            {
                name: 'Семечки',
                url: '/'
            },
            {
                name: 'Семечки',
                url: '/'
            },
            {
                name: 'Семечки',
                url: '/'
            },
        ],
        ...Contacts,
    }
    console.table(mainPageProps.categories);
    return (
        <BrowserRouter>
            <MainWrapper $isMobile={isMobile}>
                <TopBar isMobile={isMobile}/>
                <NavBar paths={Paths} isMobile={isMobile}/>
                <Routes>
                    <Route path='*' Component={NotFoundPage}/>
                    <Route path={Paths.main} element={<MainPage {...mainPageProps} />}/>
                    <Route path={Paths.aboutUs} Component={AboutUsPage}/>
                    <Route path={Paths.catalog} element={<CatalogPage isMobile={isMobile} itemsValue={12}/>}/>
                    <Route path={Paths.cart} Component={CartPage}/>
                    <Route path={Paths.payment} Component={PaymentPage}/>
                    <Route path={Paths.shipping} Component={ShippingPage}/>
                    <Route path={Paths.product} element={<ProductPage {...product}/> }/>
                </Routes>
                <Footer isMobile={isMobile} {...Contacts}/>
            </MainWrapper>
        </BrowserRouter>
    );
}
