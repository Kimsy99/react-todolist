import React, { useEffect, useState } from "react"; //useEffect is a useful hook to provide functionality that response to certain data or function in our code
import "./App.css";
import InputTodo from "./inputTodo/inputTodo";
import OutputTodo from "./outputTodo/outputTodo";
import Typography from "@material-ui/core/Typography";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    //get todos in local storage and store inside a var call storageTodos
    const storageTodos = JSON.parse(
      localStorage.getItem("react-todo-list-todos") //parse the string into JSON
    );
    if (storageTodos) {
      //call setTodos only if it is not null
      setTodos(storageTodos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("react-todo-list-todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]); //adding new todo in the beginning and other spread over
  };

  //operation for toggle complete (by taking id of todo)
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        //check the id of the todo match the one passed in
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); //remove if there are no compatible id
  };

  return (
    <div className="App">
      <Typography variant="h1" style={{ padding: 16 }}>
        Kim's Todolist
      </Typography>
      <InputTodo addTodo={addTodo} />
      <OutputTodo
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
