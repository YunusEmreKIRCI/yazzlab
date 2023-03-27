import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import textsReducer from '../features/texts/texts'
export const store = configureStore({
  reducer: {
      counter : counterReducer,
      texts : textsReducer,
  },
})