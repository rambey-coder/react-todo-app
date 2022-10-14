import React from 'react'
import Todo from './Todo'

const TodoList = ({ todo, setTodo }) => {
  return (
    <div className="todo-container">
        <ul className="todo-list">
          {
            todo.map(todoInpt => (
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