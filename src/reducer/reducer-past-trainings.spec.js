import * as types from '../constants/ActionTypes'
import trainings from './reducer-past-trainings'

const initialState = [
  {
    excercises: [
      {
        excercise: '1',
        repetition: 6,
        series: 5,
        unit: 'x',
        feeling: 1,
      },
      {
        excercise: '2',
        repetition: 8,
        series: 4,
        unit: 'x',
        feeling: 2,
      },
      {
        excercise: '3',
        repetition: 5,
        series: 1,
        unit: 'x',
        feeling: 1,
      },
      {
        excercise: '4',
        repetition: 3,
        series: 10,
        unit: 'x',
        feeling: 1,
      },
    ],
    date: '1.1.2016',
  },
]

describe('past trainings', () => {
  it('should have default state', () => {
    expect(trainings(undefined, {})).toEqual(initialState)
  })

    it('should add new training', expect(trainings(undefined, {
      type: types.addPastTrainings,
      payload: {
        excercises: [
          {
            excercise: '1',
            repetition: 6,
            series: 5,
            feeling: 1,
          },
          {
            excercise: '2',
            repetition: 8,
            series: 4,
            feeling: 2,
          },
          {
            excercise: '3',
            repetition: 5,
            series: 1,
            feeling: 1,
          },
          {
            excercise: '4',
            repetition: 3,
            series: 10,
            feeling: 1,
          },
        ],
        date: '1.1.2016',
      },
    }),).toEqual([...initialState, {
      excercises: [
        {
          excercise: '1',
          repetition: 6,
          series: 5,
          feeling: 1,
        },
        {
          excercise: '2',
          repetition: 8,
          series: 4,
          feeling: 2,
        },
        {
          excercise: '3',
          repetition: 5,
          series: 1,
          feeling: 1,
        },
        {
          excercise: '4',
          repetition: 3,
          series: 10,
          feeling: 1,
        },
      ],
      date: '1.1.2016',
    }],))
})
