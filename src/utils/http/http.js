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
export function post(url, data, header) {
  return new Promise((resolve, reject) => {
    request.post(url, data, header)
    .then(response => {
      resolve(response)
    })
    .catch(error => {
      reject(error)
    })
  })
}