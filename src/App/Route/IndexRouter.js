import React from 'react';
import INTRO from "../UI/Components/Pages/Intro/Intro";
import LOGIN from "../UI/Components/Pages/Login/Login";
import REGISTRATION from '../UI/Components/Pages/Registration/Registration';
import ABOUT from "../UI/Components/Pages/About/About";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserInfo from '../UI/Components/Pages/UserInfo/UserInfo';
import ELECTION from '../UI/Components/Pages/Election/Election';
import VOTING from '../UI/Components/Pages/Voting/Voting';
import FEATURE from "../UI/Components/Pages/Feature/Feature";

function IndexRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={INTRO} path={"/"}></Route>
                <Route Component={LOGIN} path={"/login"}></Route>
                <Route Component={REGISTRATION} path={"/registration"}></Route>
                <Route Component={ABOUT} path={"/about"}></Route>
                <Route Component={UserInfo} path={"/userinfo"}></Route>
                <Route Component={ELECTION} path={"/elections"}></Route>
                <Route Component={VOTING} path={"/voting"}></Route>
                <Route Component={FEATURE} path={"/feature"}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default IndexRouter