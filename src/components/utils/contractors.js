export const contractors = [
    {
        id: '1',
        name: 'Drutex',
        categories: [
            1
        ],
        rate: {
            cost: 3,
            quality: 4,
            time: 3.5,
            overall: (this.cost + this.quality + this.time)/3
        },
        distance: 40,
        opinions: [
            {
                id: '11',
                userId: '22',
                text: 'Bardzo dobra robota. Polecam',
                rating: {
                    cost: 3,
                    quality: 4,
                    time: 3.5,
                }
            }
        ],
        events: [

        ]
    }
];

export const categories = {
    'Uslugi hydrauliczne': 1,
};