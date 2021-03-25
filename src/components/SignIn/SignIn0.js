import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './SignIn.scss'
import SVG from './pic.svg'

class SignIn extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { msgAlert, history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => msgAlert({
        heading: 'Sign In Success',
        message: messages.signInSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/calendar'))
      .catch(error => {
        this.setState({ email: '', password: '' })
        msgAlert({
          heading: 'Sign In Failed with error: ' + error.message,
          message: messages.signInFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { email, password } = this.state

    return (
      <div className="signin">
        <h3>Sign In</h3>
        <img style={{ height: '400px', width: '200px' }} src={SVG}></img>
        <form onSubmit={this.onSignIn}>
          <div className="textcenter">
            <TextField
              id="email"
              label='Email address'
              required
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </div>
          <div className="textcenter">
            <TextField
              required
              label='Password'
              id="password"
              name="password"
              value={password}
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <Button variant="contained" color="primary" type="submit">
          Sign In
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SignIn)
