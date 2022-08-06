import {createStore} from 'redux'

let nextTodoId = 0
const todos = (state=[],action)=>{
  switch (action.type){
    case 'ADD_TODO':{
      return [
      ...state,
      {
        id: ++nextTodoId,
        title:action.type,
        completed:false,
      }
    ];
    }
    case 'TOOGGLE_TODO': {
      return state.map(todo=>(
        todo.id===action.type
        ?{
          ...todo,
          completed:!todo.completed,
        } : todo
      ))
    }
    default:{
      return state;
    }
  }
}
const store = createStore(todos)

const addTodo = (title)=>
({
  type: 'ADD_TODO',
  title,
})
const toggleTodo = (todoId)=>({
  type:'TOGGLE_TODO',
  todoId,
})

console.log(store.getState())
store.dispatch(addTodo('LearnReact'))
console.log(store.getState())
import {createStore} from 'redux'

let nextTodoId = 0
const todos = (state=[],action)=>{
  switch (action.type){
    case 'ADD_TODO':{
      return [
      ...state,
      {
        id: ++nextTodoId,
        title:action.type,
        completed:false,
      }
    ];
    }
    case 'TOOGGLE_TODO': {
      return state.map(todo=>(
        todo.id===action.type
        ?{
          ...todo,
          completed:!todo.completed,
        } : todo
      ))
    }
    default:{
      return state;
    }
  }
}
const store = createStore(todos)

const addTodo = (title)=>
({
  type: 'ADD_TODO',
  title,
})
const toggleTodo = (todoId)=>({
  type:'TOGGLE_TODO',
  todoId,
})

console.log(store.getState())
store.dispatch(addTodo('LearnReact'))
console.log(store.getState())
import {createStore} from 'redux'

let nextTodoId = 0
const todos = (state=[],action)=>{
  switch (action.type){
    case 'ADD_TODO':{
      return [
      ...state,
      {
        id: ++nextTodoId,
        title:action.type,
        completed:false,
      }
    ];
    }
    case 'TOOGGLE_TODO': {
      return state.map(todo=>(
        todo.id===action.type
        ?{
          ...todo,
          completed:!todo.completed,
        } : todo
      ))
    }
    default:{
      return state;
    }
  }
}
const store = createStore(todos)

const addTodo = (title)=>
({
  type: 'ADD_TODO',
  title,
})
const toggleTodo = (todoId)=>({
  type:'TOGGLE_TODO',
  todoId,
})

console.log(store.getState())
store.dispatch(addTodo('LearnReact'))
console.log(store.getState())
