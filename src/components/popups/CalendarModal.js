import React, {useEffect} from "react";
import {Alert, Modal} from "react-bootstrap";
import {Prompt} from "./Prompt";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const businessHours = {
    daysOfWeek: [1, 2, 3, 4, 5, 6],
    startTime: '7:00',
    endTime: '21:00',
};

export const CalendarModal = (props) => {
    const calendarRef = React.createRef();

    // prevent bug with events not showing
    useEffect(() => {
        if (calendarRef.current) {
            calendarRef.current.calendar.prev();
            calendarRef.current.calendar.next();
        }
    }, [props.show]);

    return (
        <Modal size='lg' show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Kalendarz wykonawcy</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FullCalendar
                    ref={calendarRef}
                    defaultView="timeGridWeek"
                    allDaySlot={false}
                    plugins={[timeGridPlugin, interactionPlugin]}
                    events={props.events}
                    height={700}
                    businessHours={businessHours}
                />
            </Modal.Body>

            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    )

};