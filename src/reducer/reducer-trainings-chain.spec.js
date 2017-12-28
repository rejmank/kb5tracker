import * as types from '../constants/ActionTypes';
import chain from '../reducer/reducer-trainings-chain';

describe('trainings chain', ()=> {
    it('should have initial state', ()=>{
        expect(chain(undefined, {})).toEqual(
           2
        );
    });
    it('should set of trainings', () => {
        expect(chain(undefined, {
            type: types.changeTrainingsInRow,
            payload: 5
        })).toEqual(5)
    });
});