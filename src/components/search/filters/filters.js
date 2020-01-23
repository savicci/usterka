import React from "react";
import Auxiliray from '../../../hoc/Auxiliary/Auxiliary'
import styles from './filters.module.css'
import RangeBar from './RangeBar/RangeBar'
class Filters extends React.Component {
    state = {
        range:0
    };
    rangeChangeHandler = (e) => {
        this.setState({range:e.target.value});
        console.log('km w filters '+this.state.range);
        this.props.filtersCalDist(this.state.range)
    };

    render() {
        const stylek={
            // background: 'linear-gradient(90deg,rgb(117,252,117) '+ {this.state.range}+', rgb(214,214,214)'+ 60%+')'
            background: `linear-gradient(90deg,lightskyblue ${this.state.range*10}%, #95a5a6 ${this.state.range}%)`
        };
        return (
            <Auxiliray>
                <div className={styles.Filtr}>

                    <div className={styles.Inp}>
                        <input placeholder='Czego dzisiaj szukasz? '></input>
                    </div>
                    <div className={styles.sortowanie}>
                        <button className={styles.sortowanie_btn}>Sortuj po: </button>
                        <div className={styles.sort}>
                            <a href='/'>Alfabetycznie</a>
                            <a href='/'>Ocena</a>
                            <a href='/'>Odleglosc</a>
                        </div>
                    </div>

                    <h2>Kategorie</h2>
                    <ul>
                        <li>
                            <label><input type='checkbox'/>Usługi remontowe</label>
                        </li>
                        <li>
                            <label><input type='checkbox'/>Usługi hydrauliczne</label>
                        </li>
                        <li>
                            <label><input type='checkbox'/>Usługi budowlane</label>
                        </li>
                        <li>
                            <label><input type='checkbox'/>Usługi stolarskie</label>
                        </li>
                        <li>
                            <label><input type='checkbox'/>Pomoc kuchenna</label>
                        </li>
                        <li>
                            <label><input type='checkbox'/>Malowanie</label>
                        </li>
                        <li>
                            <label><input type='checkbox'/>Sprzątanie</label>
                        </li>
                    </ul>
                    <h2>Odległość</h2>
                    <div className={styles.SlideContainer}>
                        <input id='myRange' step='0.1' className={styles.Slide} style={stylek} type='range' min='0' max='10' value={this.state.range} onChange={this.rangeChangeHandler}/>
                        <p>{this.state.range} km</p>
                    </div>
                    <div className={styles.zastosuj}>
                        {/*<button onClick={this.props.hanStarFil}>Zastosuj</button>*/}
                    </div>

                </div>

            </Auxiliray>
        );
    }
}


export default Filters;