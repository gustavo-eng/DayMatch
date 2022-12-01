//configs
import React from "react";
//import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";

//components and styles 
import Botao from "../../components/Botao";
import  '../SignIn/style.css'

//icones 
import { BsFillLockFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

const SignIn = (props) => {
    const navigate = useNavigate()
    const toCalender = () => {
        console.log('Ir para calendario')
        navigate("/calender")
 
    }
    return (
        <div className="fundo">
            <div className="container"> 
                <div className="mainData"> 
                        <h2 className="h2Title"> DayMatch </h2>
                        <div className="containerInputs"> 
                            <input className="inputEmail_Senha" />
                            <BsFillLockFill className="icone_Senha"/>
                            <input className="inputEmail_Senha" type={"password"} />
                        </div>
                        <div className="containerButton">
                            <Botao largura={'60%'} 
                                nome='SignIn' 
                                evento={toCalender}
                                margem={'4px'}
                                altura={'30px'}
                            />
                            <Botao largura={'60%'} 
                                    nome='Register ' 
                                    margem={'4px'}
                                    altura={'30px'}
                            />
                        </div> 
                </div>
            </div>
        </div>
    )
}
//<Link to="/calender">Calender</Link>

export default SignIn