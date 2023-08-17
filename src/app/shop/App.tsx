import React from 'react';
import './App.css';
import {Route, BrowserRouter, Routes, Link} from 'react-router-dom';
import {paths} from "@/shared/constants";

const Test = function() {
    return (
        <div>test component</div>
    )
}
export function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <div>
                <Link to={paths.main}>main</Link>
                <br/>
                <Link to={paths.aboutUs}>about us</Link>
            </div>
            <Routes>
                <Route path={paths.aboutUs} Component={Test}></Route>
                <Route path={paths.main}/>
            </Routes>
        </div>
    </BrowserRouter>
  );
}
