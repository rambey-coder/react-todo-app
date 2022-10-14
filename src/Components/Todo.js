import React from 'react'

const Todo = ({ text, todo, setTodo, todoElement }) => {
    const handleDelete = () => {
        setTodo(todo.filter(element => element.id !== todoElement.id))
    }
  return (
    <div className="todo">
        <li className="todo-item">{text}</li>
        <button className='complete-btn'>
            <i className="fas fa-check"></i>
        </button>
        <button className='delete-btn' onClick={handleDelete}>
            <i className="fas fa-trash"></i>
        </button>
    </div>
  )
}

export default Todo