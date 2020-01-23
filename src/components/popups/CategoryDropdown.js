import React from "react";
import {Form, FormLabel} from "react-bootstrap";
import styled from "styled-components";

import {categories} from "../utils/contractors";

const Styled = styled.div`
{
    padding: 16px 0px;
}`;


export const CategoryDropdown = () => {
    const checkboxes = categories.map(category => {
        return <Form.Check type="checkbox" label={category.type} key={category.id}/>
    });

    return (
        <Styled>
            <Form.Group controlId="formBasicCheckbox">
                <FormLabel>Kategorie</FormLabel>
                {checkboxes}
            </Form.Group>
        </Styled>
    )
};