// 我的咨询
import base from './base'
import { patientApi } from '@/config'
import store from '@/store/utils'
import lang from '@/utils/lang'
import Page from '@/utils/page'
export default class consult extends base {
  static async list() {
    const url = `${this.baseUrl}${patientApi.consult.list}`
    const arr = await this.get(url)
    arr.forEach(item => {
      item['dateFormat'] = lang.dateFormat(item.date, 'yyyy-MM-dd')
    })
    store.save('consult', arr)
  }

  static history() {
    const url = `${this.baseUrl}${patientApi.consult.history}`
    return new Page(
      url,
      this.processEvalData.bind(this)
    )
  }
  static processEvalData(item) {
    item['dateFormat'] = lang.dateFormat(item.date, 'yyyy-MM-dd')
  }
}
