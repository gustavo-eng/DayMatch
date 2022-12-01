import React, {useState} from "react";
import { Link } from "react-router-dom";
import  '../Calender/style.css'
import Botao from "../../components/Botao";
// Scheduler
// 09:01 timer
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


// passar datas para versao brasileira 

// navigation --> 
import { useNavigate} from "react-router-dom";


//icones
import { BiLogOutCircle,BiCalendarEvent } from "react-icons/bi";
import { BsFillLockFill } from "react-icons/bs";


const locales = {
    //"pt-br": require("date-fns/locale/pt-BR")
    "en-US": require("date-fns/locale/en-US"),
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});


const events = [
    {
        title: "Grande Reuniao",
        allDay: false,
        start: new Date(2022, 10, 5),
        end: new Date(2022, 10, 5),
        
    },
    {
        title: "Pequena Reuniao",
        allDay: true,
        start: new Date(2022, 10, 5),
        end: new Date(2022, 10, 5),
    },
    {
        title: "Vacation!!!",
        start: new Date(2022, 10, 8),
        end: new Date(2022, 10, 10),
    },
    {
        title: "Reuniao Matheus",
        start: new Date(2022, 10, 9),
        end: new Date(2022, 10, 11),
    },
    {
        title: "testando",
        start: new Date(2022, 11, 9),
        end: new Date(2022, 11, 15),
    },
    {
        title: "Conference",
        start: new Date().toLocaleDateString('pt-br'),
        end: new Date(2021, 6, 23),
    },
    {
        title: "Conference",
        start: new Date().toLocaleDateString('pt-br'),
        end: new Date(2021, 6, 23),
    },
];


const Calender = (props) => {

    const [valor, onChange] = useState( new Date())
    const navigate = useNavigate()

    const compile = () => {
        console.log('clicou no evento')
    }

    const toSignIn = () => {
        console.log('Ir para calendario')
        navigate("/")
    }


    return (
        <div className="containerCalender">  
            <h2 className="textNomeSite">DayMatch <BiCalendarEvent/></h2>

            <Calendar 
                localizer={localizer}
                events={events}  
                startAccessor="start" 
                endAccessor="end" 
                style={{ height: 500, margin: "30px"}} 
                className="big-calender"
                onSelectEvent={compile} // funciona ao clicar no evento 
                //views={['month']} tira as outra opcoes e deixa so o mes
                
                
            />
            <div className="containerBtn">
                
                <button className="btnVoltar" onClick={toSignIn}> 
                    <div className="tituloBtn"> <BiLogOutCircle className="iconeLogOut"/> LogOut  </div>
                </button>
            </div>
            
        </div>
    )
}

export default Calender;


// documentacao 
/* 
https://www.npmjs.com/package//react-big-calendar
https://www.npmjs.com/package/react-datepicker
https://jquense.github.io/react-big-calendar/examples/?path=/docs/additional-examples--custom-time-gutter-header
*/