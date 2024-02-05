import {
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import { useState } from 'react'
import usePosts from '../hooks/usePosts'

const PostList = () => {
  // const [userId, setUserTd] = useState<number>()

  const pageSize = 10
  const [page, setPage] = useState(1)

  const { data: posts, error, isLoading } = usePosts({ page, pageSize })

  if (error) return <p>{error.message}</p>
  if (isLoading) return <p>loading</p>

  return (
    <div>
      {/* <FormControl fullWidth>
        <InputLabel id='user'>user</InputLabel>
        <Select
          labelId='user'
          id='user'
          value={userId}
          onChange={(event) => setUserTd(parseInt(event.target.value))}
        >
          <MenuItem value=''>User</MenuItem>
          <MenuItem value='1'>User 1</MenuItem>
          <MenuItem value='2'>User 2</MenuItem>
          <MenuItem value='3'>User 3</MenuItem>
        </Select>
      </FormControl> */}
      <List>
        {posts?.map((post) => (
          <ListItem key={post.id} sx={{ borderBottom: 1 }}>
            <ListItemText>{post.title}</ListItemText>
          </ListItem>
        ))}
      </List>

      <ButtonGroup variant='outlined' aria-label='outlined button group'>
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previus
        </Button>
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </ButtonGroup>
    </div>
  )
}

export default PostList
