import * as React from 'react'
import Paper from '@material-ui/core/Paper'
import { ViewState } from '@devexpress/dx-react-scheduler'
import { Scheduler, DayView, WeekView, Appointments, Toolbar, ViewSwitcher, DateNavigator } from '@devexpress/dx-react-scheduler-material-ui'

import { indexAppointments } from './../../api/appointment'

// const schedulerData = []

// const schedulerData = [
//   { startDate: '2021-03-25T09:45', endDate: '2021-03-25T11:00', title: 'Meeting' },
//   { startDate: '2021-03-25T12:00', endDate: '2021-03-25T13:30', title: 'Go to a gym' },
//   { startDate: '2021-03-25T18:00', endDate: '2021-03-25T19:00', title: 'TV Time' }
// ]

const today = new Date()
const date = ('0' + today.getDate()).slice(-2)
const month = ('0' + (today.getMonth() + 1)).slice(-2)
const year = today.getFullYear()
const currentDate = `${year}-${month}-${date}`
// const currentDate = new Date()

class Calendar extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      appointments: [],
      schedulerData: []
      // data: schedulerData
    }
  }

  componentDidMount () {
    const { user } = this.props
    // const { appointments } = this.state

    // { startDate: '2021-03-25T09:45', endDate: '2021-03-25T11:00', title: 'Meeting' }

    indexAppointments(user)
      .then(res => {
        this.setState({ appointments: res.data.appointments })
      })
  }

  render () {
    const { appointments, schedulerData } = this.state
    console.log('this is appointments', appointments)

    appointments.map(appointment => {
      schedulerData.push({ startDate: `${appointment.date}T${appointment.startTime}`, endDate: `${appointment.date}T${appointment.endTime}`, title: `${appointment.title}` })
    })

    console.log('this is schedulerData', schedulerData)

    return (
      <Paper>
        <Scheduler
          data={schedulerData}
          height={660}
        >
          <ViewState
            defaultCurrentDate={currentDate}
            defaultCurrentViewName="Week"
          />

          <DayView
            startDayHour={7}
            endDayHour={23}
          />
          <WeekView
            startDayHour={7}
            endDayHour={23}
          />

          <Toolbar />
          <ViewSwitcher />
          <DateNavigator />
          <Appointments />
        </Scheduler>
      </Paper>
    )
  }
}

export default Calendar
