import {
  createStore
} from 'redux'


const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return [
        ...state,
        {
          id: Date.now(),
          title: action.type,
          completed: false,
        }
      ];
    }
    case 'REMOVE_TODO': {
      return state.filter((todo) => todo.id !== action.id)
    }
    case 'TOOGGLE_TODO': {
      return state.map(todo => (
        todo.id === action.type ? {
          ...todo,
          completed: !todo.completed,
        } : todo
      ))
    }
    default: {
      return state;
    }
  }
}

const store = createStore(todos, defaultValues)

const addTodo = (title) =>
  ({
    type: 'ADD_TODO',
    title,
  })
const removeTodo = (title) =>
  ({
    type: 'REMOVE_TODO',
    id,
  })
const toggleTodo = (todoId) => ({
  type: 'TOGGLE_TODO',
  id,
})


console.log(store.getState())
store.dispatch(addTodo('LearnReact'))
console.log(store.getState())