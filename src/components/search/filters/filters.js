import React from "react";
import Auxiliray from '../../../hoc/Auxiliary/Auxiliary'
import styles from './filters.module.css'
import RangeBar from './RangeBar/RangeBar'

class Filters extends React.Component {
    state = {
        licznik: this.props.licznik,
        distance: this.props.distance,
        checskMap: this.props.checks,
    };


    handleIncLicznik = () => {
        let nowe = this.state.licznik + 1;
        this.setState({licznik: nowe}, this.handleChangeLicznik);
    };

    handleChangeLicznik = () => {
        this.props.onLicznikChange(this.state.licznik)
    };


    handleDist = (e) => {
        let nowe = e.target.value;
        this.setState({distance: nowe}, this.handleChangeDist)

    };

    handleChangeDist = () => {
        this.props.onDistanceChange(this.state.distance)
    };


    handleCheckToggle = (e) => {
        const name = e.target.name;
        let mapcopy=this.state.checskMap;
        let val=!mapcopy.get(name);
        mapcopy.set(name,val);
        this.setState({checskMap:mapcopy},this.handleCheck);
    };

    handleCheck = () => {
        this.props.onCheckChange(this.state.checskMap)
    };


    render() {
        const stylek = {
            background: `linear-gradient(90deg,lightskyblue ${this.state.distance * 10}%, #95a5a6 ${this.state.distance}%)`
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

                    <h2>Odległość</h2>
                    <div className={styles.SlideContainer}>
                        <input id='myRange' step='0.1' className={styles.Slide} style={stylek} type='range' min='0'
                               max='10' value={this.state.distance} onChange={this.handleDist}/>
                        <p>{this.state.distance} km</p>
                    </div>
                    <div className={styles.zastosuj}>
                        <button onClick={this.handleIncLicznik}
                        >Zastosuj kategorie
                        </button>
                    </div>

                    <h2>Kategorie</h2>
                    <ul>
                        <li>
                            <label><input type='checkbox'
                                          checked={this.state.checskMap['Uslugi Remontowe']}
                                          name={'Uslugi Remontowe'}
                                          onChange={this.handleCheckToggle}/>Usługi remontowe
                            </label>
                        </li>
                        <li>
                            <label><input type='checkbox'
                                          checked={this.state.checskMap['Uslugi Hydrauliczne']}
                                          name={'Uslugi Hydrauliczne'}
                                          onChange={this.handleCheckToggle}/>Usługi
                                hydrauliczne</label>
                        </li>
                        <li>
                            <label><input type='checkbox'
                                          checked={this.state.checskMap['Uslugi Budowlane']}
                                          name={'Uslugi Budowlane'}
                                          onChange={this.handleCheckToggle}/>Usługi
                                budowlane</label>
                        </li>
                        <li>
                            <label><input type='checkbox'
                                          checked={this.state.checskMap['Uslugi Stolarskie']}
                                          name={'Uslugi Stolarskie'}
                                          onChange={this.handleCheckToggle}/>Usługi
                                stolarskie</label>
                        </li>
                        <li>
                            <label><input type='checkbox'
                                          checked={this.state.checskMap['Pomoc Kuchenna']}
                                          name={'Pomoc Kuchenna'}
                                          onChange={this.handleCheckToggle}
                            />Pomoc kuchenna</label>
                        </li>
                        <li>
                            <label><input type='checkbox'
                                          checked={this.state.checskMap['Malowanie']}
                                          name={'Malowanie'}
                                          onChange={this.handleCheckToggle}/>Malowanie</label>
                        </li>
                        <li>
                            <label><input type='checkbox'
                                          checked={this.state.checskMap['Sprzatanie']}
                                          name={'Sprzatanie'}
                                          onChange={this.handleCheckToggle}
                            />Sprzątanie
                            </label>
                        </li>
                    </ul>


                </div>

            </Auxiliray>
        );
    }
}


export default Filters;