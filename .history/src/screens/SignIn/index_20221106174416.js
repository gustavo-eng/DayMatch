//configs
import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

//components and styles 
import Botao from "../../components/Botao";
import  '../SignIn/style.css'

const SignIn = (props) => {

    const toCalender = () => {
        console.log('Ir para calendario')
        return <Navigate to={"/"} />
    }
    return (
        <div className="container">Estou dentro de SignIn.js 
            <Link to="/calender">Calender</Link>
            <div className="containerButton">
                <Botao largura={'100%'} 
                    nome='SignIn' 
                    evento={toCalender}
                    //altura={'100%'}
                />
                <Botao largura={'100%'} nome='SignOut' />
            </div>
        </div>
    )
}

export default SignIn