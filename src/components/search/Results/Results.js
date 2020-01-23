import React from "react";
import Result from "./result/result";
import styles from './Results.module.css'
import Labels from "../Labels/Labels";
class Results extends React.Component{
    render() {
        return(
            <div className={styles.Results}>
                <Labels/>
                <Result modalOpen={this.props.modalOpen}/>
                <Result modalOpen={this.props.modalOpen}/>
                <Result modalOpen={this.props.modalOpen}/>
                <Result modalOpen={this.props.modalOpen}/>
                <Result modalOpen={this.props.modalOpen}/>
            </div>
        );
    }
}

export default Results;