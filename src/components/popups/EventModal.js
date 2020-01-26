import React, {useState} from "react";
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

const CompanyWrapper = styled.div`
{
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
background-color: rgb(249,249,249);
padding: 8px;
}

img {
border: solid 1px;
}
`;

export default function EventModal(props) {
    let event = mockedEvents.find(event => event.id === props.id);

    const [stars, setStars] = useState(event.rate);

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
                            event.state === 'finished' &&
                            setStars(prevState => {
                                return {...prevState, cost: value};
                            })
                        }}
                    />
                </Rating>
                <Rating>
                    <>
                        <h3>Jakosc</h3>
                    </>
                    <BeautyStars
                        value={rating.quality}
                        onChange={value => {
                            event.state === 'finished' &&
                            setStars(prevState => {
                                return {...prevState, quality: value};
                            })
                        }}
                    />
                </Rating>
                <Rating>
                    <>
                        <h3>Czas</h3>
                    </>
                    <BeautyStars
                        value={rating.time}
                        onChange={value => {
                            event.state === 'finished' &&
                            setStars(prevState => {
                                return {...prevState, time: value};
                            })
                        }}
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

    function getCompanyComponent() {
        return (
            <div>
                <CompanyWrapper>
                    <h4> Wykonawca: {event.company.name}</h4>
                    <img src={event.company.photo} width={100} height={100} alt='company photo'/>
                </CompanyWrapper>
            </div>
        )
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

                {getCompanyComponent()}

                {event.state === 'active' ? <></> : (
                    <div>
                        {getRatingComponent(stars)}
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