import React from "react";
import styles from "./Komentarz.module.css"
import BeautyStars from "beauty-stars";

class Komentarz extends React.Component {
    render() {
        return (
            <div className={styles.komentarz}>
                <p className={styles.zdjecieInazwa}>
                    <p> <img src={this.props.zdjecie}/></p>
                    <p>{this.props.uzytkownik}</p>
                </p>
                <p>{this.props.komentarz}</p>
                <p>
                    <BeautyStars value={this.props.ocena}/>
                </p>
            </div>
        )
    }

}

export default Komentarz;