import { useMutation, useQueryClient } from '@tanstack/react-query'
import todoService from '../services/todoService'
import { CACHE_KEY_TODOS } from './constants'
import { Todo } from './useTodos'

interface AddTodoContext {
  previusTodos: Todo[]
}

const useAddTodos = (onAdd: () => void) => {
  const queryClient = useQueryClient()

  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: todoService.post,

    onMutate: (newTodo: Todo) => {
      const previusTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || []
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ])

      onAdd()
      return { previusTodos }
    },

    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      )
    },

    onError: (error, newTodo, context) => {
      if (!context) return
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context?.previusTodos)
    },
  })
}

export default useAddTodos
