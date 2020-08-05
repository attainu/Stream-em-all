import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../Redux/Movie/movieActionGenrator';

const Movies = ({ getMovies }) => {
  useEffect(() => {
    getMovies();
  }, [getMovies]);
  return <div>movies</div>;
};
const mapDispatchToProps = (dispatch) => ({
  getMovies: () => dispatch(getMovies()),
});
const mapStateToProps = ({ movie }) => ({
  movies: movie.movieItems,
});
export default connect(mapStateToProps, mapDispatchToProps)(Movies);
