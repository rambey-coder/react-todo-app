import React from 'react'
import Todo from './Todo'

const TodoList = ({ todo }) => {
  return (
    <div className="todo-container">
        <ul className="todo-list">
          {
            todo.map(todoInpt => (
              <Todo key={todoInpt.id} text={todoInpt.text} />
            ))
          }
        </ul>
    </div>
  )
}

export default TodoList