import { configureStore } from '@reduxjs/toolkit'
import TodoSlice from './TodoSlice'
let store = configureStore({
    reducer: {
        todo: TodoSlice
    }
})

export default store