// 用户评价
import base from './base'
import { patientApi } from '@/config'

export default class user extends base {
  static info(param) {
    const url = `${this.baseUrl}${patientApi.user.info}`
    return this.get(url, param)
  }
}
