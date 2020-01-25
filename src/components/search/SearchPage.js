import React, {useState} from "react";
import Filters from "./filters/filters";
import Results from "./Results/Results";
import {CalendarModal} from "../popups/CalendarModal";
import {SuccessToast} from "../utils/SuccessToast";


const toastStyles = {
    position: 'absolute',
    left: '50%',
    top: '10%',
    zIndex: '100000',
};

export const SearchPage = () => {
    const [dist, setDist] = useState(10);
    const [show, setShow] = useState(false);
    const handleClose = () => {

        setShow(false);
    };
    const handleOpen = () => setShow(true);
    const [start, setStart] = useState(false);
    const [check, setCheck] = useState();
    const [test_val_se, set_test] = useState(0);
    //const forceUpdate = useCallback(() => updateState({}), []);
    const [licznik, setLicznik] = useState(0);
    const [toast, setToast] = useState(false);

    const [events, setEvents] = useState(undefined);

    const handleLicznikChange = (licz) => {
        setLicznik(licz);
    };

    const handleDist = (dis) => setDist(dis);
    const handleCheck = (che) => {
        setCheck(che);
    };

    // const logChe=()=>{
    //     console.log(licznik)
    // };
    // logChe();
    return (
        <div>
            <CalendarModal show={show} handleClose={handleClose} events={events} setShowToast={() => setToast(true)}/>

            <SuccessToast show={toast} setShow={setToast}/>

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
                setEvents={setEvents}
            />

        </div>
    )
};