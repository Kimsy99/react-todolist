import { List } from "@material-ui/core";
import React from "react";
import Todo from "../Todo/Todo";
const OutputTodo = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <List className="OutputTodos">
      {todos.map((
        todo //map all todos
      ) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </List>
  );
};

export default OutputTodo;
