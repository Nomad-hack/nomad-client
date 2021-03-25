import apiUrl from '../apiConfig'
import axios from 'axios'

export const createAppointment = (appointment, user) => {
  return axios({
    url: apiUrl + '/appointments',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { appointment: appointment }
  })
}

export const indexAppointments = (user) => {
  return axios({
    url: apiUrl + '/appointments',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const showAppointment = (id, user, appointment) => {
  return axios({
    url: apiUrl + '/appointments/' + id,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const updateAppointment = (appointment, user) => {
  return axios({
    url: apiUrl + '/appointments',
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { appointment }
  })
}

export const deleteAppointment = user => {
  return axios({
    url: apiUrl + '/appointments',
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
