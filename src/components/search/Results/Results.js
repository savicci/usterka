import React from "react";
import Result from "./result/result";
import styles from './Results.module.css'
import Labels from "../Labels/Labels";
import Auxiliray from '../../../hoc/Auxiliary/Auxiliary'
import kekw from '../../../assets/img/kekw.png'

const workers = [];
const worker0 = {
    id: '0',
    nazwa: 'Cleanix',
    specjalizacja: ['Sprzatanie'],
    opis: 'Działamy na rynku od 30 lat!',
    ocena: 4,
    odleglosc: 3,
    events: [{
        id: '1',
        title: '',
        start: '2020-01-30T08:00:00',
        end: '2020-01-30T19:00:00',
        textColor: 'rgba(224, 224, 224)',
        backgroundColor: 'rgba(224, 224, 224)',
    },
        {
            id: '2',
            title: '',
            start: '2020-01-27T10:00:00',
            end: '2020-01-27T16:00:00',
            textColor: 'rgba(224, 224, 224)',
            backgroundColor: 'rgba(224, 224, 224)',
        },
        {
            id: '2',
            title: '',
            start: '2020-01-29T12:00:00',
            end: '2020-01-29T15:00:00',
            textColor: 'rgba(224, 224, 224)',
            backgroundColor: 'rgba(224, 224, 224)',
        },
    ]
};

const worker1 = {
    id: '1',
    nazwa: 'PolBud',
    specjalizacja: ['Uslugi Remontowe', <br/>, 'Uslugi Budowlane'],
    opis: 'Jesteśmy najlepsi w budowaniu domów i nie tylko (umiemy zaprojektować basen)!',
    ocena: 3,
    odleglosc: 7,
    events: [{}]
};
const worker2 = {
    id: '2',
    nazwa: 'Stolarz & Sons',
    specjalizacja: ['Uslugi Stolarskie'],
    opis: 'Rodzinna firma, gdzie jakość produktu i zadowlenia klienta to priorytet!',
    ocena: 5,
    odleglosc: 2,
    events: [{}]
};
const worker3 = {
    id: '3',
    nazwa: 'Prawdziwi Artyści',
    specjalizacja: ['Malowanie', <br/>, 'Sprzatanie'],
    opis: 'Studenci ASP, chętni do pomalowania domu. Po wykonanej pracy możemy nawet posprzątać za dodatkową opłatą',
    ocena: 2,
    odleglosc: 1.2,
    events: [{}]
};
const worker4 = {
    id: '4',
    nazwa: 'Kucharek',
    specjalizacja: ['Pomoc Kuchenna'],
    opis: 'Nowoczene smaki i tradycyjna kultura obsługi!',
    ocena: 4,
    odleglosc: 9,
    events: [{}]
};

workers.push(worker0, worker1, worker2, worker3, worker4);


class Results extends React.Component {
    state = {
        counter: 0
    };

    render() {
        let sort_Alf=this.props.sortAlfa;
        let word_r=this.props.word;
        let checksArr=this.props.checks;
        let licz = this.props.liczn;
        const list_jsx_res = [];
        const res_workers = [];
        for (let i = 0; i < workers.length; i++) {
            let checksValidation=false;
            let checkSearchWord=false;
            if(word_r==='' || workers[i].nazwa.includes(word_r)){
                checkSearchWord=true;
            }
            for (let j=0;j<workers[i].specjalizacja.length;j++){
                if (checksArr.get(workers[i].specjalizacja[j])){
                    checksValidation=true;
                }
            }
            if (workers[i].odleglosc < this.props.dist && checksValidation &&checkSearchWord) {

                if (!res_workers.includes(workers[i])) res_workers.push(workers[i]);
            }
        }
        if(sort_Alf==='A') {
            res_workers.sort((a, b) => (a.nazwa > b.nazwa) ? 1 : (a.nazwa === b.nazwa) ? ((a.nazwa > b.nazwa) ? 1 : -1) : -1)
        }
        if(sort_Alf==='O'){
            res_workers.sort((a, b) => (a.ocena > b.ocena) ? -1 : (a.ocena === b.ocena) ? ((a.ocena > b.ocena) ? -1 : 1) : 1)
        }

        if(sort_Alf==='D'){
            res_workers.sort((a, b) => (a.odleglosc > b.odleglosc) ? 1 : (a.odleglosc === b.odleglosc) ? ((a.odleglosc > b.odleglosc) ? 1 : -1) : -1)
        }


        for (let i = 0; i < res_workers.length; i++) {
            let res_jsx =
                <Result modalOpen={this.props.modalOpen}
                        nazwa={res_workers[i].nazwa}
                        specjalizacja={res_workers[i].specjalizacja}
                        opis={res_workers[i].opis}
                        ocena={res_workers[i].ocena}
                        odleglosc={res_workers[i].odleglosc}
                        setEvents={this.props.setEvents}
                        events={res_workers[i].events}
                        key={res_workers[i].id}
                        photo={kekw}
                />;
            list_jsx_res.push(res_jsx);
        }
        return (
            <Auxiliray>

                <div className={styles.Results}>
                    <Labels/>
                    {list_jsx_res}
                </div>
            </Auxiliray>
        );
    }
}

export default Results;