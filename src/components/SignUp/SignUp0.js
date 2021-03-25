import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'
import './SignUp.scss'
import SVG from './pic.svg'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class SignUp extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      username: '',
      age: '',
      gender: '',
      role: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { msgAlert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => msgAlert({
        heading: 'Sign Up Success',
        message: messages.signUpSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/calendar'))
      .catch(error => {
        this.setState({ email: '', password: '', passwordConfirmation: '' })
        msgAlert({
          heading: 'Sign Up Failed with error: ' + error.message,
          message: messages.signUpFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { email, username, age, gender, role, password, passwordConfirmation } = this.state

    return (
      <div className="signup">
        <h3>Sign Up</h3>
        <img style={{ height: '200px', width: '100px' }} src={SVG}></img>
        <form onSubmit={this.onSignUp}>
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
              id="username"
              label="Username"
              type="text"
              name="username"
              value={username}
              placeholder="Enter a username"
              onChange={this.handleChange}
            />
          </div>
          <div className="textcenter">
            <TextField
              required
              label="Age"
              id="age"
              type="text"
              name="age"
              value={age}
              placeholder="Enter age"
              onChange={this.handleChange}
            />
          </div>
          <div className="textcenter">
            <TextField
              id="gender"
              label="Gender"
              type="text"
              name="gender"
              value={gender}
              placeholder="Enter gender (optional)"
              onChange={this.handleChange}
            />
          </div>
          <div className="textcenter">
            <TextField
              required
              label="Role"
              id="role"
              type="text"
              name="role"
              value={role}
              placeholder="Student or Business Owner"
              onChange={this.handleChange}
            />
          </div>
          <div className="textcenter">
            <TextField
              required
              label="Password"
              id="password"
              name="password"
              value={password}
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>
          <div className="textcenter">
            <TextField
              required
              label="Confirm Password"
              id="passwordCornfirmation"
              name="passwordConfirmation"
              value={passwordConfirmation}
              type="password"
              placeholder="Confirm Password"
              onChange={this.handleChange}
            />
          </div>
          <div className="textcenter">
            <Button variant="contained" color="primary" className="button" type="submit">
          Sign Up
            </Button>
          </div>

        </form>

      </div>

    )
  }
}

export default withRouter(SignUp)
