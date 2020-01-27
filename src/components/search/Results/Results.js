import React from "react";
import Result from "./result/result";
import styles from './Results.module.css'
import Labels from "../Labels/Labels";
import Auxiliray from '../../../hoc/Auxiliary/Auxiliary'
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
import kekw from '../../../assets/img/kekw.png'
import Madziak from '../../../assets/img/pepehappy.png'
import img1 from '../../../assets/img/img1.jpg'
import img2 from '../../../assets/img/img2.jpg'
import img3 from '../../../assets/img/img3.jpg'
import img4 from '../../../assets/img/img4.jpg'
import img5 from '../../../assets/img/img5.jpg'
import img6 from '../../../assets/img/img6.jpg'
import img7 from '../../../assets/img/img7.jpg'
import img8 from '../../../assets/img/img8.jpg'
import img9 from '../../../assets/img/img9.jpg'
import img10 from '../../../assets/img/img10.jpg'
import img11 from '../../../assets/img/img11.jpg'
import img12 from '../../../assets/img/img12.png'
import img13 from '../../../assets/img/img13.jpg'
import img14 from '../../../assets/img/img14.jpg'
import img15 from '../../../assets/img/img15.jpg'
import img16 from '../../../assets/img/img16.jpg'
import img17 from '../../../assets/img/img17.jpg'
import img18 from '../../../assets/img/img18.jpg'
import img19 from '../../../assets/img/img19.png'
import img20 from '../../../assets/img/img20.jpg'
import img21 from '../../../assets/img/img21.png'

