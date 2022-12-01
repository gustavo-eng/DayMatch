import React from "react";

import { Route, BrowserRouter,Routes } from "react-router-dom";


import Calender from "./screens/Calender";
import SignIn from "./screens/SignIn";

const Rotas = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn/>}/>
                <Route path="calender" element={<Calender/>}/>
            </Routes>
        </BrowserRouter>
    );    
}

export default Rotas; 

