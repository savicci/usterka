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
    const [licznik,setLicznik]=useState(0);
    const [checkBoxexArray,setCheckBoxexArray]=useState(new Map([
        ['Uslugi Remontowe',false],
        ['Uslugi Budowlane',false],
        ['Malowanie',false],
        ['Sprzatanie',false],
        ['Uslugi Hydrauliczne',false],
        ['Uslugi Stolarskie',false],
        ['Pomoc Kuchenna',false]
    ]));
    const handleClose = () => setShow(false);
    const handleClose = () => {

        setShow(false);
    };
    const handleOpen = () => setShow(true);
    const handleLicznikChange=(licz)=>{
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
    const handleCheckChange=(chan)=>setCheckBoxexArray(chan);
    return (
        <div>
            <CalendarModal show={show} handleClose={handleClose} events={events} setShowToast={() => setToast(true)}/>

            <SuccessToast show={toast} setShow={setToast}/>
        <div className={styles.Search}>
            <CalendarModal show={show} handleClose={handleClose}/>

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