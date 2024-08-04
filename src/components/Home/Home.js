import React, { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import Todo from "../Todo/Todo";
import NewTodo from "../Todo/NewTodo";
import FilterBar from "../FilterBar/FilterBar";
import { GetWithoutAuth } from "../../services/HttpService";

const Home = () => {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("ALL");

  const refreshTodos = () => {
    GetWithoutAuth("http://localhost:8080/api/todos")
      .then((res) => res.json())
      .then((result) => {
        const sortedTodos = result.sort((a, b) => {
          if (a.todoStatus === "DONE" && b.todoStatus !== "DONE") return 1;
          if (a.todoStatus !== "DONE" && b.todoStatus === "DONE") return -1;
          return 0;
        });
        setTodoList(sortedTodos);
      });
  };

  useEffect(() => {
    refreshTodos();
  }, []);

  const handleDelete = (deletedTodoId) => {
    setTodoList(todoList.filter((todo) => todo.id !== deletedTodoId));
  };

  const handleUpdate = (updatedTodo) => {
    let updatedTodoList = todoList.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );

    updatedTodoList = updatedTodoList.filter(
      (todo) => todo.id !== updatedTodo.id
    );

    if (updatedTodo.todoStatus === "DONE") {
      updatedTodoList.push(updatedTodo);
    } else {
      updatedTodoList.unshift(updatedTodo);
    }

    const sortedTodos = updatedTodoList.sort((a, b) => {
      if (a.todoStatus === "DONE" && b.todoStatus !== "DONE") return 1;
      if (a.todoStatus !== "DONE" && b.todoStatus === "DONE") return -1;
      return 0;
    });

    setTodoList(sortedTodos);
  };

  const filteredTodoList = todoList.filter((todo) => {
    if (filter === "ALL") return true;
    return todo.todoStatus === filter;
  });

  return (
    <Container>
      <Box sx={{ mb: 2 }}>
        <NewTodo refreshTodos={refreshTodos} />
      </Box>
      <FilterBar filter={filter} setFilter={setFilter} />
      {filteredTodoList.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
    </Container>
  );
};

export default Home;
