import React, {useEffect, useState} from "react";
import {Alert, Modal} from "react-bootstrap";
import timeGridPlugin from "@fullcalendar/timegrid";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import {Prompt} from "./Prompt";

const businessHours = {
    daysOfWeek: [1, 2, 3, 4, 5, 6],
    startTime: '7:00',
    endTime: '21:00',
};


export const ReservationModal = (props) => {
    const calendarRef = React.createRef();
    const [reservation, setReservation] = useState(undefined);
    const [error, setError] = useState({occured: false, message: ''});

    const collides = (info) => {
        return props.events.events.find(event => {
            const eventStart = new Date(event.start);
            const eventEnd = new Date(event.end);
            return (info.start >= eventStart && info.start <= eventEnd) ||
                (info.end >= eventStart && info.end <= eventEnd) ||
                (info.start <= eventStart && info.end >= eventEnd);
        })
    };

    const handleSelect = (info) => {
        if (collides(info)) {
            setError({occured: true, message: 'Wybierz inny termin'});
        } else {
            setError({occured: false, message: ''});
            setReservation({start: info.start, end: info.end});
        }
    };


    const handleClose = (param) => {
        setReservation(undefined);
        if (param) {
            props.setShowToast();
        }
        setError({occured: false, message: ''});
        props.handleClose();
    };

    // prevent bug with events not showing
    useEffect(() => {
        if (calendarRef.current) {
            calendarRef.current.calendar.prev();
            calendarRef.current.calendar.next();
        }
    }, [props.show]);

    return (
        <Modal size='lg' show={props.show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Kalendarz wykonawcy</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {error.occured !== false && <Alert variant="danger">{error.message}</Alert>}

                {reservation !== undefined && (
                    <Prompt handleClose={handleClose} reservation={reservation} setError={setError}/>)}

                <FullCalendar
                    ref={calendarRef}
                    defaultView="timeGridWeek"
                    allDaySlot={false}
                    selectable={true}
                    unselectAuto={false}
                    plugins={[timeGridPlugin, interactionPlugin]}
                    events={props.events}
                    select={handleSelect}
                    height={500}
                    businessHours={businessHours}
                    dragScroll={false}
                />
            </Modal.Body>

            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    );
};