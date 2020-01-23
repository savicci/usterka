import React, {useState} from "react";
import {Modal} from "react-bootstrap";
import timeGridPlugin from "@fullcalendar/timegrid";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import {Prompt} from "./Prompt";

export const CalendarModal = (props) => {
    const calendarRef = React.createRef();
    const [reservation, setReservation] = useState(undefined);


    const handleSelect = (info) => {
        setReservation({start: info.start, end: info.end});
    };

    const handleClose = () => {
        setReservation(undefined);
        props.handleClose();
    };

    return (
        <Modal size='lg' show={props.show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Kalendarz wykonawcy</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {reservation === undefined ? <></> : (
                    <Prompt handleClose={handleClose} reservation={reservation}/>
                )}

                <FullCalendar
                    ref={calendarRef}
                    defaultView="timeGridWeek"
                    allDaySlot={false}
                    selectable={true}
                    plugins={[timeGridPlugin, interactionPlugin]}
                    events={[]}
                    select={handleSelect}
                    height="auto"
                />
            </Modal.Body>

            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    );
};