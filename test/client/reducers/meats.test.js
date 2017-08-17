import test from 'ava'

import meats from '../../../client/reducers/meats'

test('initial state of meat', t => {
  //aranage
  const expected = []
  //act
  const actual = meats(undefined,{})
  //assert
  t.deepEqual(actual, expected)
})

test('recieve meat', t => {
  //arrange
  const initialState = ['pork loin']
  const action = {type: 'RECEIVE_MEATS', meats: ['pork', 'beef']}
  const expected = ['pork', 'beef']

  //act
    const actual = meats(initialState, action)

  //assert
  t.deepEqual(actual, expected)
})

//TDD building a add meat test before code is writen.

test('add meat', t => {
  //arange
  const initialState = [{name: 'pork loin'}]
  const action = {type: 'ADD_MEAT', name:"hamburger"}
  const expected = [{name: 'pork loin'}, {name: 'hamburger'}]

  //act
  const actual = meats(initialState, action)

  //assert
  t.deepEqual(actual, expected)
})
