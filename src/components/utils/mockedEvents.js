import colors from "./eventColors";

export const mockedEvents = [
    {
        id: 1,
        title: 'Active event',
        start: new Date(),
        textColor: 'rgba(255,255,255)',
        state: 'active'
    },
    {
        id: 2,
        title: 'Finished event',
        start: '2020-01-15T16:30:00',
        end: '2020-01-15T20:30:00',
        textColor: 'rgba(255, 255, 255)',
        state: 'finished'
    },
    {
        id: 3,
        title: 'Reviewed event',
        start: '2020-01-15T16:00:00',
        textColor: 'rgba(255, 255, 255)',
        state: 'reviewed'
    }
];

export const getEventsWithColorsMapped = (events) => {
    return events.map(event => {
        return {...event, backgroundColor: colors[event.state]};
    });
};