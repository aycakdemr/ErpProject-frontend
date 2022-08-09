import React, { useState, useEffect } from "react";
import MessageService from "../services/messageService";
import Table from 'react-bootstrap/Table';
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams } from 'react-router';

export default function MessageDetail() {
    let { id } = useParams();
    const [messages, setMessages] = useState([]);
  useEffect(() => {
    let messageService = new MessageService();
    messageService.getById(id).then((result) => setMessages(result.data.data));
  },[]);
  return (
    <div>{messages.map((b) => (
        <Card variant="dark" className="text-center">
          <Card.Header>{b.senderMail}</Card.Header>
          <Card.Body>
            <Card.Title>Konu:{b.subject}</Card.Title>
            <Card.Text>
              {b.messageContent}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">{b.messageDate}</Card.Footer>
        </Card>
      ))}</div>
  )
}
