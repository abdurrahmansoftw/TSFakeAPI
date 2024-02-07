import { List, ListItem } from '@mui/material'
import useTodos from '../hooks/useTodos'

const TodoList = () => {
  const { data: todos } = useTodos()
  return (
    <List>
      {todos?.map((todo) => (
        <ListItem>{todo.title}</ListItem>
      ))}
    </List>
  )
}

export default TodoList
