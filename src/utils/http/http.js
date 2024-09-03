import request from '@/utils/http/request.js'

export function get(url, params) {
  return new Promise((resolve, reject) => {
    request.get(url, { params })
    .then(response => {
      resolve(response)
    })
    .catch(error => {
      reject(error)
    })
  })
}
export function post(url, data, config) {
  return new Promise((resolve, reject) => {
    request.post(url, data, config)
    .then(response => {
      resolve(response)
    })
    .catch(error => {
      reject(error)
    })
  })
}
export function patch(url, data, config) {
  return new Promise((resolve, reject) => {
    request.patch(url, data, config)
    .then(response => {
      resolve(response)
    })
    .catch(error => {
      reject(error)
    })
  })
}