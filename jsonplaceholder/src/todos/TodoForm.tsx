import { Box, Button, TextField } from '@mui/material'
import { useRef } from 'react'
import useAddTodos from '../hooks/useAddTodos'

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null)

  const addTodo = useAddTodos(() => {
    if (ref.current) ref.current.value = ''
  })

  return (
    <Box
      component={'form'}
      onSubmit={(event) => {
        event.preventDefault()

        if (ref.current && ref.current.value)
          addTodo.mutate({
            id: 0,
            title: ref.current?.value,
            completed: false,
            userId: 1,
          })
      }}
    >
      <TextField label='add' name='add' size='small' type='text' ref={ref} />
      <Button variant='outlined' disabled={addTodo.isPending}>
        {addTodo.isPending ? 'Adding' : 'Add'}
      </Button>
    </Box>
  )
}

export default TodoForm
