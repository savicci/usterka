import React, {useState} from "react";
import Filters from "./filters/filters";
import Results from "./Results/Results";
import {CalendarModal} from "../popups/CalendarModal";

export const SearchPage = () => {
    const [dist, setDist] = useState(0);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);
    const [start, setStart] = useState(false);


    const handleDist = (dis) => setDist(dis);
    return (
        <div>
            <CalendarModal show={show} handleClose={handleClose}/>

            <Filters
                filtersCalDist={handleDist}
            />
            <Results
                modalOpen={handleOpen}
                dist={dist}
            />
        </div>
    )
};