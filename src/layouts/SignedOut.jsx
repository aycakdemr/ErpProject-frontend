import React from 'react'
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";

export default function SignedOut(props) {
  return (
    <div><Button variant="warning"as={NavLink}
    to="/signin" >Giriş Yap</Button>
    <Button variant="warning" style={{marginLeft : '0.5rem'}}>Kayıt Ol</Button></div>
  )
}
