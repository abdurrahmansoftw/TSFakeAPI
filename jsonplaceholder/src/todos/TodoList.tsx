import { Box, Button, List, ListItem, Stack, TextField } from '@mui/material'
import useTodos from '../hooks/useTodos'

const TodoList = () => {
  const { data: todos } = useTodos()
  return (
    <Stack>
      <Box component={'form'}>
        <TextField label='add' name='add' size='small' />
        <Button variant='outlined'>Add</Button>
      </Box>

      <List>
        {todos?.map((todo) => (
          <ListItem>{todo.title}</ListItem>
        ))}
      </List>
    </Stack>
  )
}

export default TodoList
