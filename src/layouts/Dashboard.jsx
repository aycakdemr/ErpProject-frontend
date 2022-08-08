import { Container } from '@mui/system'
import React from 'react'
import Branch from './Branch'
import Navi from './Navi'

export default function Dashboard() {
  return (
    <div>
      <Container>
      <Navi></Navi>
        <br></br><br>
        </br><br></br>
      <Branch></Branch>
      </Container>
    </div>
  )
}
