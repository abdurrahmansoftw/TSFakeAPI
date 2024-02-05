import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface Todo {
  id: number
  title: string
  albumId: number
  url: string
  thumbnailUrl: string
}

const usePhotos = () => {
  const fetchPhotos = () =>
    axios
      .get<Todo[]>('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.data)

     return  useQuery<Todo[], Error>({
        queryKey: ['photos'],
        queryFn: fetchPhotos,
        staleTime: 10 * 1000,

      })
}

export default usePhotos