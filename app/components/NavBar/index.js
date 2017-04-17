import React from 'react'
import { browserHistory } from 'react-router'
import { Col } from 'react-styled-flexboxgrid'
import FA from 'react-fontawesome'
import { FormattedMessage } from 'react-intl'
import base from '../../api/firebase'
import currentUser from '../../utils/CurrentUser'
import messages from './messages'

import ReRow from './ReRow'
import Wrapper from './Wrapper'
import Ul from './Ul'
import Li from './Li'
import A from './A'
import Logo from './Logo'

function NavBar() {
  const handleLogout = () => base.auth().signOut().then(() => browserHistory.push('/sign_in'))

  const navLinks = () => {
    return (
      <Ul>
        <Li>
          <A to='/user/edit'>
            <FA name='cogs' />
            <FormattedMessage {...messages.settingsMessage} />
          </A>
        </Li>
        <Li>
          <A onClick={handleLogout}>
            <FA name='sign-out' />
            <FormattedMessage {...messages.logoutMessage} />
          </A>
        </Li>
      </Ul>
    )
  }

  return (
    <Wrapper>
      <ReRow>
        <Col xs>
          <Logo to='/'>
            <span>
              <b>Git</b>
              Place
            </span>
          </Logo>
          { !!currentUser() && navLinks() }
        </Col>
      </ReRow>
    </Wrapper>
  )
}

export default NavBar
