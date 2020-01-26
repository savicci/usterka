import React, {useEffect, useState} from "react";
import {Alert, Modal} from "react-bootstrap";
import {Prompt} from "./Prompt";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const WorkerProfile = (props) => {
    const calendarRef = React.createRef();
    const [reservation, setReservation] = useState(undefined);
    const [error, setError] = useState({occured: false, message: ''});
    const [show, setShow] = useState(props.sh);


    return (
        <Modal
            show={show}
            onHide={() => setShow(props.sh)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Custom Modal Styling
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                    commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                    ipsam atque a dolores quisquam quisquam adipisci possimus
                    laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                    accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                    reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                    deleniti rem!
                </p>
            </Modal.Body>
            <Modal.Footer>

                </Modal.Footer>
        </Modal>
);
};

export default WorkerProfile;