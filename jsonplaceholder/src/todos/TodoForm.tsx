import { Box, Button, TextField } from '@mui/material'

const TodoForm = () => {
  return (
    <Box component={'form'}>
      <TextField label='add' name='add' size='small' />
      <Button variant='outlined'>Add</Button>
    </Box>
  )
}

export default TodoForm
