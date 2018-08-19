// 患者评价
import base from './base'
import Page from '@/utils/page'
import { patientApi } from '@/config'
import lang from '@/utils/lang'

export default class evaluate extends base {
  static list() {
    const url = `${this.baseUrl}${patientApi.evaluate.list}`
    return new Page(url, this.processEvalData.bind(this))
  }
  static processEvalData(item) {
    item['dateFormat'] = lang.dateFormat(item.date, 'yyyy-MM-dd')
  }
}
