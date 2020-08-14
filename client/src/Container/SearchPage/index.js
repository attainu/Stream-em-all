import React from 'react';
import Header from '../../Components/Header';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridCard from '../../Components/GridCard';
import Footer from '../../Components/Footer';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '10vh',
  },
}));
const SearchPage = ({ movie }) => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.root}>
        <Grid container spacing={3}>
          {movie.map((data, index) => (
            <GridCard key={index} movie={data} />
          ))}
        </Grid>
      </div>
      <Footer />
    </div>
  );
};
const mapStateToProps = ({ search }) => ({
  movie: search.searchItems,
});
export default connect(mapStateToProps)(SearchPage);
