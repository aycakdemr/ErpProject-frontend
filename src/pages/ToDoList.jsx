import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import TodolistService from "../services/todolistService";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import {toast} from "react-toastify"
import { addToList } from "../store/actions/todolistActions";

export default function ToDoList() {
    const [todolists, settodolists] = useState([]);
    const dispatch = useDispatch()
  useEffect(() => {
    let todolistService = new TodolistService();
    todolistService.getAll().then((result) => settodolists(result.data.data));
  },[]);

  const handleAddToList=(todolist)=>{
    dispatch(addToList(todolist))
    toast.warning(`TODO EKLENDİ`)
    
  }

  return (
    <div>
      <Container>
      
      {todolists.map((b) => (
        <Alert variant="info" dismissible>
          <Alert.Heading>{b.title}!</Alert.Heading>
          <p>
            {b.detail}
          </p>
          <h6> {b.date}</h6>
          <div className="d-flex justify-content-end">
          <Button  variant="outline-danger" onClick={() =>handleAddToList(b)}>
            Yapıldı olarak işaretle!    
          </Button>
        </div>
        </Alert>
        ))}
         <br></br>
        <div className="d-flex justify-content-end">
          <Button as={NavLink}
                  to="/finishedtodolist" variant="success">
            Bitmiş Todolar    
          </Button>
        </div>
        <br></br>
        <br></br> <br></br> <br></br>
      </Container>
    </div>
  );
}
