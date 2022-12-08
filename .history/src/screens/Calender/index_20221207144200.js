import React, {useState, useEffect} from "react";
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


// DatePicker Timer !!
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




// navigation --> 
import { useNavigate} from "react-router-dom";


//icones
import { BiLogOutCircle,BiCalendarEvent } from "react-icons/bi";
// import { BsFillLockFill } from "react-icons/bs";


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

// No title vai os nomes das pessoas 
export const events = [
    {
        title: "Reuniao Matheus",
        start: new Date(2022, 10, 9),
        end: new Date(2022, 10, 11),
    },
    {
        title: "Reuniao bETINA",
        start: new Date(2022, 10, 12),
        end: new Date(2022, 10, 14),
    },
    {
        title: "PROFESSORA",
        start: new Date(2022, 10, 15),
        end: new Date(2022, 10, 19),
    },
    {
        title: "testando!!",
        start: new Date(2022, 11, 9),
        end: new Date(2022, 11, 15),
    },
    {
        title: "testando2",
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

    const  [dataLivre, setDataLivre] = useState({
        title: "",
        allDay: false,
        start: "",
        end: "",
    }) // objeto 
    
    const [eventos, setEventos] = useState(events)

    // allEvents === eventos
    // newEvent === dataLivre

    //datas vars
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [render, setRender] = useState(false)
    function handleAddEvent(){
        console.log('data configurada --> ')
        console.log(startDate)
        setRender(!render)
        events.push({
            title: dataLivre.title,
            allDay: false,
            start: startDate,
            end: endDate, // 3/12
        })
      //setEventos([...eventos, dataLivre])
    }

    const [valor, onChange] = useState( new Date())
    const navigate = useNavigate()

    const compile = () => {
        console.log('clicou no evento')
    }

    const toSignIn = () => {
        console.log('Ir para calendario')
        navigate("/")
    }

    useEffect(() => {
        //Apenas para renderizar a pagina novamente, assim que o datePicker for setado
    }, [render])

    return (
        <div className="containerCalender">  
            <h2 className="textNomeSite">DayMatch <BiCalendarEvent/></h2>
             <div className="containerDADOS">
                <div className="containerINLINE">
                    <input  className="noveEventoInput"  placeholder="Informe o nome do evento..." value={dataLivre.title}
                        onChange={(e) => setDataLivre({...dataLivre, title: e.target.value})}
                    />
                    <span>Informe a data de inicio </span>
                    <DatePicker placeholderText="Data de Início" className="datePicker"
                        selected={startDate} onChange={(date) => setStartDate(date)} 
                        locale={locales[0]}  
                    />
                    <DatePicker placeholderText="Data de Fim" className="datePicker"
                        selected={endDate} onChange={(date) => setEndDate(date)} 
                        locale={locales[0]}  
                    />
                    <button className="handleAddEvent" onClick={handleAddEvent}> Adicionar evento </button> 
                </div>
             </div>

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

