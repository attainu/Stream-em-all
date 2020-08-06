import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../Redux/Movie/movieActionGenrator';

const Movies = ({ movies, getMovies }) => {
  // const movieData1_10 = movies.slice(1, 11);
  // const movieData11_20 = movies.slice(11, 21);
  // const movieData21_30 = movies.slice(21, 31);
  // const movieData31_40 = movies.slice(31, 41);
  // const movieData41_50 = movies.slice(41, 51);
  // const movieData51_60 = movies.slice(51, 60);
  // console.log(movieData1_10);
  // console.log(movieData11_20);
  // console.log(movieData21_30);
  // console.log(movieData31_40);
  // console.log(movieData41_50);
  // console.log(movieData51_60);
  useEffect(() => {
    getMovies();
  }, [getMovies]);
  return <h1>Movies</h1>;
};
const mapDispatchToProps = (dispatch) => ({
  getMovies: () => dispatch(getMovies()),
});
const mapStateToProps = ({ movie }) => ({
  movies: movie.movieItems,
});
export default connect(mapStateToProps, mapDispatchToProps)(Movies);
