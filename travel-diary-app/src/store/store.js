import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// 导入reducers
import authReducer from './reducers/authReducer'
import tripsReducer from './reducers/tripsReducer'
import reviewsReducer from './reducers/reviewsReducer'

// 合并所有reducers
const rootReducer = combineReducers({
  auth: authReducer,
  trips: tripsReducer,
  reviews: reviewsReducer
})

// 创建store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store