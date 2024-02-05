import { Box, Grid, List, ListItem, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface Todo {
  id: number
  title: string
  userId: number
  completed: boolean
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

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
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {todos.map((todo) => (
          <Grid item xs={12} key={todo.id}>
            <Item>
              <List>
                <ListItem>
                  
                </ListItem>
              </List>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default TodoList
