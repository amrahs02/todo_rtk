import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
}

// in context we only write defintion of fun but in this we write both def and declaration of fun

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: { // we add property and fun in reducers
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }

})

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer

// state give the values of intial satte , how many or which values are in todo initially
// action -- id .......

// state - current state
// action - whichever data is passed

// redux is diff than react-redux
// redux is a core library and react-redux is a library that provides bindings for react or wiring up react and redux together

// start from by creating a store
// store is the place where we keep all the data of our application
// we say feature as slice in redux-toolkit 
// we can have multiple slices in our application
// for slice we need three things - name, initialState, reducers
// we have used array of objects in initialState
// we have used nanoid for generating unique id
