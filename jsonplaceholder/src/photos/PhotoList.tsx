import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from '@mui/material'
import usePhotos from '../hooks/usePhotos'

const PhotoList = () => {
  const { data: photos, error, isLoading } = usePhotos()
  if (error) return <p>{error.message}</p>
  if (isLoading) return <CircularProgress />

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={2}>
        {photos?.map((photo) => (
          <Grid item xs={4} key={photo.id}>
            <Card>
              <CardMedia
                sx={{ height: 140 }}
                image={photo.url}
                title={photo.title}
              />
              <CardContent>
                <Typography gutterBottom variant='h6' component='div'>
                  {photo.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default PhotoList
