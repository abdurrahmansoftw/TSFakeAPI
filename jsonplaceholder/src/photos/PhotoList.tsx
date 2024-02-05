import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from '@mui/material'
import usePhotos from '../hooks/usePhotos'

const PhotoList = () => {
  const pageSize = 10
  const {
    data: photos,
    error,
    isLoading,
    fetchNextPage,
  } = usePhotos({ pageSize })

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
      <Button onClick={() => fetchNextPage()} variant='outlined'>
        Load More
      </Button>
    </Box>
  )
}

export default PhotoList
