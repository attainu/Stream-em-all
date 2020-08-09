import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../Config';
import Modal from '../Modal';
import { Grid, Card, CardActionArea, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 305,
  },
}));

const GridCard = ({ movie }) => {
  console.log(movie);
  const classes = useStyles();
  const [myMovie, setMovie] = useState('');
  const [isToggle, settoggle] = useState(false);
  const handleClick = (value) => {
    setMovie(value);
    settoggle(true);
  };
  return (
    <Grid item xs={4} lg={3} sm={6}>
      {myMovie && (
        <Modal show={isToggle} modalClosed={settoggle} movie={movie} />
      )}
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component='img'
            onClick={() => handleClick(movie)}
            alt={movie.title || movie.name}
            height='400'
            image={`${IMAGE_BASE_URL}${POSTER_SIZE}${
              movie.backdrop_path || movie.poster_path
            }`}
            title={movie.title || movie.name}
          />
        </CardActionArea>
        {/* <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions> */}
      </Card>
    </Grid>
  );
};

export default GridCard;
