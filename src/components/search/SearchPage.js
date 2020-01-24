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
    const [check,setCheck]=useState();
    const [test_val_se,set_test]=useState(0);



    const [licznik,setLicznik]=useState(0);
    const handleLicznikChange=(licznik)=>{
        setLicznik(licznik)
    };

    const handleDist = (dis) => setDist(dis);
    const handleCheck=  (che)=>
    {
        setCheck(che);
    };

    const logChe=()=>{
        console.log(licznik)
    };
    logChe();
    return (
        <div>
            <CalendarModal show={show} handleClose={handleClose}/>

            <Filters
                filtersCalDist={handleDist}
                filtersCalCheck={handleCheck}
                onLicznikChange={handleLicznikChange}
                licznik={licznik}
            />

            <Results
                modalOpen={handleOpen}
                dist={dist}
                boxy={check}
                dana_result={licznik}
            />

        </div>
    )
};