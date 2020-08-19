import React, { useState, useEffect } from 'react';
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
import { connect } from 'react-redux';
import ChooseProfile from '../ChooseProfile';
import Swal from 'sweetalert2';
import ProgressBar from '../ProgressBar';
import {
  deleteoneProfile,
  deleteRestData,
  updateoneProfile,
} from '../../Utils/addProfile';
import './index.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#221f1f',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    minHeight: 200,
    background: '#221f1f',
    color: '#fff',
  },
  image: {
    width: 170,
    height: 170,
    // [theme.breakpoints.up('sm')]: {

    // },
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
  },
}));

const EditProfile = ({ props, setProfile, currentUser, profiles }) => {
  const [open, setOpen] = useState(false);
  const { img, profile, docid } = props;
  const [title, setTitle] = useState(profile);
  const [Image, setImage] = useState(img);
  const [remove, setDelete] = useState(true);
  const [file, setFile] = useState(null);
  const [fileerror, setError] = useState(null);
  useEffect(() => {
    profiles.length === 1 && setDelete(false);
  }, [setDelete, profiles]);

  const updateProfile = () => {
    return (Image !== img || title !== profile) && title !== ''
      ? Swal.fire({
          title: 'Are you sure?',
          text: 'Your Profile will be Updated!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Update it!',
        }).then((result) => {
          if (result.value) {
            updateoneProfile(docid, Image, title).then(() => {
              Swal.fire({
                showConfirmButton: false,
                icon: 'success',
                timer: 1000,
                title: 'Your Profile has been Updated.',
              });
              setProfile('');
            });
          }
        })
      : setProfile('');
  };
  const deleteProfile = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.value) {
        await deleteoneProfile(docid).then(() => {
          deleteRestData(profile).then(() => {
            Swal.fire({
              showConfirmButton: false,
              icon: 'success',
              timer: 1000,
              title: 'Your file has been deleted.',
            });
            setProfile('');
          });
        });
      }
    });
  };
  const types = ['image/png', 'image/jpeg'];
  const handleChange = (e) => {
    const selected = e.target.files[0];
    return selected && types.includes(selected.type)
      ? (setFile(selected), setError(''))
      : (setFile(null), setError('please select an image file (png/jpeg)'));
  };
  const classes = useStyles();
  return (
    <div className='epMainDiv'>
      <ChooseProfile
        Image={Image}
        setImage={setImage}
        open={open}
        setOpen={setOpen}
      />
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
                    {!file && (
                      <Grid item>
                        <Button
                          variant='contained'
                          onClick={() => setOpen(true)}
                          color='secondary'
                        >
                          Choose from Default
                        </Button>
                      </Grid>
                    )}
                    <Grid item xs>
                      <p>or</p>
                    </Grid>
                    <Grid item xs>
                      {fileerror && <h2>{fileerror}</h2>}
                      {file && <ProgressBar file={file} setUrl={setImage} />}
                      <Button variant='contained' color='secondary'>
                        <form>
                          upload
                          <input
                            type='file'
                            onChange={handleChange}
                            name=''
                            id=''
                          />
                        </form>
                      </Button>
                    </Grid>
                  </Grid>
                  {remove && (
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
                  )}
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

const mapStateToProps = ({ user, profiles }) => ({
  currentUser: user.currentUser,
  userProfile: user.userProfile,
  profiles: profiles.Profiles,
});
export default connect(mapStateToProps)(EditProfile);
