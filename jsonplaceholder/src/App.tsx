import { Container } from '@mui/material'
import React from 'react'
import UserList from './users/UserList'

const App = () => {
  return (
    <React.Fragment>
      <Container>
        <h1 className='text-3xl font-bold  my-4'>TodoList: React Queary!</h1>
        <UserList />
        {/* <PhotoList /> */}
        {/* <PostList /> */}
      </Container>
    </React.Fragment>
  )
}

export default App
