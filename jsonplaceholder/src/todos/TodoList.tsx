import { Box, Divider, List, ListItem, ListItemText } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface Todo {
  id: number
  title: string
  userId: number
  completed: boolean
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => setTodos(response.data))
      .catch((error) => setError(error))
  }, [])

  return (
    <Box sx={{ width: '100%' }}>
      {error && 'Error'}
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemText primary={`todo ${todo.title}`} />
            <Divider />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default TodoList
