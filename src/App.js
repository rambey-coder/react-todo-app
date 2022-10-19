import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  const [inputText, setInputText] = useState('')
  const [todo, setTodo] = useState([])
  const [status, setStatus] = useState('all')
  const [filter, setFilter] = useState([])


  useEffect(() => {
    handleFilter()
  }, [todo, status])

  const handleFilter = () => {
    switch (status) {
      case 'completed':
        setFilter(todo.filter(todo => todo.completed == true))
        break;

        case 'uncompleted':
          setFilter(todo.filter(todo => todo.completed == false))
        break;

        default: 
        setFilter(todo)
        break;
    }
  }

 
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Form 
      setInputText={setInputText} 
      inputText={inputText} 
      todo={todo} 
      setTodo={setTodo}
      setStatus={setStatus}
      />
      <TodoList 
      setTodo={setTodo} 
      todo={todo}
      filter={filter}
      />
    </div>
  );
}

export default App;
