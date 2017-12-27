import trainings from './reducer-current-trainings';
import * as types from '../constants/ActionTypes';


describe('current trainings', () => {
    it('should have initial state', () => {
        expect(trainings(undefined,{})).toEqual( [{
            excercises: [
                {
                    excercise: "1",
                    repetition: 6,
                    series: 5,
                    days: [1,3,5]
                },
                {
                    excercise: "7",
                    repetition: 6,
                    series: 5,
                
                }
                ],
            days: [1,3,5],
            id: 1
            }
        ]);
        
    })  
})