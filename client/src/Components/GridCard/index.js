import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../Config';
import Modal from '../Modal';
import { Grid, Card, CardActionArea, CardMedia } from '@material-ui/core';
import './index.scss';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 305,
  },
}));

const GridCard = ({ movie }) => {
  const classes = useStyles();
  const [myMovie, setMovie] = useState('');
  const [isToggle, settoggle] = useState(false);
  const handleClick = (value) => {
    setMovie(value);
    settoggle(true);
  };
  return (
    <Fragment>
      {myMovie && (
        <Modal show={isToggle} modalClosed={settoggle} movie={movie} />
      )}
      <Grid className='gridItem' item xs={4} lg={3} sm={6}>
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
        </Card>
      </Grid>
      <h4 className='playText'>{movie.title || movie.name}</h4>
      <div className='myoverlay'></div>
    </Fragment>
  );
};

export default GridCard;
