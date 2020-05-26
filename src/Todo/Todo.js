import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import "./todo.css";

const Todo = ({ todo, toggleComplete, removeTodo }) => {
  const todoLs = {
    color: "black",
    textDecoration: todo.completed ? "line-through" : null,
  };
  const handleCheckboxClick = () => {
    toggleComplete(todo.id);
  };
  const removeTodoItem = () => {
    removeTodo(todo.id);
  };
  return (
    <ListItem className="todos">
      <Checkbox
        checked={todo.completed}
        type="checkbox"
        onClick={handleCheckboxClick}
      />
      <Typography variant="body1" style={todoLs}>
        {todo.task}
      </Typography>
      <CloseIcon onClick={removeTodoItem}>X</CloseIcon>
    </ListItem>
  );
};
export default Todo;
