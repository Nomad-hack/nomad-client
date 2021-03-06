import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const AppointmentForm = ({ appointment, handleSubmit, handleChange }) => {
  const [showAppointmentModal, setShowAppointmentModal] = useState(true)
  const [backHome, setBackHome] = useState(false)

  const handleCloseAppointmentModal = (event) => {
    setShowAppointmentModal(false)
    setBackHome(true)
  }

  if (backHome) {
    return (
      <Redirect to={'/calendar'} />
    )
  }

  return (
    <Modal
      show={showAppointmentModal}
      onHide={handleCloseAppointmentModal}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header className='modal-bg' closeButton>
        <Modal.Title>Book an Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body className='modal-bg-2'>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicTitle">
            <Form.Label>Title of Appointment</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Enter Title"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              placeholder="Enter appointment date (yyyy-mm-dd)"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicstartTime">
            <Form.Label>What time does it start?</Form.Label>
            <Form.Control
              type="time"
              name="startTime"
              placeholder="What time does it start? (military time: 11:00)"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicendTime">
            <Form.Label>What time does it end?</Form.Label>
            <Form.Control
              type="time"
              name="endTime"
              placeholder="What time does it end? (military time: 13:00)"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicInstructor">
            <Form.Label>Who is the Instructor?</Form.Label>
            <Form.Control
              type="text"
              name="instructor"
              placeholder="Enter Instructor's name here"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicCost">
            <Form.Label>Cost of class</Form.Label>
            <Form.Control
              type="text"
              name="cost"
              placeholder="$20"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelectType">
            <Form.Label>What Type Of Class:</Form.Label>
            <Form.Control
              as="select"
              name="type"
              onChange={handleChange}>
              <option>Pick One...</option>
              <option>In Person</option>
              <option>Remote</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              placeholder="Write A Short Description Here"
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="secondary" onClick={handleCloseAppointmentModal}>
              Close
          </Button>
          <Button
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default AppointmentForm
