import React from "react";
import { Link } from "react-router-dom";
import Botao from "../../components/Botao";
import  '../SignIn/style.css'

const SignIn = (props) => {

    const toCalender = () => {
        console.log('Ir para calendario')
    }
    return (
        <div className="container">Estou dentro de SignIn.js 
            <Link to="/calender">Calender</Link>
            <div className="containerButton">
                <Botao largura={'63%'} nome='Ir para calendario' evento={toCalender}/>
                <Botao largura={'63%'} nome='Ir para calendario ' />
            </div>
        </div>
    )
}

export default SignIn