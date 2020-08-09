import React, { useEffect, useState, Fragment } from 'react'; //
import { firestore } from '../../Firebase';
import Header from '../../Components/Header';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridCard from '../../Components/GridCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '10vh',
  },
}));

const MyList = ({ currentUser, userProfile }) => {
  const [movie, setMovie] = useState([]);
  const classes = useStyles();
  const person = userProfile.profile;

  useEffect(() => {
    const fethcdata = () => {
      firestore
        .collection(currentUser.uid)
        .doc(person)
        .collection('list')
        .onSnapshot((snapshot) => {
          setMovie(snapshot.docs.map((doc) => doc.data()));
        });
    };
    fethcdata();
  }, [currentUser.uid, person]);
  return (
    <Fragment>
      <Header />
      <div className={classes.root}>
        <Grid container spacing={3}>
          {movie.map((data) => (
            <GridCard movie={data} />
          ))}
        </Grid>
      </div>
    </Fragment>
  );
};
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
  userProfile: user.userProfile,
});
export default connect(mapStateToProps)(MyList);
