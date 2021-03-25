import * as React from 'react'
import Paper from '@material-ui/core/Paper'
import { ViewState } from '@devexpress/dx-react-scheduler'
import { Scheduler, DayView, WeekView, Appointments, Toolbar, ViewSwitcher, DateNavigator } from '@devexpress/dx-react-scheduler-material-ui'

// import { appointments } from '../../../demo-data/month-appointments'
const schedulerData = [
  { startDate: '2021-03-25T09:45', endDate: '2021-03-25T11:00', title: 'Meeting' },
  { startDate: '2021-03-25T12:00', endDate: '2021-03-25T13:30', title: 'Go to a gym' },
  { startDate: '2021-03-25T18:00', endDate: '2021-03-25T19:00', title: 'TV Time' }
]

const today = new Date()
const date = ('0' + today.getDate()).slice(-2)
const month = ('0' + (today.getMonth() + 1)).slice(-2)
const year = today.getFullYear()
const currentDate = `${year}-${month}-${date}`
// const currentDate = new Date()
console.log('this is currentDate', currentDate)

class Calendar extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      data: schedulerData
    }
  }

  render () {
    const { data } = this.state

    return (
      <Paper>
        <Scheduler
          data={data}
          height={660}
        >
          <ViewState
            defaultCurrentDate={currentDate}
            defaultCurrentViewName="Day"
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
