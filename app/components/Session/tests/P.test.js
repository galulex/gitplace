import React from 'react'
import { shallow } from 'enzyme'

import P from '../P'

describe('<P />', () => {
  it('should render an <p> tag', () => {
    const renderedComponent = shallow(<P />)
    expect(renderedComponent.type()).toEqual('p')
  })

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<P />)
    expect(renderedComponent.prop('className')).toBeDefined()
  })

  it('should adopt a valid attribute', () => {
    const id = 'test'
    const renderedComponent = shallow(<P id={id} />)
    expect(renderedComponent.prop('id')).toEqual(id)
  })

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<P attribute={'test'} />)
    expect(renderedComponent.prop('attribute')).toBeUndefined()
  })
})
