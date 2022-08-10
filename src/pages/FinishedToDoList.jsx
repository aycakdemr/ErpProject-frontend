import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

export default function FinishedToDoList() {
  const todolist = useSelector((state) => state.todolist);
  Object.entries(todolist);
  console.log(todolist)
  return (
    <div>
      <Container>
        {todolist.todolistItems.map((item) => (
          <Alert variant="info" dismissible>
            <Alert.Heading>{item.todolist?.title}!</Alert.Heading>
             <p>{item.todolist?.detail}</p>
            <h6> {item.todolist?.date}</h6> 
            <div className="d-flex justify-content-end">
              <Button variant="danger">Sil</Button>
            </div>
          </Alert>
        ))}
      </Container>
    </div>
  );
}
