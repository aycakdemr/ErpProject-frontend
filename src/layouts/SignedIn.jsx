import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

export default function SignedIn(props) {
  return (
    <div> 
         <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Ayça Akdemir
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={props.signOut}>Çıkış Yap</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
</div>
  )
}
