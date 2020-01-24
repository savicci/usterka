import React from "react";
import Auxiliray from '../../../hoc/Auxiliary/Auxiliary'
import styles from './filters.module.css'
import RangeBar from './RangeBar/RangeBar'

class Filters extends React.Component {
    state = {
        range: 0,
        type:
            {
                rem: false,
                bud: false,
                mal: false,
                pomoc: false,
                hyd: false,
                sprz: false,
                stol: false
            },
        dana_filtr: 0,
        licznik:this.props.licznik
    };

    toggleCheck = (e, licznik) => {
        const name = e.target.name;
        const checked = e.target.checked;
        this.setState((prevState) => {
            return {
                type: {
                    ...prevState.type,
                    [name]: !prevState.type[name]
                }
            }
        });
        // this.setState({dana_filtr: (this.state.dana_filtr + 1)})
        // this.props.test_cal(this.state.dana_filtr);
        this.props.filtersCalCheck(this.state.type);
        // this.props.onLicznikChange(e.target.value);
    };
    rangeChangeHandler = (e) => {
        this.setState({range: e.target.value});
        console.log('km w filters ' + this.state.range);
        this.props.filtersCalDist(this.state.range)
    };

    handleChangeLicznik=(e)=>{
        this.props.onLicznikChange(this.state.licznik++)
    };

    render() {
        let licznik = this.props.licznik;
        const licznik_change = () => {
            licznik++;
        };

        //console.log(this.state.type.pomoc);
        const stylek = {
            // background: 'linear-gradient(90deg,rgb(117,252,117) '+ {this.state.range}+', rgb(214,214,214)'+ 60%+')'
            background: `linear-gradient(90deg,lightskyblue ${this.state.range * 10}%, #95a5a6 ${this.state.range}%)`
        };
        return (
            <Auxiliray>
                <div className={styles.Filtr}>

                    <div className={styles.Inp}>
                        <input placeholder='Czego dzisiaj szukasz? '></input>
                    </div>
                    <div className={styles.sortowanie}>
                        <button className={styles.sortowanie_btn}>Sortuj po:</button>
                        <div className={styles.sort}>
                            <a href='/'>Alfabetycznie</a>
                            <a href='/'>Ocena</a>
                            <a href='/'>Odleglosc</a>
                        </div>
                    </div>

                    <h2>Kategorie</h2>
                    <ul>
                        <li>
                            <label><input type='checkbox'
                                          checked={this.state.licznik}
                                          name={'rem'}
                                          onChange={this.handleChangeLicznik}
                            />Test
                            </label>
                        </li>
                        <li>
                            <label><input type='checkbox'
                                          checked={this.state.type.rem}
                                          name={'rem'}
                                          onChange={this.toggleCheck}/>Usługi remontowe
                            </label>
                        </li>
                        <li>
                            <label><input type='checkbox'
                                          checked={this.state.type.hyd}
                                          name={'hyd'}
                                          onChange={this.toggleCheck}/>Usługi
                                hydrauliczne</label>
                        </li>
                        <li>
                            <label><input type='checkbox'
                                          checked={this.state.type.bud}
                                          name={'bud'}
                                          onChange={this.toggleCheck}/>Usługi
                                budowlane</label>
                        </li>
                        <li>
                            <label><input type='checkbox'
                                          checked={this.state.type.stol}
                                          name={'stol'}
                                          onChange={this.toggleCheck}/>Usługi
                                stolarskie</label>
                        </li>
                        <li>
                            <label><input type='checkbox'
                                          checked={this.state.type.pomoc}
                                          name={'pomoc'}
                                          onChange={this.toggleCheck}
                            />Pomoc kuchenna</label>
                        </li>
                        <li>
                            <label><input type='checkbox' checked={this.state.type.mal}
                                          name={'mal'}
                                          onChange={this.toggleCheck}/>Malowanie</label>
                        </li>
                        <li>
                            <label><input type='checkbox' checked={this.state.type.sprz}
                                          name={'sprz'}
                                // onChange={this.toggleCheck}
                                          onChange={this.toggleCheck}
                            />Sprzątanie
                            </label>
                        </li>
                    </ul>
                    <h2>Odległość</h2>
                    <div className={styles.SlideContainer}>
                        <input id='myRange' step='0.1' className={styles.Slide} style={stylek} type='range' min='0'
                               max='10' value={this.state.range} onChange={this.rangeChangeHandler}/>
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