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


// DatePicker Timer && Modal
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from 'react-modal'





// navigation --> 
import { useNavigate} from "react-router-dom";


//icones
import { BiArrowBack,BiCalendarEvent } from "react-icons/bi";

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

// JSONs de eventos cadastrados 
export const events = [
 {
        title: "",
        allDay: false,
        start: "",
        end: "",
 },
];

Modal.setAppElement("#root")


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
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    //Modal
    const [modalOpen, setModalOpen] = useState(false)

    //Renderiza
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

    const [valor, onChange] = useState( new Date(2022, 11,7))
    const navigate = useNavigate()

    const compile = () => {
        console.log('clicou no evento')
    }

    const toSignIn = () => {
        console.log('Ir para calendario')
        navigate("/")
    }

    // today
    const [hoje, setHoje] = useState(new Date())

    const toggleModal = () => {
        setModalOpen(!modalOpen)
    }
  

    return (
        <div className="containerCalender"> 
           
            <div className="containerBtn">
                <button className="btnVoltar" onClick={toSignIn}> 
                    <div className="tituloBtn"> <BiArrowBack className="iconeLogOut"/> Sair  </div>
                </button>
            </div> 
            <h2 className="textNomeSite">DayMatch <BiCalendarEvent/></h2>
            
                <div className="containerDADOS">
                    <div className="containerINLINE">
                        <div className="paragrafoData">Informe seu nome
                            <input  className="noveEventoInput"  placeholder="Insira seu nome aqui. . ." value={dataLivre.title}
                                onChange={(e) => setDataLivre({...dataLivre, title: e.target.value})}
                            />
                        </div>
                        <div className="conteinerLABEL">
                        <p className="labelDatasAdvice"> Insira as datas livres para reuniões </p>
                        </div>
                        
                        <div className="containerDatePickers">
                            
                            <DatePicker placeholderText="Data de Início" className="datePicker"
                                selected={startDate ? startDate : ''} onChange={(date) => setStartDate(date)} 
                                locale={locales[0]}          
                            />
                            <DatePicker placeholderText="Data de Fim" className="datePicker"
                                selected={endDate ? endDate : ''} onChange={(date) => setEndDate(date)} 
                                locale={locales[0]}  
                            />
                        </div>
                        <div className="containerButtons">
                            <button className="handleAddEvent" onClick={handleAddEvent}> Adicionar </button>
                            <button className="betterTimer" onClick={toggleModal}> Agendar </button>
                        </div>
                            
                            

                    </div>
                
            </div>
            {
                modalOpen ? (
                    
                            <Modal
                                isOpen={modalOpen}
                                onRequestClose={modalOpen}
                                contentLabel="Exemplo de modal"
                                overlayClassName={"modal-overlay"} // altera o css da modal na parte externa
                                className={"modal"}
                            >
                                <div className="containerModal">
                                    <hr/>
                                    <h2 className="h2Modal">Reunião marcada !  </h2>
                                    <p>       
                                        O sistema calculou e registrou a melhor data para a reuniäo! 
                                        Será enviado um email para o gestor  com um arquivo referente a 
                                        confirmação da data, pronto para ser redistribuído entre nomes registrados
                                        no sistema.
                                         
                                        Data gerada : {events[1] ? events[1].start.toString() : 'nda msm'}    
                                    </p>
                                
                                    <button className="handleAddEvent">Fechar</button>
                                </div>
                            </Modal>
                    
                ) : 
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
            }

            
            
            
        </div>
    )
}

export default Calender;


// Documentção utilizada 
/* 
https://www.npmjs.com/package//react-big-calendar
https://www.npmjs.com/package/react-datepicker
https://www.npmjs.com/package/react-modal
https://reactnative.dev/docs/getting-started

*/

