import React from "react";
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary'
import kekw from '../../../../assets/img/kekw.png'
import styles from './result.module.css'
import styles2 from '../../Labels/Labels.module.css'
class Result extends React.Component {
    clickHandler=(e)=>{
        console.log('klik');
    };

    print_cat=()=>{
        for(let i=0;i<this.props.specjalizacja.size;i++)
        {

        }
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

                    <p className={styles.nazwa_firmy}>{this.props.nazwa}</p>
                    <p className={styles.specjalizacje}>{this.props.specjalizacja}</p>
                    <p className={styles.opis}>{this.props.opis}</p>
                    <p className={styles.ocena}>{this.props.ocena}</p>
                    <p className={styles.km}>{this.props.odleglosc} km</p>
                    <p className={styles.zamow}>
                        <button onClick={this.props.modalOpen}>Zamow</button>
                    </p>

                </div>
            </Auxiliary>
        );
    }
}

export default Result