import React from 'react'

const Todo = ({ text, todo, setTodo, todoElement }) => {
    const handleDelete = () => {
        setTodo(todo.filter(element => element.id !== todoElement.id))
    }

    const handleComplete = () => {
        setTodo(todo.map(item => {
            if(item.id === todoElement.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }
  return (
    <div className="todo">
        <li className={`"todo-item" ${todoElement.completed ? 'completed' : ''}`}>{text}</li>
        <button className='complete-btn' onClick={handleComplete}>
            <i className="fas fa-check"></i>
        </button>
        <button className='delete-btn' onClick={handleDelete}>
            <i className="fas fa-trash"></i>
        </button>
    </div>
  )
}

export default Todo