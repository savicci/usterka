import React from "react";
import styles from "./Komentarz.module.css"
import BeautyStars from "beauty-stars";

class Komentarz extends React.Component {
    render() {
        return (
            <div className={styles.komentarz}>
                <div className={styles.zdjecieInazwa}>
                    <p> <img src={this.props.zdjecie}/></p>
                    <p className={styles.nazwa}>{this.props.uzytkownik}</p>
                </div>
                <div className={styles.kom}>{this.props.komentarz}</div>
                <div className={styles.ocena}>
                    <BeautyStars value={this.props.ocena} activeColor={'#f7b731'}/>
                </div>
            </div>
        )
    }

}

export default Komentarz;