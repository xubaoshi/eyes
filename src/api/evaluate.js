// 患者评价
import base from './base'
import Page from '@/utils/page'
import { domainName, patientApi } from '@/config'

export default class evaluate extends base {
  list() {
    const url = `${domainName}${patientApi.evaluate.list}`
    return new Page(url, this._processGoodsComment.bind(this))
  }
}
