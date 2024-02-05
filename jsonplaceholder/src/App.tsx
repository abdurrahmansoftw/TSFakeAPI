import { Container } from '@mui/material'
import TodoList from './todos/TodoList'

const App = () => {
  return (
    <Container>
      <h1 className='text-3xl font-bold  my-4'>TodoList: React Queary!</h1>
      <TodoList />
    </Container>
  )
}

export default App
