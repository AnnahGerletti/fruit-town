import test from 'ava'

import fruit from '../../../client/reducers/fruits'

test('initial state', t => {
  const expected = [] //arrange
  const actual = fruit(undefined, {}) //act
  t.deepEqual(actual, expected) //assert
})

test('receive fruits', t => {
  //arrange
  const initialState = ['bananas']
  const action = {type: 'RECEIVE_FRUITS', fruits: ['kiwi', 'plum']}
  const expected = ['kiwi', 'plum']

  //act
  const actual = fruit(initialState, action)

  //assert
  t.deepEqual(actual, expected)
})

test('add fruit', t => {
  //arrange
  const initialState = [{name: 'banana', color: 'yellow'}]
  const action = {type: 'ADD_FRUIT', name: 'apple', color: 'green'}
  const expected = [
    {name: 'banana', color: 'yellow'},
    {name: 'apple', color: 'green'}
  ]

  //act
  const actual = fruit(initialState, action)

  //assert
  t.deepEqual(actual, expected)
})
