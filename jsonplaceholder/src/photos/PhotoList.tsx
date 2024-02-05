import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  List,
  Typography,
} from '@mui/material'
import usePhotos from '../hooks/usePhotos'

const PhotoList = () => {
  const { data: photos, error, isLoading } = usePhotos()
  if (error) return <p>{error.message}</p>
  if (isLoading) return <CircularProgress />

  return (
    <Box sx={{ width: '100%' }}>
      <List>
        {photos?.map((photo) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={photo.url}
              title={photo.title}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {photo.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </List>
    </Box>
  )
}

export default PhotoList
