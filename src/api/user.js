// 用户评价
import base from './base'
import { patientApi } from '@/config'
import store from '@/store/utils'

export default class user extends base {
  static async info(param) {
    const url = `${this.baseUrl}${patientApi.user.info}`
    const userInfo = await this.get(url, param)
    store.save('user', userInfo)
  }
}
