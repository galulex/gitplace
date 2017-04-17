import React from 'react'
import Helmet from 'react-helmet'

import withProgressBar from 'components/ProgressBar'
import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import Container from 'components/Container'

export function App(props) {
  return (
    <section>
      <Helmet titleTemplate='GitPlace - %s' />
      <NavBar />
      <Container>{React.Children.toArray(props.children)}</Container>
      <Footer />
    </section>
  )
}

App.propTypes = {
  children: React.PropTypes.node
}

export default withProgressBar(App)
