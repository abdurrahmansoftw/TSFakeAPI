import { useInfiniteQuery } from '@tanstack/react-query'

interface Photo {
  id: number
  title: string
  albumId: number
  url: string
  thumbnailUrl: string
}

interface PhotoQuery {
  pageSize: number
}

const usePhotos = (query: PhotoQuery) =>
  useInfiniteQuery<Photo[], Error>({
    queryKey: ['photos', query],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get('https://jsonplaceholder.typicode.com/photos', {
          params: {
            _start: (pageParam - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((response) => response.data),
    staleTime: 10 * 1000,
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.length > 0 ? allPage.length + 1 : undefined
    },
  })

export default usePhotos
