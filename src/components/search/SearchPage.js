import React, {useEffect, useState,useCallback} from "react";
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
    //const forceUpdate = useCallback(() => updateState({}), []);
    const [licznik,setLicznik]=useState(0);

    const handleLicznikChange=(licz)=>{
        setLicznik(licz);
    };

    const handleDist = (dis) => setDist(dis);
    const handleCheck=  (che)=>
    {
        setCheck(che);
    };

    // const logChe=()=>{
    //     console.log(licznik)
    // };
    // logChe();
    return (
        <div>
            <CalendarModal show={show} handleClose={handleClose}/>

            <Filters
                onDistanceChange={handleDist}
                filtersCalCheck={handleCheck}
                onLicznikChange={handleLicznikChange}
                licznik={licznik}
                distance={dist}
            />

            <Results
                modalOpen={handleOpen}
                dist={dist}
                boxy={check}
                liczn={licznik}
            />

        </div>
    )
};