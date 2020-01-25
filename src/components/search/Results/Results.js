import React from "react";
import Result from "./result/result";
import styles from './Results.module.css'
import Labels from "../Labels/Labels";
import Auxiliray from '../../../hoc/Auxiliary/Auxiliary'
import happy from '../../../assets/img/pepehappy.png'
import cleanix from '../../../assets/img/cleanix.png'
import polbud from '../../../assets/img/polbud.png'
import ss from '../../../assets/img/stolarz.png'
import pa from '../../../assets/img/1000_F_104881269_SIBZVzIxn6gAFSmP5LURdycf9v2IxK6F.png'
import kucharek from '../../../assets/img/kucharek.png'
import hydraulex from '../../../assets/img/hydraulex.png'
import budimax from '../../../assets/img/budimax.png'
import kuchnia from '../../../assets/img/kuchnia.png'
import sprzatanie from '../../../assets/img/sprzatanie.png'
import grzegrzi from '../../../assets/img/grzegrzi.png'
import pipex from '../../../assets/img/pipex.png'
import verado from '../../../assets/img/verado.png'

const workers = [];
const worker0 = {
    photo: cleanix,
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
    photo: polbud,
    id: '1',
    nazwa: 'PolBud',
    specjalizacja: ['Uslugi Remontowe', <br/>, 'Uslugi Budowlane'],
    opis: 'Jesteśmy najlepsi w budowaniu domów i nie tylko (umiemy zaprojektować basen)!',
    ocena: 3,
    odleglosc: 7,
    events: [
        {
        id: '1',
        title: '',
        start: '2020-01-28T10:00:00',
        end: '2020-01-28T18:00:00',
        textColor: 'rgba(224, 224, 224)',
        backgroundColor: 'rgba(224, 224, 224)',
        },
        {
        id: '2',
        title: '',
        start: '2020-01-29T13:00:00',
        end: '2020-01-29T17:00:00',
        textColor: 'rgba(224, 224, 224)',
        backgroundColor: 'rgba(224, 224, 224)',
    }]
};
const worker2 = {
    photo: ss,
    id: '2',
    nazwa: 'Stolarz & Sons',
    specjalizacja: ['Uslugi Stolarskie'],
    opis: 'Rodzinna firma, gdzie jakość produktu i zadowlenia klienta to priorytet!',
    ocena: 5,
    odleglosc: 2,
    events: [
        {
            id: '1',
            title: '',
            start: '2020-02-01T14:00:00',
            end: '2020-02-01T16:00:00',
            textColor: 'rgba(224, 224, 224)',
            backgroundColor: 'rgba(224, 224, 224)',
        },
        {
            id: '2',
            title: '',
            start: '2020-01-29T13:00:00',
            end: '2020-01-29T17:00:00',
            textColor: 'rgba(224, 224, 224)',
            backgroundColor: 'rgba(224, 224, 224)',
        }
    ]
};
const worker3 = {
    photo: pa,
    id: '3',
    nazwa: 'Prawdziwi Artyści',
    specjalizacja: ['Malowanie', <br/>, 'Sprzatanie'],
    opis: 'Studenci ASP, chętni do pomalowania domu. Po wykonanej pracy możemy nawet posprzątać za dodatkową opłatą',
    ocena: 2,
    odleglosc: 1.2,
    events: [
    {
        id: '1',
        title: '',
        start: '2020-01-27T11:00:00',
        end: '2020-01-27T19:00:00',
        textColor: 'rgba(224, 224, 224)',
        backgroundColor: 'rgba(224, 224, 224)',
    },
    {
        id: '2',
        title: '',
        start: '2020-01-29T08:00:00',
        end: '2020-01-29T16:00:00',
        textColor: 'rgba(224, 224, 224)',
        backgroundColor: 'rgba(224, 224, 224)',
    },
    {
        id: '3',
        title: '',
        start: '2020-01-30T12:00:00',
        end: '2020-01-30T15:00:00',
        textColor: 'rgba(224, 224, 224)',
        backgroundColor: 'rgba(224, 224, 224)',
    }
]
};
const worker4 = {
    photo: kucharek,
    id: '4',
    nazwa: 'Kucharek',
    specjalizacja: ['Pomoc Kuchenna'],
    opis: 'Nowoczene smaki i tradycyjna kultura obsługi!',
    ocena: 4,
    odleglosc: 9,
    events: [
        {
        id: '1',
        title: '',
        start: '2020-02-01T08:00:00',
        end: '2020-02-01T14:00:00',
        textColor: 'rgba(224, 224, 224)',
        backgroundColor: 'rgba(224, 224, 224)',
    },
        {
            id: '2',
            title: '',
            start: '2020-01-29T10:00:00',
            end: '2020-01-29T12:00:00',
            textColor: 'rgba(224, 224, 224)',
            backgroundColor: 'rgba(224, 224, 224)',
        },
        {
            id: '3',
            title: '',
            start: '2020-01-29T14:00:00',
            end: '2020-01-29T18:00:00',
            textColor: 'rgba(224, 224, 224)',
            backgroundColor: 'rgba(224, 224, 224)',
        },
        {
            id: '4',
            title: '',
            start: '2020-01-27T11:00:00',
            end: '2020-01-27T13:00:00',
            textColor: 'rgba(224, 224, 224)',
            backgroundColor: 'rgba(224, 224, 224)',
        }
        ]

};
const worker5 = {
    photo: hydraulex,
    id: '5',
    nazwa: 'Hydriulex',
    specjalizacja: ['Uslugi Hydrauliczne'],
    opis: 'Zajmujemy się hydrauliką od 15 lat. Nasz zespół będzie w stanie pomóc Ci z każdą usterką!',
    ocena: 5,
    odleglosc: 5.4,
    events: [
        {
            id: '1',
            title: '',
            start: '2020-01-29T08:00:00',
            end: '2020-01-29T18:00:00',
            textColor: 'rgba(224, 224, 224)',
            backgroundColor: 'rgba(224, 224, 224)',
        },
        {
            id: '2',
            title: '',
            start: '2020-01-27T17:00:00',
            end: '2020-01-27T13:00:00',
            textColor: 'rgba(224, 224, 224)',
            backgroundColor: 'rgba(224, 224, 224)',
        }
    ]
};
const worker6 = {
    photo: budimax,
    id: '6',
    nazwa: 'Budimax',
    specjalizacja: ['Uslugi Budowlane'],
    opis: 'Budowa domów, elewacje, wylewki u nas to nie przelewki!',
    ocena: 4,
    odleglosc: 2.4,
    events: [
        {
            id: '1',
            title: '',
            start: '2020-01-29T10:00:00',
            end: '2020-01-29T12:00:00',
            textColor: 'rgba(224, 224, 224)',
            backgroundColor: 'rgba(224, 224, 224)',
        },
        {
            id: '2',
            title: '',
            start: '2020-01-28T09:00:00',
            end: '2020-01-28T19:00:00',
            textColor: 'rgba(224, 224, 224)',
            backgroundColor: 'rgba(224, 224, 224)',
        }
    ]
};
const worker7 = {
    photo: kuchnia,
    id: '7',
    nazwa: 'Kuchnia Zosi',
    specjalizacja: ['Pomoc Kuchenna'],
    opis: 'Specjalizuje się w kuchni polskiej. Receptury których używam były stosowane i udoskonalane od pokoleń w mojej rodzinie.',
    ocena: 3,
    odleglosc: 6.4,
    events: [
        {
            id: '1',
            title: '',
            start: '2020-02-04T08:00:00',
            end: '2020-02-04T18:00:00',
            textColor: 'rgba(224, 224, 224)',
            backgroundColor: 'rgba(224, 224, 224)',
        },
        {
            id: '2',
            title: '',
            start: '2020-02-05T11:00:00',
            end: '2020-02-05T19:00:00',
            textColor: 'rgba(224, 224, 224)',
            backgroundColor: 'rgba(224, 224, 224)',
        }
    ]
};
const worker8 = {
    photo: sprzatanie,
    id: '8',
    nazwa: 'Sprzątanie z Klasą',
    specjalizacja: ['Sprzatanie'],
    opis: 'Gdy tylko skończymy, twoje mieszkanie będzie błyszczeć!',
    ocena: 4,
    odleglosc: 0.3,
    events: [
        {
            id: '1',
            title: '',
            start: '2020-01-29T08:00:00',
            end: '2020-01-29T18:00:00',
            textColor: 'rgba(224, 224, 224)',
            backgroundColor: 'rgba(224, 224, 224)',
        },
        {
            id: '2',
            title: '',
            start: '2020-01-27T17:00:00',
            end: '2020-01-27T13:00:00',
            textColor: 'rgba(224, 224, 224)',
            backgroundColor: 'rgba(224, 224, 224)',
        },
        {
            id: '3',
            title: '',
            start: '2020-01-30T08:00:00',
            end: '2020-01-30T14:00:00',
            textColor: 'rgba(224, 224, 224)',
            backgroundColor: 'rgba(224, 224, 224)',
        },
        {
            id: '4',
            title: '',
            start: '2020-02-04T09:00:00',
            end: '2020-02-02T15:00:00',
            textColor: 'rgba(224, 224, 224)',
            backgroundColor: 'rgba(224, 224, 224)',
        }
    ]
};
const worker9 = {
    photo: grzegrzi,
    id: '9',
    nazwa: 'Grzegrzix',
    specjalizacja: ['Uslugi Stolarskie'],
    opis: 'Chcesz mieć biurko na wymiar? A chciałbyś mieć w swoim domu nieszablonowe schody? Wykonamy dla Ciebie z drewna co tylko chcesz!',
    ocena: 5,
    odleglosc: 3.4,
    events: [{
        id: '1',
        title: '',
        start: '2020-01-29T10:00:00',
        end: '2020-01-29T11:00:00',
        textColor: 'rgba(224, 224, 224)',
        backgroundColor: 'rgba(224, 224, 224)',
    },
        {
            id: '2',
            title: '',
            start: '2020-01-29T13:00:00',
            end: '2020-01-29T14:00:00',
            textColor: 'rgba(224, 224, 224)',
            backgroundColor: 'rgba(224, 224, 224)',
        },
        {
            id: '3',
            title: '',
            start: '2020-01-29T16:00:00',
            end: '2020-01-29T18:00:00',
            textColor: 'rgba(224, 224, 224)',
            backgroundColor: 'rgba(224, 224, 224)',
        },
        {
            id: '4',
            title: '',
            start: '2020-01-30T12:00:00',
            end: '2020-01-30T17:00:00',
            textColor: 'rgba(224, 224, 224)',
            backgroundColor: 'rgba(224, 224, 224)',
        }]
};
const worker10 = {
    photo: pipex,
    id: '10',
    nazwa: 'PipeX',
    specjalizacja: ['Uslugi Hydrauliczne'],
    opis: 'Poradzilibyśmy sobię z rurami nawet na Marsie.',
    ocena: 4,
    odleglosc: 7,
    events: [
        {
            id: '1',
            title: '',
            start: '2020-01-29T08:00:00',
            end: '2020-01-29T15:00:00',
            textColor: 'rgba(224, 224, 224)',
            backgroundColor: 'rgba(224, 224, 224)',
        },
        {
            id: '2',
            title: '',
            start: '2020-01-27T11:00:00',
            end: '2020-01-27T14:00:00',
            textColor: 'rgba(224, 224, 224)',
            backgroundColor: 'rgba(224, 224, 224)',
        }
    ]
};
const worker11 = {
    photo: verado,
    id: '11',
    nazwa: 'Verado',
    specjalizacja: ['Malowanie'],
    opis: 'Malowanie wnętrz, z nami Twój świat będzie kolorowy.',
    ocena: 2,
    odleglosc: 4,
    events: [
        {
            id: '1',
            title: '',
            start: '2020-01-29T08:00:00',
            end: '2020-02-04T18:00:00',
            textColor: 'rgba(224, 224, 224)',
            backgroundColor: 'rgba(224, 224, 224)',
        },
    ]
};

workers.push(worker0, worker1, worker2, worker3, worker4, worker5, worker6, worker7,worker8,worker9, worker10, worker11);


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
                        photo={res_workers[i].photo}
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