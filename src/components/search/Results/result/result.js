import React from "react";
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary'
import kekw from '../../../../assets/img/kekw.png'
import styles from './result.module.css'
import styles2 from '../../Labels/Labels.module.css'
class Result extends React.Component {
    clickHandler=(e)=>{
        console.log('klik');
    };
    render() {
        return (
            <Auxiliary>
                <div className={styles.result}>

                    {/*<p className={styles.zdj}>*/}
                    {/*    <img src={kekw} alt='kekw'/></p>*/}
                    <p className={styles.zdj}>
                        <img  src={kekw} alt='kekw'/>
                    </p>

                    <p className={styles.nazwa_firmy}>Cleanix</p>
                    <p className={styles.specjalizacje}>Specjalizacje</p>
                    <p className={styles.opis}>Opis</p>
                    <p className={styles.ocena}>Ocena</p>
                    <p className={styles.km}>km</p>
                    <p className={styles.zamow}>
                        <button onClick={this.props.modalOpen}>Zamow</button>
                    </p>

                </div>
            </Auxiliary>
        );
    }
}

export default Result