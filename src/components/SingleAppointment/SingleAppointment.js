import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'

import { showAppointment, deleteAppointment } from '../../api/appointment'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class OneAppointment extends Component {
  constructor (props) {
    super(props)

    this.state = {
      appointment: null,
      exists: true,
      deleted: false,
      clickUpdateAppointment: false
    }
  }

  handleChange = event => {
    event.persist()
    this.setState((state) => {
      return {
        content: { ...state.content, [event.target.name]: event.target.value }
      }
    })
  }

  onDeleteAppointment = () => {
    const { user, match, history, msgAlert } = this.props
    const appointmentId = match.params.id
    deleteAppointment(appointmentId, user)
      .then(this.setState({ exists: false }))
      .then(() => msgAlert({
        message: 'Deleted the Appointment!',
        variant: 'success'
      }))
      .then(() => history.push('/appointment-index'))
      .catch(error => {
        msgAlert({
          message: `That didn't work...because: ${error.message}`,
          variant: 'danger'
        })
      })
  }

  componentDidMount () {
    const { user, match, msgAlert } = this.props

    showAppointment(match.params.id, user)
      .then(res => {
        this.setState({ appointment: res.data.appointment })
        return res
      })
      .then(res => msgAlert({
        message: `Here is ${res.data.appointment.title}!`,
        variant: 'success'
      }))
      .catch(error => msgAlert({
        message: `Uh Oh..that didn't work because..${error.message}`,
        variant: 'danger'
      }))
  }

  render () {
    const { appointment, clickUpdateItem } = this.state
    const { user } = this.props

    if (!appointment) {
      return 'Loading...'
    }

    if (clickUpdateItem) {
      return (
        <Redirect to={`/update-workout/${appointment._id}`} />
      )
    }

    let appointmentDisplay

    if (user.role !== 'Business Owner') {
      appointmentDisplay = (
        <div style={{ alignContent: 'center', display: 'flex', justifyContent: 'center' }}>
          <Card key={appointment._id}
            className="index-bg"
            style={{ border: '1px solid', borderRadius: '12px', boxShadow: ' -.3px .5px 0px .5px grey', display: 'flex', marginLeft: '5px', marginRight: '5px', marginBottom: '20px', padding: '10px', width: '600px' }} >
            <Card.Body className="card-body" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', overflow: 'auto' }}>
              <div>
                <div style={{ width: '300px' }}>
                  <Card.Title style={{ fontSize: '40px' }}>{appointment.title} - {appointment.type}</Card.Title>
                  <Card.Subtitle className="mb-2">Instructor: {appointment.instructor}</Card.Subtitle>
                  <Card.Subtitle style={{ fontSize: '15px', margin: '13px 0px 13px 0px' }}>Date & Time: {appointment.date} at {appointment.startTime}-{appointment.endTime}</Card.Subtitle>
                  <Card.Text style={{ fontSize: '15px' }}><strong>Cost: ${appointment.cost}</strong></Card.Text>
                </div>
                <div style={{ border: '1px solid', borderRadius: '9px', margin: '15px', padding: '20px', width: '300px' }}>
                  <Card.Text style={{ whiteSpace: 'pre-wrap' }}>
                    {appointment.description}
                  </Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      )
    } else {
      appointmentDisplay = (
        <div style={{ alignContent: 'center', display: 'flex', justifyContent: 'center' }}>
          <Card key={appointment._id}
            className="index-bg"
            style={{ border: '1px solid', borderRadius: '12px', boxShadow: ' -.3px .5px 0px .5px grey', display: 'flex', marginLeft: '5px', marginRight: '5px', marginBottom: '20px', padding: '10px', width: '600px' }} >
            <Card.Body className="card-body" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', overflow: 'auto' }}>
              <div>
                <div style={{ width: '200px' }}>
                  <Card.Title style={{ fontSize: '40px' }}>{appointment.title}</Card.Title>
                  {/* <Button onClick={this.updateItemClicked} >Update</Button> */}
                  <Button onClick={this.onDeleteAppointment} variant="secondary">Delete</Button>
                  <Card.Subtitle style={{ fontSize: '15px', margin: '13px 0px 13px 0px' }}>Date & Time: {appointment.date} at {appointment.startTime}-{appointment.endTime}</Card.Subtitle>
                  <Card.Text style={{ fontSize: '15px' }}><strong>Cost: ${appointment.cost}</strong></Card.Text>
                </div>
                <div style={{ border: '1px solid', borderRadius: '9px', margin: '15px 15px 15px 0px', padding: '20px', width: '300px' }}>
                  <Card.Text style={{ whiteSpace: 'pre-wrap' }}>
                    {appointment.description}
                  </Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      )
    }

    return (
      <div>
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2>Check it out!</h2>
        </div>
        <div>
          {appointmentDisplay}
        </div>
      </div>
    )
  }
}

export default withRouter(OneAppointment)
