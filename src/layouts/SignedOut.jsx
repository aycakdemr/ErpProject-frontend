import React from 'react'
import Button from 'react-bootstrap/Button';

export default function SignedOut(props) {
  return (
    <div><Button variant="warning" onClick={props.signIn}>Giriş Yap</Button>
    <Button variant="warning" style={{marginLeft : '0.5rem'}}>Kayıt Ol</Button></div>
  )
}
