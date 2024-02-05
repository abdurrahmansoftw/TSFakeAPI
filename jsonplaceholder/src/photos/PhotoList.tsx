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
import React from 'react'
import usePhotos from '../hooks/usePhotos'

const PhotoList = () => {
  const pageSize = 5
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePhotos({ pageSize })

  if (error) return <p>{error.message}</p>
  if (isLoading) return <CircularProgress />

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={2}>
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((photo) => (
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
          </React.Fragment>
        ))}
      </Grid>
      <Button sx={{ my: 5 }} onClick={() => fetchNextPage()} variant='outlined'>
        {isFetchingNextPage ? 'Loading' : 'Load More'}
      </Button>
    </Box>
  )
}

export default PhotoList
