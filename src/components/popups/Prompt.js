import React from "react";
import {Button, FormControl, InputGroup} from "react-bootstrap";
import styled from "styled-components";
import {CategoryDropdown} from "./CategoryDropdown";

const ButtonMenu = styled.div`
{
    display: flex;
    justify-content: space-around;
    padding: 16px;
}`;

export const Prompt = (props) => {

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
                <FormControl aria-describedby="basic-addon3"/>
            </InputGroup>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Krotki opis</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="textarea" aria-label="With textarea"/>
            </InputGroup>

            <CategoryDropdown/>

            <ButtonMenu>
                <Button variant="secondary" onClick={props.handleClose}>
                    Anuluj
                </Button>
                <Button variant="primary" onClick={props.handleClose}>
                    Zarezerwuj
                </Button>
            </ButtonMenu>
        </>
    )
};