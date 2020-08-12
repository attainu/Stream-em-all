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
import { connect } from 'react-redux';
import ChooseProfile from '../ChooseProfile';
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
    width: 170,
    height: 170,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const AddProfile = ({ props, setProfile, currentUser }) => {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [open, setOpen] = useState(false);
  const AddProfile = () => {
    firestore
      .collection(currentUser.uid)
      .doc('userprofile')
      .collection('profiles')
      .add({
        img: 'https://i.ibb.co/WKrPzZd/iu.jpg',
        profile: title,
      })
      .then(() => {
        setProfile('');
      });
  };
  return (
    <div className='apMainDiv'>
      <ChooseProfile open={open} setOpen={setOpen} />
      <Logo />
      <div>
        <div>
          <Typography variant='h3' gutterBottom>
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
                      className='editTitle'
                      onChange={(e) => setTitle(e.target.value)}
                      type='text'
                      placeholder='Add Your Name'
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      variant='contained'
                      onClick={() => setOpen(true)}
                      color='secondary'
                    >
                      Choose
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant='contained' color='secondary'>
                      upload
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
        <Divider variant='middle' className='divider' />
        <div style={{ marginTop: '5vh' }}>
          <Button
            variant='contained'
            color='default'
            onClick={() => AddProfile()}
            startIcon={<CloudUploadIcon />}
          >
            Upload
          </Button>
          <Button
            variant='outlined'
            className='cancelButton'
            color='default'
            onClick={() => setProfile('')}
          >
            CANCEL
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
  userProfile: user.userProfile,
});
export default connect(mapStateToProps)(AddProfile);
