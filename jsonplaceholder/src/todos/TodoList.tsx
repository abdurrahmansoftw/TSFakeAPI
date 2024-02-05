import {
  Box,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

interface Todo {
  id: number
  title: string
  userId: number
  completed: boolean
}

const TodoList = () => {
  const fetchTodos = () =>
    axios
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.data)

  const {
    data: todos,
    error,
    isLoading,
  } = useQuery<Todo[], Error>({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  })

  if (error) return <p>{error.message}</p>
  if (isLoading) return <CircularProgress />
  
  return (
    <Box sx={{ width: '100%' }}>
      <List>
        {todos?.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemText primary={`${todo.id}. ${todo.title}`} />
            <Divider />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default TodoList
