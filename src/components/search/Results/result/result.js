import React from "react";
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary'
import BeautyStars from "beauty-stars";
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

    handleCompanyClick = () => {
        this.props.setCompanyData({
           nazwa: this.props.nazwa,
            opis:this.props.opis,
            photo:this.props.photo,
            ocena:this.props.ocena,
            oceny:this.props.oceny,
            daneDoKomentarza:this.props.daneCom
        });

        this.props.openCompany();
    };

    render() {
        return (
            <Auxiliary>
                <div className={styles.result} onClick={this.handleCompanyClick}>

                    <p className={styles.zdj}>
                        <img src={this.props.photo} alt='kekw'/>
                    </p>

                    <p className={styles.nazwa_firmy}>{this.props.nazwa}</p>
                    <p className={styles.specjalizacje}>{this.props.specjalizacja}</p>
                    <p className={styles.ocena}>
                        <BeautyStars value={this.props.ocena} size={'26px'} activeColor={'#f7b731'}/>
                    </p>

                    <p className={styles.km}>{this.props.odleglosc} km</p>
                    <p className={styles.zamow}>
                        <button onClick={this.handleCalendarClick}>Kalendarz</button>
                        <button onClick={this.handleClick}>Zamow</button>
                    </p>

                </div>
            </Auxiliary>
        );
    }
}

export default Result