export const baseUrl = 'https://www.easy-mock.com/mock/5b719f05ebd4a208cce29bb8'

// 患者接口
export const patientApi = {
  evaluate: {
    list: '/api/evaluate/list' // 患者列表接口
  },
  banner: {
    list: '/api/banner/list' // 首页 banner 列表
  },
  auth: {
    session: '/api/auth/session', // 登录操作获取 third_session 及 login_code
    checkSession: '/api/auth/check_session', // 校验 session 是否生效
    decodeUserinfo: '/api/auth/decode_userinfo' // wepy.getUserInfo() 返回值的解码
  },
  upload: {
    image: '/api/upload/image',
    vedio: '/api/upload/vedio'
  }
}
