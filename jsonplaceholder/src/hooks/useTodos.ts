import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export interface Todo {
  userId: number
  id: number
  title: string
  completed: false
}

const useTodos = () => {
  const fetchUser = () =>
    axios
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.data)

  return useQuery<Todo[], Error>({
    queryKey: ['users'],
    queryFn: fetchUser,
    staleTime: 10 * 1000,
  })
}

export default useTodos
