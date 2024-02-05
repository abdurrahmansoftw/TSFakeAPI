import { Container } from '@mui/material'
import PhotoList from './photos/PhotoList'

const App = () => {
  return (
    <Container>
      <h1 className='text-3xl font-bold  my-4'>TodoList: React Queary!</h1>
      <PhotoList />
    </Container>
  )
}

export default App
