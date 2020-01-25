import React, {useState} from "react";
import Filters from "./filters/filters";
import Results from "./Results/Results";
import {CalendarModal} from "../popups/CalendarModal";
import styles from './Search.module.css'
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
    const [checkBoxexArray, setCheckBoxexArray] = useState(new Map([
        ['Uslugi Remontowe', false],
        ['Uslugi Budowlane', false],
        ['Malowanie', false],
        ['Sprzatanie', false],
        ['Uslugi Hydrauliczne', false],
        ['Uslugi Stolarskie', false],
        ['Pomoc Kuchenna', false]
    ]));
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    const [licznik, setLicznik] = useState(0);
    const [toast, setToast] = useState(false);

    const [events, setEvents] = useState(undefined);

    const handleLicznikChange = (licz) => {
        setLicznik(licz);
    };
    const handleDist = (dis) => setDist(dis);

    const handleCheckChange = (chan) => setCheckBoxexArray(chan);
    return (
        <div className={styles.Search}>
            <CalendarModal show={show} handleClose={handleClose} events={events} setShowToast={() => setToast(true)}/>
            <SuccessToast show={toast} setShow={setToast}/>

            <Filters
                onDistanceChange={handleDist}
                onLicznikChange={handleLicznikChange}
                licznik={licznik}
                distance={dist}
                checks={checkBoxexArray}
                onCheckChange={handleCheckChange}
            />

            <Results
                modalOpen={handleOpen}
                dist={dist}
                liczn={licznik}
                checks={checkBoxexArray}
                setEvents={setEvents}
            />

        </div>
    )
};