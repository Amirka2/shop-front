import React from 'react';
import './app.styles';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {paths} from "@/shared/constants";

import {NavBar} from "@/shared/navbar";
import {Footer} from "@/shared/footer";

import {MainWrapper} from "@/app/shop/app.styles";

export function App() {
  return (
    <BrowserRouter>
        <MainWrapper>
            <NavBar paths={paths}/>
            <div>Main Content</div>
            <Routes>
                <Route path={paths.main}/>
            </Routes>
            <Footer/>
        </MainWrapper>
    </BrowserRouter>
  );
}
