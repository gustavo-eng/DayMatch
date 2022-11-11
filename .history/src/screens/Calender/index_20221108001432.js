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


    let events = [
        {
            id: 1,
            start: '2017-12-18 09:30:00',
            end: '2017-12-19 23:30:00',
            resourceId: 'r1',
            title: 'I am finished',
            label: 'QA Failed',
            img: 'https://miro.medium.com/fit/c/28/28/1*UJzclN5h-DYWjRyVqXThUw.png',
            bgColor: '#D9D9D9',
            showPopover: false
        },
        {
            id: 2,
            start: '2017-12-18 12:30:00',
            end: '2017-12-26 23:30:00',
            resourceId: 'r2',
            title: 'I am not resizable',
            label: 'Development',
            resizable: false
        },
       {
           id: 3,
           start: '2017-12-19 12:30:00',
           end: '2017-12-20 23:30:00',
           resourceId: 'r3',
           title: 'I am not movable',
           movable: false
       },
       {
           id: 4,
           start: '2017-12-19 14:30:00',
           end: '2017-12-20 23:30:00',
           resourceId: 'r1',
           title: 'I am not start-resizable',
           startResizable: false
       },
       {
           id: 5,
           start: '2017-12-19 15:30:00',
           end: '2017-12-20 23:30:00',
           resourceId: 'r2',
           title: 'R2 has recurring tasks every week on Tuesday, Friday',
           rrule: 'FREQ=WEEKLY;DTSTART=20171219T013000Z;BYDAY=TU,FR',
           bgColor: '#f759ab'
       }
   ];
    schedulerData.setEvents(events);
    return (
        <div className="containerCalender">
            Dentro de Calender.js 
            <Link to="/"> Voltar!!</Link>
            
        </div>
    )
}

export default Calender;