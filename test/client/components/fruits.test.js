import test from 'ava'
import React from 'react'
import {mount, shallow} from 'enzyme'
import sinon from 'sinon'

import '../setup-dom'
import Fruits from '../../../client/components/Fruits.jsx'

test('<Fruits /> calls onLoad when mounted', t=> {
  const spy = sinon.spy()
  const wrapper = mount(<Fruits fruit={[]} onLoad={spy}/>)
  t.true(spy.called)
})

test('<Fruits /> displays a list of fruit', t=> {
  const fruit = [{name: 'apple'}, {name: 'banana'}]
  const wrapper = mount(<Fruits fruit={fruit} onLoad={() => {}}/>)
  t.is(wrapper.find('li').length, 2)
})
