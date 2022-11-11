import React from "react";
import { Link } from "react-router-dom";
import Botao from "../../components/botao";
import  '../SignIn/style.css'

const SignIn = (props) => {
    return (
        <div className="container">Estou dentro de SignIn.js 
            <Link to="/calender">Calender</Link>
            <Botao />
        </div>
    )
}

export default SignIn