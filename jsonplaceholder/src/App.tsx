import { Container } from '@mui/material'
import React from 'react'
import Navbar from './components/Navbar'
import PhotoList from './photos/PhotoList'

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <h1 className='text-3xl font-bold  my-4'>TodoList: React Queary!</h1>
        <PhotoList />
      </Container>
    </React.Fragment>
  )
}

export default App
