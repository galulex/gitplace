import React from 'react'
import Helmet from 'react-helmet'
import FA from 'react-fontawesome'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

import base from '../../api/firebase'
import messages from './messages'
import Form from '../../components/Session/Form'
import Legend from '../../components/Session/Legend'
import P from '../../components/Session/P'
import A from '../../components/Session/A'
import Article from '../../components/Session/Article'

class SignUpPage extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    base.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
      alert(`Error message: ${error.message}`)
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
            <FormattedMessage {...messages.signup} />
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
              <input
                type='password'
                placeholder={formatMessage(messages.formPasswordConfirmationInput)}
                name='passwordConfirmation'
                value={this.state.passwordConfirmation}
                onChange={this.handleChange}
              />
              <FA name='sign-in' />
            </P>
            <P>
              <input type='submit' value={formatMessage(messages.formSubmitInput)} />
            </P>
            <P>
              <FormattedMessage {...messages.formAlreadyRegistered} />
              <A to='/sign_in'><FormattedMessage {...messages.formSignInLink} /></A>
            </P>
          </Form>
        </div>
      </Article>
    )
  }
}

SignUpPage.propTypes = {
  intl: intlShape.isRequired
}

export default injectIntl(SignUpPage)
