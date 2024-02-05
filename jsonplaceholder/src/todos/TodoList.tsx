import {
  Box,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import useTodos from '../hooks/useTodos'

const TodoList = () => {
  const { data: todos, error, isLoading } = useTodos()
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
