import React, { useState } from "react";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  const [inputText, setInputText] = useState('')
  const [todo, setTodo] = useState([])

  return (
    <div className="App">
      <h1>Todo App</h1>
      <Form setInputText={setInputText} inputText={inputText} todo={todo} setTodo={setTodo}/>
      <TodoList setTodo={setTodo} todo={todo}/>
    </div>
  );
}

export default App;
