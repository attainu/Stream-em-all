import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Typography,
  Paper,
  Grid,
  ButtonBase,
  Divider,
} from '@material-ui/core';
import Logo from '../Logo';
import DeleteIcon from '@material-ui/icons/Delete';
import { firestore } from '../../Firebase';
import './index.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#221f1f',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    minWidth: 500,
    minHeight: 200,
    background: '#221f1f',
    color: '#fff',
  },
  image: {
    width: 110,
    height: 110,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const EditProfile = ({ props, setProfile }) => {
  const { img, profile, docid } = props;
  console.log(profile);
  console.log(docid);
  const [title, setTitle] = useState(profile);
  const updateProfile = () => {
    return title !== profile
      ? firestore
          .collection('7w2An1j0ldYHczig7ORQRkSB3et2')
          .doc('userprofile')
          .collection('profiles')
          .doc(docid)
          .update({
            profile: title,
          })
          .then(function () {
            console.log('Document successfully updated!');
            setProfile('');
          })
          .catch(function (error) {
            // The document probably doesn't exist.
            console.error('Error updating document: ', error);
          })
      : setProfile('');
  };
  const deleteProfile = () => {
    const deleteData = () => {
      firestore
        .collection('7w2An1j0ldYHczig7ORQRkSB3et2')
        .doc(profile)
        .delete()
        .then(() => setProfile(''));
    };
    firestore
      .collection('7w2An1j0ldYHczig7ORQRkSB3et2')
      .doc('userprofile')
      .collection('profiles')
      .doc(docid)
      .delete()
      .then(function () {
        console.log('Document successfully deleted');
        deleteData();
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error('Error updating document: ', error);
      });
  };
  const classes = useStyles();
  return (
    <div className='epMainDiv'>
      <Logo />
      <div>
        <div>
          <Typography variant='h5' gutterBottom>
            Edit Profile
          </Typography>
          <Divider variant='middle' className='divider' />
        </div>

        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt='complex' src={img} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction='column' spacing={2}>
                  <Grid item xs>
                    <input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      type='text'
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      variant='contained'
                      color='secondary'
                      startIcon={<DeleteIcon />}
                      onClick={() => deleteProfile()}
                    >
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
        <div>
          <Divider variant='middle' className='divider' />
          <Button
            variant='contained'
            color='secondary'
            onClick={() => updateProfile()}
          >
            SAVE
          </Button>
          <Button
            variant='contained'
            color='primary'
            onClick={() => setProfile('')}
          >
            CANCEL
          </Button>
        </div>
      </div>
    </div>
  );
};
export default EditProfile;
