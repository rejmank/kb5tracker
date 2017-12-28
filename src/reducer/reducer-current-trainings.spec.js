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
        
    });
    
    it('should handle add new training', ()=>{
        expect(trainings(undefined, {
            type: types.addCurrentTraining,
            payload: {
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
        })).toEqual([
            {
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
                },
                {
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
     
    });
    it('should handle delete current training',()=>{
        expect(  trainings(undefined, {
              type: types.deleteCurrentTraining,
              payload: 1
          })).toEqual(
          []  
      )});

    it('should handle editing training', ()=> {
        expect(trainings(undefined, {
            type: types.editCurrentTraining,
            payload: {
                excercises: [
                    {
                        excercise: "4",
                        repetition: 3,
                        series: 2,
                    
                    }
                    ],
                days: [1,3],
                id: 1
                }
        })).toEqual( [ {
            excercises: [
                {
                    excercise: "4",
                    repetition: 3,
                    series: 2,
                
                }
                ],
            days: [1,3],
            id: 1
            }])
    });

    it('should handle delete with empty store', () =>{ 
        expect( trainings([], {
        type: types.deleteCurrentTraining,
        payload: 1
    })).toEqual(
        []
    )});
    
    it('should handle delete of nonexisting element', () =>{ 
        expect( trainings(undefined, {
        type: types.deleteCurrentTraining,
        payload: 100
    })).toEqual(
        [{
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
        ]
    )});
  
})