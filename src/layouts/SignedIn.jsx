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
        <Dropdown.Item as={NavLink}
                  to="/messages">Mesajlar</Dropdown.Item>
        <Dropdown.Item as={NavLink} to="/todolist">Yapılacaklar</Dropdown.Item>
        <Dropdown.Item as={NavLink} to="/contact">İletişim</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={props.signOut}>Çıkış Yap</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
</div>
  )
}
