import "./App.css";
import { useState } from "react";
import FormTodo from "./components/FormTodo";
import ListTodo from "./components/ListTodo";

function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editItem, setEditItem] = useState(false);
  const [editableItem, setEditableItem] = useState(null);

  return (
    <div className="App">
      <FormTodo
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
        todoList={todoList}
        setTodoList={setTodoList}
        editItem={editItem}
        setEditItem={setEditItem}
        editableItem={editableItem}
        setEditableItem={setEditableItem}
      />

      <ListTodo
        todoList={todoList}
        setTodoList={setTodoList}
        setEditItem={setEditItem}
        setEditableItem={setEditableItem}
        setTodoTitle={setTodoTitle}
      />
    </div>
  );
}

export default App;
