import React, {useState} from "react";
import { Link } from "react-router-dom";
import  '../Calender/style.css'

// Scheduler
import Calendar from "react-calendar";
//import  'react-calendar/dist/Calendar.css' ;

const Calender = (props) => {

    const [valor, onChange] = useState( new Date())
    return (
        <div className="containerCalender">
            Dentro de Calender.js 
            <Link to="/"> Voltar</Link>
            <Calendar onChange={onChange} value={valor} />
        </div>
    )
}

export default Calender;