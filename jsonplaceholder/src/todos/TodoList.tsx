import { List, ListItem, Stack } from '@mui/material'
import useTodos from '../hooks/useTodos'

const TodoList = () => {
  const { data: todos } = useTodos()
  return (
    <Stack>
      <List>
        {todos?.map((todo) => (
          <ListItem>{todo.title}</ListItem>
        ))}
      </List>
    </Stack>
  )
}

export default TodoList
