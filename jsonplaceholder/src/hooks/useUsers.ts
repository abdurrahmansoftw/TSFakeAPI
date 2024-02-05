import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

interface GeoLocation {
  lat: string
  lng: string
}

interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: GeoLocation
}

interface Company {
  name: string
  catchPhrase: string
  bs: string
}

interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
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
