import React from "react";
import { ReactDOM } from "react";
import { Route, BrowserRouter,Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Calender from "./src/screens/Calender";
import SignIn from "./src/screens/SignIn";


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route />
                <Route />
            <Routes/>
        </BrowserRouter>
    )    
}

export default Rotas;

