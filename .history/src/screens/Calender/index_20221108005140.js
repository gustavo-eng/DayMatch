import React, {useState} from "react";
import { Link } from "react-router-dom";
import  '../Calender/style.css'

// Scheduler
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from "date-fns/startOfWeek";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const Calender = (props) => {

    const [valor, onChange] = useState( new Date())
    return (
        <div className="containerCalender">
            Dentro de Calender.js 
            <Link to="/"> Voltar</Link>
            
        </div>
    )
}

export default Calender;