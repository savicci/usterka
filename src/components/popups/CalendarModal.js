import React, {useEffect, useState} from "react";
import {Modal} from "react-bootstrap";
import timeGridPlugin from "@fullcalendar/timegrid";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import {Prompt} from "./Prompt";

export const CalendarModal = (props) => {
    const calendarRef = React.createRef();
    const [reservation, setReservation] = useState(undefined)

    const handleClick = (info) => {
        calendarRef.current.applyOverflow();
    } ;

    const handleSelect = (info) => {
        console.log(info);
        setReservation(info);
    };

    //
    // // workaround for calendar not rendering on modal
    // useEffect(() => {
    //     console.log('helo');
    //     if (calendarRef.current == null) return;
    //     calendarRef.current.getApi().prev();
    //     calendarRef.current.getApi().next();
    // }, [reservation]);

    return (
        <Modal size='lg' show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Kalendarz wykonawcy</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                { reservation === undefined ? <></>: (
                    <Prompt/>
                )}

                <FullCalendar
                    ref={calendarRef}
                    defaultView="timeGridWeek"
                    allDaySlot={false}
                    selectable={true}
                    plugins={[timeGridPlugin, interactionPlugin]}
                    events={[]}
                    eventClick={handleClick}
                    select={handleSelect}
                    height="auto"
                />
            </Modal.Body>

            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    );
};