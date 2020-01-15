import styles from "../filters.module.css";
import React from "react";

class RangeBar extends React.Component {
    render() {
        return (
            <div className={styles.SlideContainer}>
                <input id='myRange'
                       step='0.1' className={styles.Slide}
                       type='range'
                       min='0'
                       max='10'
                       value={this.props.range}
                       onChange={this.rangeChangeHandler}/>
            </div>
        );
    }
}

export default RangeBar;