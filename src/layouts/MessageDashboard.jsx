import React from "react";
import MessageLayout from "./MessageLayout";
import Inbox from "../pages/Inbox";
import MessageDetail from "../pages/MessageDetail";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Route, Routes } from "react-router";
import Navi from "./Navi";
import { Container } from "@mui/system";
import SendedMessage from "../pages/SendedMessage";

export default function MessageDashboard() {
  return (
    <div>
      <Container>
        <Navi></Navi>
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <Col sm={3}>
            <MessageLayout></MessageLayout>
          </Col>
          <Col sm={9}>
            <Routes>
              <Route path="*" element={<Inbox />} />

              <Route exact path="messages/inbox" element={<Inbox />} />
              <Route
                exact
                path="messages/inbox/messagedetail/:id"
                element={<MessageDetail />}
              />
              <Route
                exact
                path="messages/sendedmessage"
                element={<SendedMessage />}
              />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
