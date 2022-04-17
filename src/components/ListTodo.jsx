import React from "react";

function ListTodo(props) {
  const deleteTodoHandler = (id) => {
    const newTodoList = props.todoList.filter((e) => e.id !== id);
    props.setTodoList(newTodoList);
  };

  const editTodoHandler = (id) => {
    const todoEdit = props.todoList.find((e) => e.id === id);
    props.setEditItem(true);
    props.setEditableItem(todoEdit);
    props.setTodoTitle(todoEdit.title);
  };

  return (
    <div className="list-div">
      <ul className="todo-list">
        {props.todoList.map((todo) => (
          <li>
            <span>{todo.title}</span>
            <button
              className="btn-edit"
              onClick={() => editTodoHandler(todo.id)}
            >
              Edit
            </button>
            <button
              className="btn-delete"
              onClick={() => deleteTodoHandler(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListTodo;
