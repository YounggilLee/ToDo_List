import { ADD_TODO , SELECT_TODO } from './actionTypes'

export const addTodo = (event) => {
    return {
        type: ADD_TODO,
        payload: event
    }
}

export const selectTodo = (todo) => {
    console.log("A todo has been selected", todo.id)
    return {
        type:  SELECT_TODO,
        payload: todo
    }
}


