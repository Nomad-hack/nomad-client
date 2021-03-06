import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import AppointmentForm from '../AppointmentForm/AppointmentForm.js'

import { createAppointment } from '../../api/appointment'

class CreateAppointment extends Component {
  constructor (props) {
    super(props)

    // const { user } = this.props
    this.state = {
      appointment: {
        title: '',
        description: '',
        type: '',
        instructor: '',
        date: '',
        startTime: '',
        endTime: '',
        cost: ''
      },
      createdId: null
    }
  }

  handleChange = event => {
    event.persist()

    this.setState((state) => {
      return {
        appointment: { ...state.appointment, [event.target.name]: event.target.value }
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { user, msgAlert } = this.props
    const { appointment } = this.state

    createAppointment(appointment, user)
      .then(res => {
        this.setState({ createdId: res.data.appointment._id })
        return res
      })
      .then(res => msgAlert({
        message: `Successfully Created ${res.data.appointment.title}!`,
        variant: 'success'
      }))
      .catch(error => msgAlert({
        message: `Uh Oh, That didn't work, because error: ${error.message}`,
        variant: 'danger'
      }))
  }

  render () {
    const { appointment, createdId } = this.state

    if (createdId) {
      return <Redirect to={`/appointments/${createdId}`} />
    }

    return (
      <div>
        <AppointmentForm
          appointment={appointment}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default CreateAppointment
