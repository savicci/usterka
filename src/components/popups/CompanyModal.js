import React from "react";
import {Modal} from "react-bootstrap";

export const CompanyModal = (props) => {

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Firma {props.companyData.nazwa}</Modal.Title>
                <Modal.Body>Body firmy</Modal.Body>
            </Modal.Header>
        </Modal>
    )

};