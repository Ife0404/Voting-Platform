import React from 'react';
import INTRO from "../UI/Components/Pages/Intro/Intro";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function IndexRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={INTRO} path={"/"}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default IndexRouter