import React, {useState} from "react";
import FullCalendar from '@fullcalendar/react'
import {getEventsWithColorsMapped, mockedEvents} from "../utils/mockedEvents";
import timeGridPlugin from '@fullcalendar/timegrid';
import {LegendBar} from "./LegendBar";
import SomeModal from "../popups/SomeModal";

import "./MainPage.css";


export default () => {
    const [events, setEvents] = useState(mockedEvents);

    const calendarRef = React.createRef();

    function handleClick(info) {
        setId(info.event.id);
        setShow(true);
    }

    const [show, setShow] = useState(false);
    const [id, setId] = useState(undefined);

    return (
        <div className="mainPage">
            <SomeModal show={show} handleClose={() => setShow(false)} id={id}/>

            <LegendBar/>
            <div className="calendar">
                <FullCalendar
                    ref={calendarRef}
                    defaultView="timeGridWeek"
                    plugins={[timeGridPlugin]}
                    allDaySlot={false}
                    events={getEventsWithColorsMapped(events)}
                    eventClick={handleClick}
                />
            </div>
        </div>
    );
};