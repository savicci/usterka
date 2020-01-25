import React, {useEffect, useState,useCallback} from "react";
import Filters from "./filters/filters";
import Results from "./Results/Results";
import {CalendarModal} from "../popups/CalendarModal";
import styles from './Search.module.css'

export const SearchPage = () => {
    const [dist, setDist] = useState(10);
    const [show, setShow] = useState(false);
    const [licznik,setLicznik]=useState(0);
    const [checkBoxexArray,setCheckBoxexArray]=useState(new Map([
        ['Uslugi Remontowe',true],
        ['Uslugi Budowlane',true],
        ['Malowanie',true],
        ['Sprzatanie',true],
        ['Uslugi Hydrauliczne',true],
        ['Uslugi Stolarskie',true],
        ['Pomoc Kuchenna',true]
    ]));
    const [searchWord,setSearchWord]=useState('');
    const [sortAlf,setSortAlf]=useState('');

    const handleSortAlf=(s)=>setSortAlf(s);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);
    const handleLicznikChange=(licz)=>{
        setLicznik(licz);
    };
    const handleDist = (dis) => setDist(dis);
    const handleCheckChange=(chan)=>setCheckBoxexArray(chan);
    const handleWordChange=(txt)=>setSearchWord(txt);

    return (
        <div className={styles.Search}>
            <CalendarModal show={show} handleClose={handleClose}/>

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
                modalOpen={handleOpen}
                dist={dist}
                liczn={licznik}
                checks={checkBoxexArray}
                word={searchWord}
                sortAlfa={sortAlf}
            />

        </div>
    )
};