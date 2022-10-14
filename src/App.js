import React, { useState } from "react";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  const [inputText, setInputText] = useState('')
  const [todo, setTodo] = useState([])
  const [status, setStatus] = useState('all')

  return (
    <div className="App">
      <h1>Todo App</h1>
      <Form 
      setInputText={setInputText} 
      inputText={inputText} 
      todo={todo} 
      setTodo={setTodo}
      status={status}
      setStatus={setStatus}
      />
      <TodoList 
      setTodo={setTodo} 
      todo={todo}
      />
    </div>
  );
}

export default App;
