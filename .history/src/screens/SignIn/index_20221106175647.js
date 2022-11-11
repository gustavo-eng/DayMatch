//configs
import React from "react";
//import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";

//components and styles 
import Botao from "../../components/Botao";
import  '../SignIn/style.css'

const SignIn = (props) => {
    const navigate = useNavigate()
    const toCalender = () => {
        console.log('Ir para calendario')
        navigate("/calender")
 
    }
    return (
        <div className="container"> SignIn.js 
            <div className="containerButton">
                <Botao largura={'100%'} 
                    nome='SignIn' 
                    evento={toCalender}
                    //altura={'100%'}
                />
                <Botao largura={'100%'} nome='SignOut' />
            </div>
            <div>
                <input className="inputEmail"></input>
                <input className="inputEmail"></input>
            </div>
        </div>
    )
}
//<Link to="/calender">Calender</Link>

export default SignIn