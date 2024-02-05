import axios from 'axios'
import { useEffect, useState } from 'react'

interface Todo {
  id: number
  title: string
  userId: number
  completed: boolean
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => setTodos(response.data))
      .catch((error) => setError(error))
  }, [])

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

export default TodoList
