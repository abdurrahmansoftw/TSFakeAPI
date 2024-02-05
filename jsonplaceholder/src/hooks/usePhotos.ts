import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface Photo {
  id: number
  title: string
  albumId: number
  url: string
  thumbnailUrl: string
}

const usePhotos = () => {
  const fetchPhotos = () =>
    axios
      .get<Photo[]>('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.data)

     return  useQuery<Photo[], Error>({
        queryKey: ['photos'],
        queryFn: fetchPhotos,
        staleTime: 10 * 1000,

      })
}

export default usePhotos