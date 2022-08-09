import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from "react-router-dom";

export default function SignedIn(props) {
  return (
    <div> 
         <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Ayça Akdemir
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" as={NavLink}
                  to="/messages">Mesajlar</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={props.signOut}>Çıkış Yap</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
</div>
  )
}
