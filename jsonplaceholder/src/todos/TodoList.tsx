import { useState } from 'react'

interface Todo {
  id: number
  title: string
  userId: number
  completed: boolean
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  return <div>TodoList</div>
}

export default TodoList
