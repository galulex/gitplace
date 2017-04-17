import 'sanitize.css/sanitize.css'
import 'font-awesome/css/font-awesome.min.css'

/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./favicon.ico'
import '!file-loader?name=[name].[ext]!./manifest.json'
import 'file-loader?name=[name].[ext]!./.htaccess'
/* eslint-enable import/no-unresolved, import/extensions */

import React from 'react'
import ReactDOM from 'react-dom'
import { applyRouterMiddleware, Router, browserHistory } from 'react-router'
import { useScroll } from 'react-router-scroll'
import { IntlProvider } from 'react-intl'
import { DEFAULT_LOCALE } from './containers/App/constants'
import { translationMessages } from './i18n'

import './styles/global'

import routes from './routes'

const render = (messages) => {
  ReactDOM.render(
    <IntlProvider messages={messages} locale={DEFAULT_LOCALE} key={DEFAULT_LOCALE}>
      <Router
        history={browserHistory}
        routes={routes}
        render={applyRouterMiddleware(useScroll())}
      />
    </IntlProvider>,
    document.getElementById('app')
  )
}

if (module.hot) {
  module.hot.accept('./i18n', () => {
    render(translationMessages)
  })
}

if (!window.Intl) {
  (new Promise((resolve) => {
    resolve(import('intl'))
  }))
    .then(() => Promise.all([
      import('intl/locale-data/jsonp/en.js')
    ]))
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err
    })
} else {
  render(translationMessages)
}

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install() // eslint-disable-line global-require
}
