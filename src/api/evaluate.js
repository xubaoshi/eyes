// 患者评价
import base from './base'
import Page from '@/utils/page'
import { patientApi } from '@/config'

export default class evaluate extends base {
  static list() {
    const url = `${this.baseUrl}${patientApi.evaluate.list}`
    return new Page(url)
  }
}
