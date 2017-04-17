import React from 'react'
import Helmet from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import messages from './messages'

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>
        <Helmet title='Home Page' />
        <h1><FormattedMessage {...messages.header} /></h1>
      </article>
    )
  }
}
