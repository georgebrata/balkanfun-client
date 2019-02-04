// import {STORAGE_KEY} from '@constants/index'
// import { $utils } from '@helper'

export default {
  $vuexSetUserInfo (state, info) {
    state.userId = info._id
    state.userInfo = info
  },

  $vuexSetMenuList (state, menuList) {
    state.menuList = menuList
  }
}
