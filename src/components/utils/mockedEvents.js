import colors from "./eventColors";
import hydraulex from '../../assets/img/hydraulex.png';
import verado from '../../assets/img/verado.png';
import cleanix from '../../assets/img/cleanix.png';
import polbud from '../../assets/img/polbud.png';
import kucharek from '../../assets/img/kucharek.png';
import budimax from '../../assets/img/budimax.png';

export const mockedEvents = [
    {
        id: '1',
        title: 'Pomoc z naprawa kranu',
        start: new Date(),
        textColor: 'rgba(255,255,255)',
        state: 'active',
        text: 'Szanowny panie. W mojej kuchni zatkal sie kran i potrzebuje zeby pan go przetkal. Prosze dzwonic pod numer 123-456-789',
        rate: {
            cost: 3,
            quality: 3,
            time: 3,
            text: '',
        },
        company: {
            name: 'Hydriulex',
            photo: hydraulex
        }
    },
    {
        id: '2',
        title: 'Malowanie pokoju',
        start: '2020-01-20T08:30:00',
        end: '2020-01-20T20:30:00',
        textColor: 'rgba(255, 255, 255)',
        state: 'finished',
        text: 'Potrzebuje pomalowac synowi pokoj. Farby posiadam, nie mam jednak nardzedzi malarskich. Prosze o kontakt pod numerem 090 303 923',
        rate: {
            cost: 3,
            quality: 3,
            time: 3,
            text: '',
        },
        company: {
            name: 'Verado',
            photo: verado,
        }
    },
    {
        id: '3',
        title: 'Pomoc w sprzataniu domu',
        start: '2020-01-22T16:00:00',
        end: '2020-01-22T18:00:00',
        textColor: 'rgba(255, 255, 255)',
        state: 'reviewed',
        text: 'Dzien dobry. Chcialbym aby pani firma sprzatajaca pomogla w posprzataniu domu przed urodzinami mojego syna. Prosze o kontakt telefoniczny na numer 324-523-255. Pozdrawiam',
        rate: {
            cost: 5,
            quality: 4,
            time: 4,
            text: 'Bardzo fajnie, tanio i szybko panie sie uwinely. Napewno skorzystam ponownie',
        },
        company: {
            name: 'Cleanix',
            photo: cleanix,
        }
    },
    {
        id: '4',
        title: 'Pomoc kuchenna w czasie imprezy urodzinowej',
        start: '2020-01-24T14:00:00',
        end: '2020-01-24T20:00:00',
        textColor: 'rgba(255, 255, 255)',
        state: 'finished',
        text: 'Potrzebuje pomocy w kuchni i cateringu na imprezie urodzinowej mojego syna. O wiecej informacji prosze dzwonic pod numer 234-523-435',
        rate: {
            cost: 3,
            quality: 3,
            time: 3,
            text: '',
        },
        company: {
            name: 'Kucharek',
            photo: kucharek,
        }
    },
    {
        id: '5',
        title: 'Naprawa dachu po uderzeniu pioruna',
        start: '2020-01-29T12:00:00',
        end: '2020-01-29T20:00:00',
        textColor: 'rgba(255,255,255)',
        state: 'active',
        text: 'Dzien dobry. Pare dni temu w moj dom uderzyl piorun i chcialbym aby wasza firma zajela sie naprawa dachu, ktory zostal nieznacznie uszkodzony. Prosze o kontakt na nr 234-354-233',
        rate: {
            cost: 3,
            quality: 4,
            time: 3,
            text: '',
        },
        company: {
            name: 'PolBud',
            photo: polbud,
        }
    },
    {
        id: '6',
        title: 'Ukladanie kostki brukowej',
        start: '2020-01-22T09:00:00',
        end: '2020-01-22T20:30:00',
        textColor: 'rgba(255,255,255)',
        state: 'finished',
        text: 'Prosilbym panska firme o pomoc w ukladaniu kostki na mojej dzialce. Szczegoly do obgadania telefonicznie pod numerem 234-234-234 lub mailowo adres@email.com. Pozdrawiam',
        rate: {
            cost: 3,
            quality: 4,
            time: 3,
            text: '',
        },
        company: {
            name: 'Budimax',
            photo: budimax,
        }
    }
];

export const getEventsWithColorsMapped = (events) => {
    return events.map(event => {
        return {...event, backgroundColor: colors[event.state]};
    });
};

export const getStatusFromEvent = (event) => {
    switch (event.state) {
        case 'active':
            return 'W trakcie';
        case 'finished':
            return 'Zakonczone';
        case 'reviewed':
            return 'Ocenione';
        default:
            return 'Nie znaleziono';
    }
};