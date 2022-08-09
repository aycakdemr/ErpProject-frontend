import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { NavLink } from "react-router-dom";

export default function MessageLayout() {
  return (
    <div><ListGroup variant="dark">
    <ListGroup.Item action variant="danger" as={NavLink}
                  to="messages/inbox">Gelen Kutusu</ListGroup.Item>
    <ListGroup.Item action variant="warning" as={NavLink}
                  to="messages/sendedmessage">Gönderilenler</ListGroup.Item>
    <ListGroup.Item action variant="info" >Çöp Kutusu</ListGroup.Item>
                  <ListGroup.Item action variant="light">Taslaklar</ListGroup.Item>
  </ListGroup></div>
  )
}
