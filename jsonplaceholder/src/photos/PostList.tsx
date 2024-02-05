import { List, ListItem, ListItemText } from '@mui/material'
import usePosts from '../hooks/usePosts'

const PostList = () => {
  const { data: posts, error, isLoading } = usePosts()

  if (error) return <p>{error.message}</p>
  if (isLoading) return <p>loading</p>

  return (
    <div>
      <List>
        {posts?.map((post) => (
          <ListItem key={post.id} sx={{ borderBottom: 1 }}>
            <ListItemText>{post.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default PostList
