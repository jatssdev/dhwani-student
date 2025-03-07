import { createSlice } from "@reduxjs/toolkit";

let TodoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        deleteTodo: (state, action) => {
            console.log(action);

            let newTodos = state.filter((x, i) => i != action.payload)
            state = newTodos

            return state
        }
    }
})


export default TodoSlice.reducer

export const { addTodo, deleteTodo } = TodoSlice.actions