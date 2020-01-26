import React from "react";
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary'

import styles from './result.module.css'

class Result extends React.Component {

    handleClick = () => {
        this.props.setEvents({events: this.props.events});
        this.props.modalOpen();
    };

    handleCalendarClick = () => {
        this.props.setEvents({events: this.props.events});
        this.props.calendarOpen();
    };

    render() {
        return (
            <Auxiliary>
                <div className={styles.result}>

                    {/*<p className={styles.zdj}>*/}
                    {/*    <img src={kekw} alt='kekw'/></p>*/}
                    <p className={styles.zdj}>
                        <img src={this.props.photo} alt='kekw'/>
                    </p>

                    <p className={styles.nazwa_firmy}>{this.props.nazwa}</p>
                    <p className={styles.specjalizacje}>{this.props.specjalizacja}</p>
                    <p className={styles.opis}>{this.props.opis}</p>
                    <p className={styles.ocena}>{this.props.ocena}</p>
                    <p className={styles.km}>{this.props.odleglosc} km</p>
                    <p className={styles.zamow}>
                        <button onClick={this.handleClick}>Zamow</button>
                        <button onClick={this.handleCalendarClick}>Kalendarz</button>
                    </p>

                </div>
            </Auxiliary>
        );
    }
}

export default Result