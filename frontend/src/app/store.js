import { configureStore } from '@reduxjs/toolkit'
import formReducer from '../features/FormData/formSlice'

export const store = configureStore({
  reducer: {
    userForm: formReducer,
  },
})