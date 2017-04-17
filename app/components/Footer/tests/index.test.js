import React from 'react'
import { shallow } from 'enzyme'
import { FormattedMessage } from 'react-intl'
import { Col, Row } from 'react-styled-flexboxgrid'

import Wrapper from '../Wrapper'
import messages from '../messages'
import Footer from '../index'

describe('<Footer />', () => {
  it('should render the copyright notice', () => {
    const renderedComponent = shallow(
      <Footer />
    )
    expect(renderedComponent.contains(
      <Wrapper>
        <Row>
          <Col xs>
            <FormattedMessage {...messages.licenseMessage} />
          </Col>
        </Row>
      </Wrapper>
    )).toBe(true)
  })
})
