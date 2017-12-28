const initialState =  [
        {
        excercises: [
            {
                excercise: "1",
                repetition: 6,
                series: 5,
                feeling: 1
            },
            {
                excercise: "2",
                repetition: 8,
                series: 4,
                feeling: 2
            },
            {
                excercise: "3",
                repetition: 5,
                series: 1,
                feeling: 1
            },
            {
                excercise: "4",
                repetition: 3,
                series: 10,
                feeling: 1
            },
            ],
            date: "1.1.2016"
        }
    ]


export default (state = initialState , action) => {
    switch(action.type) {
        case 'ADD_PAST_TRAINING':
            return state = [...state, action.payload];
        default: 
            return state;
    }
}