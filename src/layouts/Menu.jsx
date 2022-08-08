import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div><ListGroup variant="dark">
    <ListGroup.Item as={NavLink}
                  to="/sections">Bölümler</ListGroup.Item>
    <ListGroup.Item as={NavLink}
                  to="/tables">Masalar</ListGroup.Item>
    <ListGroup.Item as={NavLink}
                  to="/branches">Depolar</ListGroup.Item>
  </ListGroup></div>
  )
}
