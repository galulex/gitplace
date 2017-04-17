import React from 'react'
import { shallow } from 'enzyme'

import Container from '../index'

describe('<Container />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<Container />)
    expect(renderedComponent.type()).toEqual('div')
  })

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Container />)
    expect(renderedComponent.prop('className')).toBeDefined()
  })

  it('should adopt a valid attribute', () => {
    const id = 'test'
    const renderedComponent = shallow(<Container id={id} />)
    expect(renderedComponent.prop('id')).toEqual(id)
  })

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Container attribute={'test'} />)
    expect(renderedComponent.prop('attribute')).toBeUndefined()
  })
})
