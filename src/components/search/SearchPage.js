import React, {useState} from "react";
import Filters from "./filters/filters";
import Results from "./Results/Results";
import {CalendarModal} from "../popups/CalendarModal";

export const SearchPage = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    return (
        <div>
            <CalendarModal show={show} handleClose={handleClose}/>

            <Filters/>
            <Results modalOpen={handleOpen}/>
        </div>
    )
};