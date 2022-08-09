import React, { useState, useEffect } from "react";
import MessageService from "../services/messageService";
import Table from 'react-bootstrap/Table';
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
export default function SendedMessage() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    let messageService = new MessageService();
    messageService.getbysender("ayca@ayca.com").then((result) => setMessages(result.data.data));
  },[]);
  return (
    <div><Table striped>
    <thead>
      <tr>
        <th>Alıcı Mail</th>
        <th>Konu</th>
        <th>Tarih</th>
        <th>#</th>
      </tr>
    </thead>
    <tbody>
    {messages.map((b) => (
      <tr key={b.id}>
        <td>{b.senderMail}</td>
        <td>{b.subject}</td>
        <td>{b.messageDate}</td>
        <td><Button size="sm"
                            variant="success" as={NavLink}
          to={`messages/inbox/messagedetail/${b?.id}`}>Detay</Button></td>
      </tr>
       ))}
    </tbody>
  </Table></div>
  )
}
