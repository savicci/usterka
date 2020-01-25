import colors from "./eventColors";

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
        }
    },
    {
        id: '2',
        title: 'Malowanie pokoju',
        start: '2020-01-20T16:30:00',
        end: '2020-01-21T20:30:00',
        textColor: 'rgba(255, 255, 255)',
        state: 'finished',
        text: 'Potrzebuje pomalowac synowi pokoj. Farby posiadam, nie mam jednak nardzedzi malarskich. Prosze o kontakt pod numerem 090 303 923',
        rate: {
            cost: 3,
            quality: 3,
            time: 3,
        }
    },
    {
        id: '3',
        title: 'Pomoc w sprzataniu domu',
        start: '2020-01-22T16:00:00',
        textColor: 'rgba(255, 255, 255)',
        state: 'reviewed',
        text: 'Dzien dobry. Chcialbym aby pani firma sprzatajaca pomogla w posprzataniu domu przed urodzinami mojej mamy. Prosze o kontakt telefoniczny na numer 324-523-255. Pozdrawiam',
        rate: {
            cost: 3,
            quality: 4,
            time: 3,
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