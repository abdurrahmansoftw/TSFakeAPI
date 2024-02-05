import { Card, CardContent, Typography, styled } from '@mui/material'
import { User } from '../hooks/useUsers'

const CustomCardContainer = styled(Card)`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
  }
`

const CardHeader = styled('div')`
  background-color: #1976d2;
  color: #ffffff;
  padding: 16px;
  border-radius: 10px 10px 0 0;
`

const CustomCardContent = styled(CardContent)`
  padding: 16px;
`

interface Users {
  user: User
}

const UserCard = ({ user }: Users) => {
  return (
    <CustomCardContainer>
      <CardHeader>
        <Typography variant='h6'>{user.name}</Typography>
      </CardHeader>
      <CustomCardContent>
        <Typography variant='body2' color='textSecondary'>
          Username: {user.username}
        </Typography>
        <Typography variant='body2' color='textSecondary'>
          Email: {user.email}
        </Typography>
        <Typography variant='body2' color='textSecondary'>
          Phone: {user.phone}
        </Typography>
        <Typography variant='body2' color='textSecondary'>
          Address: {user.address.street}, {user.address.suite},{' '}
          {user.address.city}, {user.address.zipcode}
        </Typography>
        <Typography variant='body2' color='textSecondary'>
          Company: {user.company.name}
        </Typography>
        <Typography variant='body2' color='textSecondary'>
          Website: {user.website}
        </Typography>
      </CustomCardContent>
    </CustomCardContainer>
  )
}

export default UserCard