const workers = [];
const worker0 = {
    photo: cleanix,
    id: '0',
    nazwa: 'Cleanix',
    specjalizacja: ['Sprzatanie'],
    opis: 'Działamy na rynku od 30 lat!',
    ocena: 4,
    oceny:[5,4,5],
    odleglosc: 3,
    daneDoKomentarza:[
        [
            kekw,
            "Verado",
            "Jak na ta cene, to powinno byc wysprzatane perfekcyjnie, a dywany pozostawialy wiele do zyczenia",
            3
        ],
        [
            Madziak,
            "Madziak",
            "Swietna obsluga, polecam",
            5
        ]
    ],
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
    oceny:[3,4,1],
    odleglosc: 7,
    daneDoKomentarza:[
        [
            img1,
            "Rojo",
            "Salon wyszedl nieźle, ale w drugim pokoju niestety uszkodzili odrobinę parkiet",
            4
        ],
        [
            img2,
            "Kolos",
            "Nie polecam",
            2
        ]
    ],
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
    oceny:[5,5,5],
    odleglosc: 2,
    daneDoKomentarza:[
        [
            img3,
            "Jupiter",
            "Biurko idealnie dopasowane do rogu pokoju, super",
            5
        ],
        [
            img4,
            "Kaszanka",
            "Wszystko ok",
            5
        ],
        [
            img5,
            "Jogson",
            "Bardzo fajne",
            5
        ]
    ],
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
    oceny:[1,4,3],
    odleglosc: 1.2,
    daneDoKomentarza:[
        [
            img21,
            "Tro45",
            "Ceny z kosmosu, wykonanie zajęło 2 godziny dłużej niż planowano",
            2
        ]
    ],
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
    oceny:[1,4,1],
    odleglosc: 9,
    daneDoKomentarza:[
        [
            img6,
            "Kasia",
            "Smaczne, na komunie zamawialam, wszystkim smakowalo",
            5
        ],
        [
            img7,
            "Janusz",
            "Niedoprawione, ciezko sie dogadac z pracownikami",
            3
        ]
    ],
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

    oceny:[1,4,2],
    ocena: 2,
    odleglosc: 5.4,
    daneDoKomentarza:[
        [
            img8,
            "Adwokat",
            "Kaloryfery dobrze zamontowane, nic nie cieknie",
            5
        ]
    ],
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
    oceny:[3,4,1],
    odleglosc: 2.4,
    daneDoKomentarza:[
        [
            img9,
            "Lupo",
            "Robili mi kostke przed domem, troche za drogo, ale nie mogę się doczepić do jakości wykonania",
            4
        ],
        [
            img10,
            "Agris",
            "Panowie mili, ale czas wykonania dwa razy dłuzszy niż zapowiadali",
            4
        ]
    ],
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
    oceny:[3,2,5],
    odleglosc: 6.4,
    daneDoKomentarza:[
        [
            img11,
            "Yumio",
            "Mięso wątpliwej jakości w potrawach",
            3
        ]
    ],
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
    oceny:[3,4,5],
    ocena: 2,
    odleglosc: 0.3,
    daneDoKomentarza:[
        [
            img12,
            "Oskeot",
            "Troche taniej i by było idealnie",
            4
        ]
    ],
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
    oceny:[3,4,5],
    odleglosc: 3.4,
    daneDoKomentarza:[
        [
            img13,
            "Hulio",
            "Wspaniala robota",
            5
        ],
        [
            img14,
            "Papryk",
            "Juz zawsze bede korzystał z usług tej firmy",
            5
        ],
        [
            img15,
            "Oldek",
            "Super",
            5
        ]
    ],
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
    oceny:[3,4,5],
    odleglosc: 7,
    daneDoKomentarza:[
        [
            img16,
            "Abstarr",
            "W porządku",
            5
        ],
        [
            img17,
            "Agnostar",
            "Po 3 miesiącach zaczęły pojawiać się problemy z rurami.",
            3
        ],
        [
            img18,
            "YTabo",
            "OK",
            4
        ]
    ],
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
    ocena: 4,
    oceny:[3,4,5],
    odleglosc: 4,
    daneDoKomentarza:[
        [
            img19,
            "Keni",
            "Drogo, ale przynajmniej porządnie zrobione",
            4
        ],
        [
            img20,
            "Gitara",
            "Calkiem dobrze wykonana robota, jedynie mam zastrzeżenia w okolicach drzwi",
            4
        ]
    ],
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

workers.push(worker0, worker1, worker2, worker3, worker4, worker5, worker6, worker7, worker8, worker9, worker10, worker11);


class Results extends React.Component {
    state = {
        counter: 0
    };

    render() {
        console.log(worker0.photo);
        let sort_Alf = this.props.sortAlfa;
        let word_r = this.props.word;
        let checksArr = this.props.checks;
        let licz = this.props.liczn;
        const list_jsx_res = [];
        const res_workers = [];
        for (let i = 0; i < workers.length; i++) {
            let checksValidation = false;
            let checkSearchWord = false;
            if (word_r === '' || workers[i].nazwa.includes(word_r)) {
                checkSearchWord = true;
            }
            for (let j = 0; j < workers[i].specjalizacja.length; j++) {
                if (checksArr.get(workers[i].specjalizacja[j])) {
                    checksValidation = true;
                }
            }
            if (workers[i].odleglosc < this.props.dist && checksValidation && checkSearchWord) {

                if (!res_workers.includes(workers[i])) res_workers.push(workers[i]);
            }
        }
        for(let a=0;a<res_workers.length;a++){
            res_workers[a].ocena=Math.floor((res_workers[a].oceny[0]+res_workers[a].oceny[1]+res_workers[a].oceny[2])/3);
        }
        if (sort_Alf === 'A') {
            res_workers.sort((a, b) => (a.nazwa > b.nazwa) ? 1 : (a.nazwa === b.nazwa) ? ((a.nazwa > b.nazwa) ? 1 : -1) : -1)
        }
        if (sort_Alf === 'O') {
            res_workers.sort((a, b) => (a.ocena > b.ocena) ? -1 : (a.ocena === b.ocena) ? ((a.ocena > b.ocena) ? -1 : 1) : 1)
        }

        if (sort_Alf === 'D') {
            res_workers.sort((a, b) => (a.odleglosc > b.odleglosc) ? 1 : (a.odleglosc === b.odleglosc) ? ((a.odleglosc > b.odleglosc) ? 1 : -1) : -1)
        }


        for (let i = 0; i < res_workers.length; i++) {

            let res_jsx =
                <Result modalOpen={this.props.modalOpen}
                        style={{backgroundColor: 'black'}}
                        nazwa={res_workers[i].nazwa}
                        specjalizacja={res_workers[i].specjalizacja}
                        opis={res_workers[i].opis}
                        ocena={res_workers[i].ocena}
                        oceny={res_workers[i].oceny}
                        odleglosc={res_workers[i].odleglosc}
                        setEvents={this.props.setEvents}
                        events={res_workers[i].events}
                        key={res_workers[i].id}
                        photo={res_workers[i].photo}
                        calendarOpen={this.props.calendarOpen}
                        openCompany={this.props.openCompanyModal}
                        setCompanyData={this.props.setCompanyData}
                        daneCom={res_workers[i].daneDoKomentarza}

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