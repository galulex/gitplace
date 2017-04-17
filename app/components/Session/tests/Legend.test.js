import React from 'react'
import { shallow } from 'enzyme'

import Legend from '../Legend'

describe('<Legend />', () => {
  it('should render an <legend> tag', () => {
    const renderedComponent = shallow(<Legend />)
    expect(renderedComponent.type()).toEqual('legend')
  })

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Legend />)
    expect(renderedComponent.prop('className')).toBeDefined()
  })

  it('should adopt a valid attribute', () => {
    const id = 'test'
    const renderedComponent = shallow(<Legend id={id} />)
    expect(renderedComponent.prop('id')).toEqual(id)
  })

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Legend attribute={'test'} />)
    expect(renderedComponent.prop('attribute')).toBeUndefined()
  })
})
