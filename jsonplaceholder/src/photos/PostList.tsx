import usePosts from '../hooks/usePosts'

const PostList = () => {
  const { data: posts, error, isLoading } = usePosts()

  if (error) return <p>{error.message}</p>
  if (isLoading) return <p>loading</p>

  return (
    <div>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default PostList
