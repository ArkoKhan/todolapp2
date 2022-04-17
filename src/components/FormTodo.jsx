import React from "react";

function FormTodo(props) {
  const creatTodoHandler = () => {
    if (props.todoTitle !== "") {
      const newTodo = {
        id: Date.now(),
        title: props.todoTitle,
        isComplete: false,
      };

      props.setTodoList([...props.todoList, newTodo]);
      props.setTodoTitle("");
    } else {
      alert("Enter valid Title");
    }
  };
  const updateTodoHandler = () => {
    props.setTodoList(
      props.todoList.map((todo) => {
        if (todo.id === props.editableItem.id) {
          todo.title = props.todoTitle;
        }
        return todo;
      })
    );
    props.setEditItem(false);
    props.setTodoTitle("");
    props.setEditableItem(null);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.editItem ? updateTodoHandler() : creatTodoHandler();
      }}
    >
      <input
        type="text"
        value={props.todoTitle}
        onChange={(e) => props.setTodoTitle(e.target.value)}
      />
      <button>{props.editItem ? "Update ToDo" : "Add ToDo"}</button>
    </form>
  );
}

export default FormTodo;
