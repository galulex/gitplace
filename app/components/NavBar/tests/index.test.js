import React from 'react'
import { shallow } from 'enzyme'
import { Col } from 'react-styled-flexboxgrid'

import NavBar from '../index'
import Logo from '../Logo'
import ReRow from '../ReRow'
import Wrapper from '../Wrapper'

jest.mock('../../../utils/CurrentUser')

describe('<NavBar />', () => {
  it('should render the nav', () => {
    const renderedComponent = shallow(
      <NavBar />
    )
    expect(renderedComponent.contains(
      <Wrapper>
        <ReRow>
          <Col xs>
            <Logo to='/'>
              <span>
                <b>Git</b>
                Place
              </span>
            </Logo>
          </Col>
        </ReRow>
      </Wrapper>
    )).toBe(true)
  })
})
