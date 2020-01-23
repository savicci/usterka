import React from "react";
import {Button, FormControl, InputGroup, Jumbotron, Modal} from "react-bootstrap";
import {getStatusFromEvent, mockedEvents} from "../utils/mockedEvents";
import BeautyStars from "beauty-stars";
import styled from "styled-components";

const Rating = styled.div`
{
display: flex;
justify-content: space-around;
padding: 16px;
}
`;

export default function EventModal(props) {
    let event = mockedEvents.find(event => event.id === props.id);

    function getRatingComponent(rating) {
        return (
            <div>
                <Rating>
                    <>
                        <h3>Cena</h3>
                    </>
                    <BeautyStars
                        value={rating.cost}
                        onChange={value => {
                            rating.cost = value;
                            console.log(rating);
                            return rating;
                        }}
                    />
                </Rating>
                <Rating>
                    <>
                        <h3>Jakosc</h3>
                    </>
                    <BeautyStars
                        value={rating.quality}
                    />
                </Rating>
                <Rating>
                    <>
                        <h3>Czas</h3>
                    </>
                    <BeautyStars
                        value={rating.time}
                    />
                </Rating>
            </div>
        )
    }

    function getFooterLookFromEventState(event) {
        switch (event.state) {
            case 'finished':
                return (
                    <>
                        <Button variant="secondary" onClick={props.handleClose}>
                            Anuluj
                        </Button>
                        <Button variant="primary" onClick={props.handleClose}>
                            Zapisz
                        </Button>
                    </>
                );
            case 'reviewed':
            case 'active':
            default:
                return (
                    <>
                    </>
                );
        }
    }

    return (
        <Modal size='lg' show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{event.title}. <br/> Status: {getStatusFromEvent(event)}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Jumbotron>
                    {event.text}
                </Jumbotron>

                {event.state === 'active' ? <></> : (
                    <div>
                        {getRatingComponent(event.rate)}
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Ocena</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl as="textarea" aria-label="With textarea"/>
                        </InputGroup>
                    </div>
                )}

            </Modal.Body>

            <Modal.Footer>
                {getFooterLookFromEventState(event)}
            </Modal.Footer>
        </Modal>
    );
}