import { handleActions } from 'redux-actions'
import { SAVE } from '../types/cache'

export default handleActions(
  {
    [SAVE](state, action) {
      const { key, value } = action.payload
      return {
        ...state,
        [key]: value
      }
    }
  },
  {
    home: null, // 首页
    evaluate: null, // 患者评价
    consulterList: null, // 咨询者列表,
    doctor: null
  }
)
