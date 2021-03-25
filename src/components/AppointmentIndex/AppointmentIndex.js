import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

import { indexAppointments } from './../../api/appointment'

class IndexAppointments extends Component {
  constructor (props) {
    super(props)

    this.state = {
      appointments: []
    }
  }

  handleSearchOne = (id, event) => {
    const { history } = this.props

    history.push(`/appointments/${id}`)
  }

  componentDidMount () {
    const { msgAlert, user } = this.props

    indexAppointments(user)
      .then(res => {
        this.setState({ appointments: res.data.appointments })
      })
      .then(() => msgAlert({
        message: 'Here are the appointments!',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          message: `UhOh..Someting went wrong, couldn't load the page because ${error.message}`
        })
      })
  }

  render () {
    let appointmentsJsx

    const { appointments } = this.state

    if (!appointments) {
      appointmentsJsx = 'Loading...'
    }

    appointmentsJsx = appointments.map(appointment => (
      <Card key={appointment._id}
        onClick={(event) => {
          this.handleSearchOne(appointment._id, event)
        }}
        border="primary"
        className='index-bg style-card' style={{ borderRadius: '5px', margin: '40px', padding: '8px', marginTop: '10px' }}>
        <Card.Body>
          <Card.Title>{appointment.title} - {appointment.type}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Date & Time: {appointment.date} at {appointment.startTime}-{appointment.endTime}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">Instructor: {appointment.instructor}</Card.Subtitle>
        </Card.Body>
      </Card>
    ))

    return (
      <div style={{ alignContent: 'center', display: 'flex', flexDirection: 'column' }}>
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2>All Appointments on the books!</h2>
        </div>
        <ul>
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', margin: '10px', whiteSpace: 'pre-wrap' }}>
            {appointmentsJsx.reverse()}
          </div>
        </ul>
      </div>
    )
  }
}

export default withRouter(IndexAppointments)
