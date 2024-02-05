import { Container } from '@mui/material'
import TodoList from './todos/TodoList'

const App = () => {
  return (
    <Container>
      <h1 className='text-3xl font-bold underline my-4'> React Queary!</h1>
      <TodoList />
    </Container>
  )
}

export default App
