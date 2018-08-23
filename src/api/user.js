// 用户评价
import base from './base'
import { patientApi } from '@/config'
import store from '@/store/utils'
import lang from '@/utils/lang'

export default class user extends base {
  static async info(param) {
    const url = `${this.baseUrl}${patientApi.user.info}`
    const userInfo = await this.get(url, param)
    store.save('user', userInfo)
  }

  static async qrcode(param) {
    const url = `${this.baseUrl}${patientApi.user.share.qrcode}`
    const qrcode = await this.get(url, param)
    store.save('shareQrcode', qrcode)
    return qrcode
  }

  static async users(param) {
    const url = `${this.baseUrl}${patientApi.user.share.users}`
    const arr = await this.get(url, param)
    arr.forEach(item => {
      item['dateFormat'] = lang.dateFormat(item.date, 'yyyy-MM-dd')
    });
    return arr
  }
}
