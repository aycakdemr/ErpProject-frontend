import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  function handleSignOut(params) {
    setIsAuthenticated(false);
  }
  function handleSignIn(params) {
    setIsAuthenticated(true);
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <div >
              <Nav.Item style={{marginLeft:'40rem'}}>
                {isAuthenticated ? (
                  <SignedIn signOut={handleSignOut} />
                ) : (
                  <SignedOut signIn={handleSignIn} />
                )}
              </Nav.Item>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
