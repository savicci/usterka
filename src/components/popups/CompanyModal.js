import React from "react";
import {Modal} from "react-bootstrap";
import styles from './CompanyModal.module.css'
import BeautyStars from "beauty-stars";

export const CompanyModal = (props) => {
    console.log(props.companyData);
    console.log(props.companyData.oceny);
    const oceny=props.companyData.oceny;
    return (
        <Modal show={props.show} onHide={props.handleClose} dialogClassName={styles.CompanyModal} size={"lg"}>
            <Modal.Header closeButton>
                <Modal.Title className={styles.title}>Firma {props.companyData.nazwa}</Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.CompanyModalBody}>
                <div className={styles.photoOpis}>
                    <p className={styles.photo}>
                        <img src={props.companyData.photo} alt='fot'/>
                    </p>
                    <div className={styles.CompanyModalOpis}>
                        <h4>Opis firmy</h4>
                        <p>{props.companyData.opis}</p>
                    </div>
                </div>
                <div className={styles.ocena}>
                    <h4>Ocena</h4>
                    <div className={styles.podOcena}>
                        <h6>Cena</h6>
                        <BeautyStars activeColor={'#f7b731'} value={props.companyData.oceny===undefined?0:props.companyData.oceny[0]}/>
                    </div >
                    <div className={styles.podOcena}>
                        <h6>Jakość</h6>
                        <BeautyStars activeColor={'#f7b731'} value={props.companyData.oceny===undefined?0:props.companyData.oceny[1]}/>
                    </div>
                    <div className={styles.podOcena}>
                        <h6>Czas wykonania</h6>
                        <BeautyStars activeColor={'#f7b731'} value={props.companyData.oceny===undefined?0:props.companyData.oceny[2]}/>
                    </div>
                </div>

                <div className={styles.Komentarz}>
                    <h4>Komentarze</h4>
                    <p>Jakis komentarz</p>
                </div>


            </Modal.Body>
        </Modal>
    )

};