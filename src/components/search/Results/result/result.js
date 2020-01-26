import React from "react";
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary'

import styles from './result.module.css'

class Result extends React.Component {

    handleClick = (event) => {
        this.props.setEvents({events: this.props.events});
        this.props.modalOpen();
        event.stopPropagation();

    };

    handleCalendarClick = (event) => {
        this.props.setEvents({events: this.props.events});
        this.props.calendarOpen();
        event.stopPropagation();
    };

    // daniello tu sobie ustaw wszystko co chcesz miec w modalu do wizytowki
    // potem spal ten list(usun komentarz)
    handleCompanyClick = () => {
        this.props.setCompanyData({
           nazwa: this.props.nazwa
        });

        this.props.openCompany();
    };

    render() {
        return (
            <Auxiliary>
                <div className={styles.result} onClick={this.handleCompanyClick}>

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