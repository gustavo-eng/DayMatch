import React from "react";
import { Link } from "react-router-dom";
import  '../Calender/style.css'

// Scheduler
import { SchedulerData, ViewTypes } from "scheduler-react";
import 'scheduler-react/lib/css/style.css'
import Moment from "react-moment";
import moment from 'moment'

const Calender = (props) => {

    let schedulerData = new SchedulerData(new moment().format('pt-br'), ViewTypes.Week);
    moment.locale('pt-br');

    schedulerData.setLocaleMoment(moment)

    let resources = [
            {
            id: 'r0',
            name: 'Resource0',
            author: "X",
            bgColor: 'red',
            issue: '#1'
            },
            {
            id: 'r1',
            name: 'Resource1',
            author: "X",
            bgColor: '#D9D9D9',
            issue: '#2'
            },
            {
            id: 'r2',
            name: 'Resource2',
            author: "X",
            issue: '#99'
            },
    ];

    schedulerData.setResources(resources);
    return (
        <div className="containerCalender">
            Dentro de Calender.js 
            <Link to="/"> Voltar</Link>
            
        </div>
    )
}

export default Calender;