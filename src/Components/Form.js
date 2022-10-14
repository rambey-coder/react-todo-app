import React from 'react'

const Form = ({ setInputText, inputText, todo, setTodo }) => {
    const handleInput = e => {
        setInputText(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault()

        setTodo([
            ...todo, {text: inputText, completed: false, id: Math.floor(Math.random() * 10)}
        ])

        setInputText('') 
    }
  return (
    <form action="">
        <input type="text"
         value={inputText} 
         className='todo-input' 
         onChange={handleInput}
         />
        <button className="todo-button" type='submit' onClick={handleSubmit}>
            <i className="fas fa-plus-square"></i>
        </button>

        <div className="select">
            <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Unompleted</option>
            </select>
        </div>
    </form>
  )
}

export default Form