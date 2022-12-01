import React, {useState} from "react";
import { Link } from "react-router-dom";
import  '../Calender/style.css'

// Scheduler
import Calendar from "react-calendar";


const Calender = (props) => {

    
    return (
        <div className="containerCalender">
            Dentro de Calender.js 
            <Link to="/"> Voltar</Link>
            
        </div>
    )
}

export default Calender;