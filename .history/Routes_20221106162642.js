import React from "react";

import { Route, BrowserRouter,Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Calender from "./src/screens/Calender";
import SignIn from "./src/screens/SignIn";


const Rotas = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn/>}/>
                <Route path="signin" element={<Calender/>}/>
            <Routes/>
        </BrowserRouter>
    );    
}

export default Rotas;

