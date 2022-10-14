import React from 'react'
import Todo from './Todo'

const TodoList = ({ todo, setTodo, filter }) => {
  return (
    <div className="todo-container">
        <ul className="todo-list">
          {
            filter.map(todoInpt => (
              <Todo 
              key={todoInpt.id} 
              text={todoInpt.text} 
              todo={todo}
              todoElement={todoInpt}
              setTodo={setTodo}  />
            ))
          }
        </ul>
    </div>
  )
}

export default TodoList