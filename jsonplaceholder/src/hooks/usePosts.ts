import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

interface Post {
  id: number
  userId: number
  title: string
  body: string
}

const usePosts = (userId: number | undefined) => {
  const fetchPosts = () =>
    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
        params: { userId },
      })
      .then((response) => response.data)

  return useQuery<Post[], Error>({
    queryKey: userId ? ['users', userId, 'posts'] : ['posts'],
    queryFn: fetchPosts,
    staleTime: 10 * 1000,
  })
}

export default usePosts
