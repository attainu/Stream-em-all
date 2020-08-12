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
import { connect } from 'react-redux';
import ChooseProfile from '../ChooseProfile';
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

const EditProfile = ({ props, setProfile, currentUser }) => {
  const [open, setOpen] = useState(false);
  const { img, profile, docid } = props;
  const [title, setTitle] = useState(profile);
  const updateProfile = () => {
    return title !== profile && title !== ''
      ? firestore
          .collection(currentUser.uid)
          .doc('userprofile')
          .collection('profiles')
          .doc(docid)
          .update({
            profile: title,
          })
          .then(() => {
            setProfile('');
          })
      : setProfile('');
  };
  const deleteProfile = () => {
    firestore
      .collection(currentUser.uid)
      .doc('userprofile')
      .collection('profiles')
      .doc(docid)
      .delete()
      .then(() => {
        firestore
          .collection(currentUser.uid)
          .doc(profile)
          .delete()
          .then(() => setProfile(''));
      });
  };
  const classes = useStyles();
  return (
    <div className='epMainDiv'>
      <ChooseProfile open={open} setOpen={setOpen} />
      <Logo />
      <div>
        <div>
          <Typography variant='h3' gutterBottom>
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
                      className='editTitle'
                      onChange={(e) => setTitle(e.target.value)}
                      type='text'
                    />
                  </Grid>
                  <Grid item>
                    <Grid item xs>
                      <Button
                        variant='contained'
                        onClick={() => setOpen(true)}
                        color='secondary'
                      >
                        Choose
                      </Button>
                    </Grid>
                    <Grid item xs>
                      <p>or</p>
                    </Grid>
                    <Grid item xs>
                      <Button variant='contained' color='secondary'>
                        upload
                      </Button>
                    </Grid>
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
        <Divider variant='middle' className='divider' />
        <div style={{ marginTop: '5vh' }}>
          <Button
            variant='contained'
            color='default'
            onClick={() => updateProfile()}
          >
            SAVE
          </Button>
          <Button
            variant='outlined'
            color='default'
            className='cancelButton'
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
export default connect(mapStateToProps)(EditProfile);
