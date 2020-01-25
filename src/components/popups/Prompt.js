import React, {useState} from "react";
import {Button, FormControl, InputGroup} from "react-bootstrap";
import styled from "styled-components";

const ButtonMenu = styled.div`
{
    display: flex;
    justify-content: space-around;
    padding: 16px;
}`;

export const Prompt = (props) => {
    const [form, setForm] = useState({
        title: '',
        shortText: '',
    });

    const validateForm = () => {
        if (form.title === '') {
            props.setError({occured: true, message: 'Dodaj tytul ogloszenia'})
        } else if (form.shortText === '') {
            props.setError({occured: true, message: 'Dodaj opis ogloszenia'})
        } else {
            props.setError({occured: false, message: 'ok'});
            props.handleClose(true);
        }
    };


    return (
        <>
            <div>
                <h4>Wybrane
                    terminy: <br/> {props.reservation.start.toLocaleString()} - {props.reservation.end.toLocaleString()}
                </h4>
            </div>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>
                        Tytul ogloszenia
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-describedby="basic-addon3" onChange={text => setForm(prevState => {
                    return {...prevState, title: text};
                })}/>
            </InputGroup>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Krotki opis</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="textarea" aria-label="With textarea" onChange={text => setForm(prevState => {
                    return {...prevState, shortText: text};
                })}/>
            </InputGroup>

            <ButtonMenu>
                <Button variant="secondary" onClick={props.handleClose}>
                    Anuluj
                </Button>
                <Button variant="primary" onClick={validateForm}>
                    Zarezerwuj
                </Button>
            </ButtonMenu>
        </>
    )
};