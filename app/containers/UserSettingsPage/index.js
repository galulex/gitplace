import React from 'react'
import Helmet from 'react-helmet'
import { Col, Row } from 'react-styled-flexboxgrid'
import base from 'api/firebase'

import Button from 'components/Button'
import Content from 'components/Content'
import Section from 'components/Section'
import Form from 'components/Form'
import Label from 'components/Label'
import Input from 'components/Input'

import currentUser from 'utils/CurrentUser'

export default class UserSettingsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
    this.state = {
      email: currentUser().email,
      displayName: currentUser().displayName || '',
      password: '',
      newPassword: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const user = base.getAuth()
    const credentials = base.auth.EmailAuthProvider.credential(user.email, this.state.password)

    user.updateProfile({
      displayName: this.state.displayName
    })

    if (this.state.email !== user.email) {
      user.reauthenticate(credentials).then(() => {
        user.updateEmail(this.state.email)
      })
    }

    if (this.state.newPassword) {
      user.reauthenticate(credentials).then(() => {
        user.updatePassword(this.state.newPassword)
      })
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div>
        <Helmet title='Edit profile' />
        <Section>
          <h1>Settings</h1>
        </Section>
        <Content>
          <Form onSubmit={this.handleSubmit} autoComplete='off'>
            <Row middle='lg'>
              <Col lg={2}>
                <Row end='lg'>
                  <Col>
                    <Label>Name</Label>
                  </Col>
                </Row>
              </Col>
              <Col lg={10}>
                <Input
                  type='text'
                  name='displayName'
                  value={this.state.displayName}
                  onChange={this.handleChange}
                />
              </Col>
            </Row>
            <Row middle='lg'>
              <Col lg={2}>
                <Row end='lg'>
                  <Col>
                    <Label>Email</Label>
                  </Col>
                </Row>
              </Col>
              <Col lg={10}>
                <Input
                  type='text'
                  name='email'
                  autoComplete='off'
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Col>
            </Row>
            <Row middle='lg'>
              <Col lg={2}>
                <Row end='lg'>
                  <Col>
                    <Label>Current Password</Label>
                  </Col>
                </Row>
              </Col>
              <Col lg={10}>
                <Input
                  type='password'
                  name='password'
                  autoComplete='new-password'
                  placeholder='******'
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </Col>
            </Row>
            <Row middle='lg'>
              <Col lg={2}>
                <Row end='lg'>
                  <Col>
                    <Label>New Password</Label>
                  </Col>
                </Row>
              </Col>
              <Col lg={10}>
                <Input
                  type='password'
                  name='newPassword'
                  autoComplete='new-password'
                  placeholder='******'
                  value={this.state.newPassword}
                  onChange={this.handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col lg={2} />
              <Col lg={10}>
                <Button type='submit'>Update</Button>
              </Col>
            </Row>
          </Form>
        </Content>
      </div>
    )
  }
}
