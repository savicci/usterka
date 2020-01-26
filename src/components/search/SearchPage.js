import React, {useState} from "react";
import Filters from "./filters/filters";
import Results from "./Results/Results";
import {ReservationModal} from "../popups/ReservationModal";
import styles from './Search.module.css'
import {SuccessToast} from "../utils/SuccessToast";
import {CalendarModal} from "../popups/CalendarModal";


const toastStyles = {
    position: 'absolute',
    left: '50%',
    top: '10%',
    zIndex: '100000',
};

export const SearchPage = () => {
    const [dist, setDist] = useState(10);

    const [showReservation, setShowReservation] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);

    const [licznik, setLicznik] = useState(0);
    const [checkBoxexArray, setCheckBoxexArray] = useState(new Map([
        ['Uslugi Remontowe', true],
        ['Uslugi Budowlane', true],
        ['Malowanie', true],
        ['Sprzatanie', true],
        ['Uslugi Hydrauliczne', true],
        ['Uslugi Stolarskie', true],
        ['Pomoc Kuchenna', true]
    ]));
    const [searchWord, setSearchWord] = useState('');
    const [sortAlf, setSortAlf] = useState('');

    const handleSortAlf = (s) => setSortAlf(s);
    const handleReservationClose = () => setShowReservation(false);
    const handleReservationOpen = () => setShowReservation(true);
    const [toast, setToast] = useState(false);

    const [events, setEvents] = useState(undefined);

    const handleLicznikChange = (licz) => {
        setLicznik(licz);
    };
    const handleDist = (dis) => setDist(dis);
    const handleCheckChange = (chan) => setCheckBoxexArray(chan);
    const handleWordChange = (txt) => setSearchWord(txt);

    const handleCalendarOpen = () => setShowCalendar(true);
    const handleCalendarClose = () => setShowCalendar(false);

    return (
        <div className={styles.Search}>
            <ReservationModal show={showReservation} handleClose={handleReservationClose} events={events}
                              setShowToast={() => setToast(true)}/>
            <CalendarModal show={showCalendar} handleClose={handleCalendarClose} events={events}/>
            <SuccessToast show={toast} setShow={setToast}/>

            <Filters
                onDistanceChange={handleDist}
                onLicznikChange={handleLicznikChange}
                licznik={licznik}
                distance={dist}
                checks={checkBoxexArray}
                onCheckChange={handleCheckChange}
                word_f={searchWord}
                onWordChange={handleWordChange}
                sortA={sortAlf}
                onSortA={handleSortAlf}
            />

            <Results
                modalOpen={handleReservationOpen}
                dist={dist}
                liczn={licznik}
                checks={checkBoxexArray}
                setEvents={setEvents}
                word={searchWord}
                sortAlfa={sortAlf}
                calendarOpen={handleCalendarOpen}
            />

        </div>
    )
};