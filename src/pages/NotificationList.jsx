import React, { useState, useEffect } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import NotificationService from "../services/notificationService";

export default function NotificationList() {
  const [notifications, setnotifications] = useState([]);
  useEffect(() => {
    let notificationService = new NotificationService();
    notificationService
      .getAll()
      .then((result) => setnotifications(result.data.data));
  }, []);
  return (
    <div>
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Bildirimler"
          menuVariant="dark"
        >
          {notifications.map((b) => (
            <div>
              <NavDropdown.Item href="#action/3.1">{b.detail}</NavDropdown.Item>
            </div>
          ))}
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Okundu İşaretle</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </div>
  );
}
