import React from 'react';
import './App.css';
import {Route, BrowserRouter, Routes, Link} from 'react-router-dom';

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
                <Link to='/'>main</Link>
                <br/>
                <Link to='/test'>test</Link>
            </div>
            <Routes>
                <Route path='/test' Component={Test}></Route>
                <Route path='/'/>
            </Routes>
        </div>
    </BrowserRouter>
  );
}
