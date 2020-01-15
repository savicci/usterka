import React from "react";
import Result from "./result/result";
import styles from './Results.module.css'
import Labels from "../Labels/Labels";
class Results extends React.Component{
    render() {
        return(
            <div className={styles.Results}>
                <Labels/>
                <Result/>
                <Result/>
                <Result/>
                <Result/>
                <Result/>
            </div>
        );
    }
}

export default Results;