import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./inputTodo.css";

const InputTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });
  const handleInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent default browser form submit funct
    if (todo.task.trim()) {
      //check todos task is not empty(by remove white space from string)
      addTodo({ ...todo, id: uuid() }); //add todo and update todo id
      //reset the form
      setTodo({ ...todo, task: "" });
    }
  };
  return (
    <form className="inputTodos" onSubmit={handleSubmit}>
      <TextField
        label="Enter Task"
        name="task"
        type="text"
        value={todo.task}
        onChange={handleInputChange}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default InputTodo;
