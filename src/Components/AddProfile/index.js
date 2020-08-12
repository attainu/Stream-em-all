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
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { firestore } from '../../Firebase';
import upload from '../../Assets/images/upload.svg';
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

const AddProfile = ({ props, setProfile }) => {
  const [title, setTitle] = useState('');
  const AddProfile = () => {
    firestore
      .collection(currentUser.uid)
      .doc('userprofile')
      .collection('profiles')
      .add({
        img: 'https://i.ibb.co/WKrPzZd/iu.jpg',
        profile: 'Mommy',
      })
      .then(function () {
        console.log('Document successfully added!');
        setProfile('');
      })
      .catch(function (error) {
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
            Add Profile
          </Typography>
          <Divider variant='middle' className='divider' />
        </div>

        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt='complex' src={upload} />
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
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
        <div>
          <Divider variant='middle' className='divider' />
          <Button
            variant='contained'
            color='default'
            onClick={() => AddProfile()}
            startIcon={<CloudUploadIcon />}
          >
            Upload
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
export default AddProfile;
