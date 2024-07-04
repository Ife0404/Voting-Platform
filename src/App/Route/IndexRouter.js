import React from 'react';
import INTRO from "../UI/Components/Pages/Intro/Intro";
import LOGIN from "../UI/Components/Pages/Login/Login";
import REGISTRATION from '../UI/Components/Pages/Registration/Registration';
import ABOUT from "../UI/Components/Pages/About/About";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function IndexRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={INTRO} path={"/"}></Route>
                <Route Component={LOGIN} path={"/login"}></Route>
                <Route Component={REGISTRATION} path={"/registration"}></Route>
                <Route Component={ABOUT} path={"/about"}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default IndexRouter