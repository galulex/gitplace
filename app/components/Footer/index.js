import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Col, Row } from 'react-styled-flexboxgrid'

import Wrapper from './Wrapper'
import messages from './messages'

function Footer() {
  return (
    <Wrapper>
      <Row>
        <Col xs>
          <FormattedMessage {...messages.licenseMessage} />
        </Col>
      </Row>
    </Wrapper>
  )
}

export default Footer
