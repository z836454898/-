import request from '@/utils/request'

export function login(data) {
  return new Promise((resolve, reject) => {
    const {username, password} = data
    if (username === 'admin'&& password === '123456') {
      resolve({
        data: {
          token: 'asuidhausidhuiashduiashdiu',
          role: 'admin',
        }
      })
    } else if (username==='xuesheng0001'&&password==='123456'){
      resolve({
        data: {
          token: 'asuidhausidhuiashduiashdiu',
          role: 'client',
        }
      })
    } else {
      reject('账号或密码错误，请重新输入')
    }
  })
  // return request({
  //   url: '/vue-admin-template/user/login',
  //   method: 'post',
  //   data
  // })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: {token}
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
