import React from "react";
import styles from './Labels.module.css'

class Labels extends React.Component{
    render() {
        return(
            <div className={styles.Labels}>
                <p className={styles.nazwa_firmy}>Nazwa firmy</p>
                <p className={styles.specjalizacje}>Specjalizacje</p>
                <p className={styles.ocena}>Ocena</p>
                <p className={styles.km}>Odleglosc</p>
            </div>
        );
    }
}

export default Labels;