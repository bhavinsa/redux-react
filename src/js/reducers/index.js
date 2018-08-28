import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import user from "./userReducer"
import api from "./apiReducer"

export default combineReducers({
  tweets,
  user,
  api
})
