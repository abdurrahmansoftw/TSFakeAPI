import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

interface User {
  id: number
  title: string
  albumId: number
  url: string
  thumbnailUrl: string
}

const useUsers = () => {
  const fetchUser = () =>
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.data)

  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: fetchUser,
    staleTime: 10 * 1000,
  })
}

export default useUsers
