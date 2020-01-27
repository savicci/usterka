import React from "react";
import {Toast} from "react-bootstrap";
import styled from "styled-components";

const ToastWrapper = styled.div`
    position: absolute;
    left: 40%;
    top: 5%;
    opacity: 100;
    z-index: 10000;
    pointer-events: none
`;

export const SuccessToast = (props) => {
    return (
        <ToastWrapper>
            <Toast onClose={() => props.setShow(false)} show={props.show} delay={3000} autohide>
                <Toast.Header>
                    <h5>Odpowiedz od strony Usterka</h5>
                </Toast.Header>
                <Toast.Body>
                    <h5>Zarezerwowano termin</h5>
                </Toast.Body>
            </Toast>
        </ToastWrapper>
    );
};