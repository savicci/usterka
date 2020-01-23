import colors from "./eventColors";

export const mockedEvents = [
    {
        id: '1',
        title: 'Pomoc z naprawa uszczelki',
        start: new Date(),
        textColor: 'rgba(255,255,255)',
        state: 'active',
        text: 'Some text just for testing',
        rate: {
            cost: 3,
            quality: 3,
            time: 3,
        }
    },
    {
        id: '2',
        title: 'Finished event',
        start: '2020-01-20T16:30:00',
        end: '2020-01-21T20:30:00',
        textColor: 'rgba(255, 255, 255)',
        state: 'finished',
        text: 'Some text just for testing 2',
        rate: {
            cost: 3,
            quality: 4,
            time: 3,
        }
    },
    {
        id: '3',
        title: 'Reviewed event',
        start: '2020-01-22T16:00:00',
        textColor: 'rgba(255, 255, 255)',
        state: 'reviewed',
        text: 'Some text just for testing 3',
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