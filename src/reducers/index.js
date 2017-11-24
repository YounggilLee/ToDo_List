import { ADD_TODO, SELECT_TODO } from '../actions/actionTypes';
import { combineReducers } from 'redux'

const initialStateTodo = {
    todoList: [],
    toggle: false
}

const todoReducer = (state = initialStateTodo, action ) => {
    switch(action.type){
        case ADD_TODO:
            const copyState = {...state}
            const ids = copyState.todoList.map(todo => todo.id)
            const maxId = ids.length > 0 ? Math.max(...ids) : 0
            copyState.todoList.push({ id: maxId + 1, todoName: action.payload})
            return copyState
        case SELECT_TODO:
            const copyState2 = {...state}
            copyState2.todoList = state.todoList.filter(todo => todo.id !== action.payload)
            return copyState2
       
        default:
            return state
    }
}

export default combineReducers({
    events: todoReducer
})
