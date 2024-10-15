import request from '@/utils/http/request.js'

export function get(url, params) {
  return request.get(url, { params });
  // return new Promise((resolve, reject) => {
  //   request.get(url, { params })
  //   .then(response => {
  //     resolve(response)
  //   })
  //   .catch(error => {
  //     reject(error)
  //   })
  // })
}

export function post(url, data, config) {
  return request.post(url, data, config);
}

export function patch(url, data, config) {
  return request.patch(url, data, config);
}

export const DELETE = (url, params) => request.delete(url, { params });

// export async function DELETE(url, params) {
//   try {
//     const response = await request.delete(url, { params });
//     return response; // 成功时返回响应
//   } catch (error) {
//     return Promise.reject(error); // 出错时拒绝并返回错误
//   }
// }
