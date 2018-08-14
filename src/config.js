var prod = process.env.NODE_ENV === 'production'
export const domainName = prod ? '' : ' https://www.easy-mock.com/mock/5b719f05ebd4a208cce29bb8'

// 患者接口
export const patientApi = {
  evaluate: {
    list: '/api/evaluate/list' // 患者列表接口
  },
  banner: {
    list: '/api/banner/list' // 首页 banner 列表
  }
}
