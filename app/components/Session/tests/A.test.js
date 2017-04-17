import React from 'react'
import { mount } from 'enzyme'

import A from '../A'

const url = '/sign_in'

describe('<A />', () => {
  it('should render an <a> tag', () => {
    const renderedComponent = mount(<A to={url} />)
    expect(renderedComponent.find('a').type()).toEqual('a')
  })

  it('should have a className attribute', () => {
    const renderedComponent = mount(<A to={url} />)
    expect(renderedComponent.find('a').prop('className')).toBeDefined()
  })

  it('should adopt a valid attribute', () => {
    const id = 'test'
    const renderedComponent = mount(<A id={id} to={url} />)
    expect(renderedComponent.find('a').node.id).toEqual(id)
  })
})
