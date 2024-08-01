import React, { useEffect, useState } from "react";
import { Container, Box } from "@mui/material";
import NewTodo from "./NewTodo";
import Todo from "./Todo";
import { GetWithoutAuth } from "../../services/HttpService";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    GetWithoutAuth("http://localhost:8080/api/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          mt: "8px",
        }}
      >
        <NewTodo sx={{ width: "100%" }} />
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} sx={{ width: "100%" }} />
        ))}
      </Box>
    </Container>
  );
};

export default TodoList;
