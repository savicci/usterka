import React from "react";
import Result from "./result/result";
import styles from './Results.module.css'
import Labels from "../Labels/Labels";
import Auxiliray from '../../../hoc/Auxiliary/Auxiliary'

const workers = [];
const worker0 = {
    nazwa: 'Cleanix',
    specjalizacja: 'Sprzatanie',
    opis: 'Działamy na rynku od 30 lat!',
    ocena: 4,
    odleglosc: 3
};

const worker1 = {
    nazwa: 'PolBud',
    specjalizacja: ['Usługi remontowe', <br/>, 'Uslugi budowlane'],
    opis: 'Jesteśmy najlepsi w budowaniu domów i nie tylko (umiemy zaprojektować basen)!',
    ocena: 3,
    odleglosc: 7
};
const worker2 = {
    nazwa: 'Stolarz & Sons',
    specjalizacja: 'Uslugi Stolarskie',
    opis: 'Rodzinna firma, gdzie jakość produktu i zadowlenia klienta to priorytet!',
    ocena: 5,
    odleglosc: 2
};
const worker3 = {
    nazwa: 'Prawdziwi Artyści',
    specjalizacja: ['Malowanie', <br/>, 'Sprzątanie'],
    opis: 'Studenci ASP, chętni do pomalowania domu. Po wykonanej pracy możemy nawet posprzątać za dodatkową opłatą',
    ocena: 2,
    odleglosc: 1.2
};
const worker4 = {
    nazwa: 'Kucharek',
    specjalizacja: 'Pomoc kuchenna',
    opis: 'Nowoczene smaki i tradycyjna kultura obsługi!',
    ocena: 4,
    odleglosc: 9
};

workers.push(worker0, worker1, worker2, worker3, worker4);


class Results extends React.Component {
    state = {
        counter: 0,
        dana: this.props.dana_result
    };



    filtruj = () => {

        console.log('Filtruje!');
        const res_workers = [];
        for (let i = 0; i < workers.length; i++) {
            if (workers[i].odleglosc < this.props.dist) {
                if (!res_workers.includes(workers[i])) res_workers.push(workers[i]);
            }
        }


        for (let i = 0; i < res_workers.length; i++) {
            let res_jsx =
                <Result modalOpen={this.props.modalOpen}
                        nazwa={res_workers[i].nazwa}
                        specjalizacja={res_workers[i].specjalizacja}
                        opis={res_workers[i].opis}
                        ocena={res_workers[i].ocena}
                        odleglosc={res_workers[i].odleglosc}
                />;
            //list_jsx_res.push(res_jsx);
        }
        this.state.counter += 1;
        this.forceUpdate();
        //console.log(list_jsx_res)
    };

    // static getDerivedStateFromProps(props,state){
    //     if (props.dana_result !== state.dana_result) {
    //         return {
    //             dana_result: props.dana_result
    //         };
    //     }
    //     return null;
    // }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.dana_result!==this.props.dana_result){
            this.setState({dana:nextProps.dana_result})
        }
    }

    render() {
        console.log(this.state.dana);
        const list_jsx_res = [];
        const res_workers = [];
        for (let i = 0; i < workers.length; i++) {
            if (workers[i].odleglosc < this.props.dist) {
                if (!res_workers.includes(workers[i])) res_workers.push(workers[i]);
            }
        }


        for (let i = 0; i < res_workers.length; i++) {
            let res_jsx =
                <Result modalOpen={this.props.modalOpen}
                        nazwa={res_workers[i].nazwa}
                        specjalizacja={res_workers[i].specjalizacja}
                        opis={res_workers[i].opis}
                        ocena={res_workers[i].ocena}
                        odleglosc={res_workers[i].odleglosc}
                />;
            list_jsx_res.push(res_jsx);
        }
        // this.state.counter+=1;
        // this.forceUpdate();
        //console.log(list_jsx_res);
        // console.log('Drukuje boxy result!');
        // console.log(this.props.boxy);
        return (
            <Auxiliray>

                <div className={styles.Results}>
                    <Labels/>
                    {list_jsx_res}
                </div>
                {/*<button className={styles.but} onClick={this.filtruj.bind(this)}>Zastosóój</button>*/}
            </Auxiliray>
        );
    }
}

export default Results;