import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../Redux/Movie/movieActionGenrator';
import TitleList from '../../Components/TitleList';

const Movies = ({ movies, getMovies }) => {
  const movieData1_10 = movies.slice(0, 10);
  const movieData11_20 = movies.slice(10, 20);
  const movieData21_30 = movies.slice(20, 30);
  const movieData31_40 = movies.slice(30, 40);
  const movieData41_50 = movies.slice(40, 50);
  const movieData51_60 = movies.slice(50, 60);
  useEffect(() => {
    getMovies();
  }, [getMovies]);
  return (
    <div>
      <TitleList
        title='Netflix Orignals'
        height={'horizontal'}
        slide={movieData1_10}
      />
      <TitleList title='Trending Now' slide={movieData11_20} />
      <TitleList title='Top Rated' slide={movieData21_30} />
      <TitleList title='Action Movies' slide={movieData31_40} />
      <TitleList title='Comedy Movies' slide={movieData41_50} />
      <TitleList title='Horror Movies' slide={movieData51_60} />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  getMovies: () => dispatch(getMovies()),
});
const mapStateToProps = ({ movie }) => ({
  movies: movie.movieItems,
});
export default connect(mapStateToProps, mapDispatchToProps)(Movies);
