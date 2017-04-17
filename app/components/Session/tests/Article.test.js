import React from 'react'
import { shallow } from 'enzyme'

import Article from '../Article'

describe('<Article />', () => {
  it('should render an <article> tag', () => {
    const renderedComponent = shallow(<Article />)
    expect(renderedComponent.type()).toEqual('article')
  })

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Article />)
    expect(renderedComponent.prop('className')).toBeDefined()
  })

  it('should adopt a valid attribute', () => {
    const id = 'test'
    const renderedComponent = shallow(<Article id={id} />)
    expect(renderedComponent.prop('id')).toEqual(id)
  })

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Article attribute={'test'} />)
    expect(renderedComponent.prop('attribute')).toBeUndefined()
  })
})
