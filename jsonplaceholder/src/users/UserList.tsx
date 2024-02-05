import { Grid } from '@mui/material'
import UserCard from '../components/UserCard'
import useUsers from '../hooks/useUsers'

const UserList = () => {
  const { data: users, error, isLoading } = useUsers()

  if (error) return <p>{error.message}</p>
  if (isLoading) return <p>loading....</p>

  return (
    <div>
      <Grid container spacing={2}>
        {users?.map((user) => (
          <Grid item key={user.id} xs={12} sm={6} md={4} lg={3}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default UserList
