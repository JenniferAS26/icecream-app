import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import userReducer from './users/userSlice'


//import productReducer from '../redux/productReducer'

const store = configureStore({
  reducer: {
    user: userReducer
  },
  middleware: [thunk]
})

export default store