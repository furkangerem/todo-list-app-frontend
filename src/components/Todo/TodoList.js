import React from "react";
import { Container, Box } from "@mui/material";
import NewTodo from "./NewTodo";
import Todo from "./Todo";

const TodoList = () => {
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
        <Todo sx={{ width: "100%" }} />
      </Box>
    </Container>
  );
};

export default TodoList;
