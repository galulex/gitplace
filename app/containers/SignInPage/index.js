import React from 'react'
import Helmet from 'react-helmet'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import { browserHistory } from 'react-router'
import FA from 'react-fontawesome'
import messages from './messages'
import base from '../../api/firebase'

import Form from '../../components/Session/Form'
import Legend from '../../components/Session/Legend'
import P from '../../components/Session/P'
import A from '../../components/Session/A'
import Article from '../../components/Session/Article'

class SignInPage extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    base.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
      browserHistory.push('/')
    })
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { formatMessage } = this.props.intl

    return (
      <Article>
        <Helmet title={formatMessage(messages.helmetTitle)} />
        <div>
          <Legend>
            <FormattedMessage {...messages.login} />
            <FA name='users' />
          </Legend>
          <Form onSubmit={this.handleSubmit}>
            <P>
              <input
                type='email'
                placeholder={formatMessage(messages.formEmailInput)}
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
              />
              <FA name='envelope-o' />
            </P>
            <P>
              <input
                type='password'
                placeholder={formatMessage(messages.formPasswordInput)}
                name='password'
                value={this.state.password}
                onChange={this.handleChange}
              />
              <FA name='lock' />
            </P>
            <P>
              <input type='submit' value={formatMessage(messages.formSubmitInput)} />
            </P>
            <P>
              <FormattedMessage {...messages.formNotRegistered} />
              <A to='/sign_up'><FormattedMessage {...messages.formCreateAccount} /></A>
            </P>
          </Form>
        </div>
      </Article>
    )
  }
}

SignInPage.propTypes = {
  intl: intlShape.isRequired
}

export default injectIntl(SignInPage)
