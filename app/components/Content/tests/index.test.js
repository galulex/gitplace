import React from 'react'
import { shallow } from 'enzyme'

import Content from '../index'

describe('<Content />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<Content />)
    expect(renderedComponent.type()).toEqual('div')
  })

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Content />)
    expect(renderedComponent.prop('className')).toBeDefined()
  })

  it('should adopt a valid attribute', () => {
    const id = 'test'
    const renderedComponent = shallow(<Content id={id} />)
    expect(renderedComponent.prop('id')).toEqual(id)
  })

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Content attribute={'test'} />)
    expect(renderedComponent.prop('attribute')).toBeUndefined()
  })
})
