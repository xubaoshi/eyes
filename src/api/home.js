// 首页
import base from './base'
import { domianName, patientApi } from '@/config'

export default class home extends base {
  async bannerList(param) {
    const url = `${domianName}${patientApi.banner.list}`
    return this.get(url, param)
  }
}
