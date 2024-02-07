import { Container } from '@mui/material'
import React from 'react'
import TodoForm from './todos/TodoForm'
import TodoList from './todos/TodoList'

const App = () => {
  return (
    <React.Fragment>
      <Container>
        <h1 className='text-3xl font-bold  my-4'>TodoList: React Queary!</h1>
        {/* <UserList /> */}
        {/* <PhotoList /> */}
        {/* <PostList /> */}
        <TodoForm />
        <TodoList />
      </Container>
    </React.Fragment>
  )
}

export default App
