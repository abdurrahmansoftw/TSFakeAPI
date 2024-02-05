import { Card, CardContent, Typography, styled } from '@mui/material'
import { User } from '../hooks/useUsers'

const CustomCardContainer = styled(Card)`
  background-color: #f0f0f0;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`

interface Users {
  user: User
}

const UserCard = ({ user }: Users) => {
  return (
    <CustomCardContainer>
      <CardContent>
        <Typography variant='h5'>{user.name}</Typography>
        <Typography variant='body2' color='text.secondary'>
          Username: {user.username}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Email: {user.email}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Phone: {user.phone}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Address: {user.address.street}, {user.address.suite},
          {user.address.city}, {user.address.zipcode}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Company: {user.company.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Website: {user.website}
        </Typography>
      </CardContent>
    </CustomCardContainer>
  )
}

export default UserCard
