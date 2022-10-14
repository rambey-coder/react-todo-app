import React, { useState } from "react";
import Form from "./Components/Form";
import Todo from "./Components/Todo";

function App() {
  const [inputText, setInputText] = useState('')
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Form />
      <Todo />
    </div>
  );
}

export default App;
