import React from 'react'
import { mount } from 'enzyme'

import Logo from '../Logo'

const url = '/'

describe('<Logo />', () => {
  it('should render an <a> tag', () => {
    const renderedComponent = mount(<Logo to={url} />)
    expect(renderedComponent.find('a').type()).toEqual('a')
  })

  it('should have a className attribute', () => {
    const renderedComponent = mount(<Logo to={url} />)
    expect(renderedComponent.find('a').prop('className')).toBeDefined()
  })

  it('should adopt a valid attribute', () => {
    const id = 'test'
    const renderedComponent = mount(<Logo id={id} to={url} />)
    expect(renderedComponent.find('a').node.id).toEqual(id)
  })
})
