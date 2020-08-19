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
import { connect } from 'react-redux';
import ChooseProfile from '../ChooseProfile';
import upload from '../../Assets/images/upload.svg';
import Swal from 'sweetalert2';
import ProgressBar from '../ProgressBar';
import { addoneProfiles } from '../../Utils/addProfile';
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
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
  },
}));

const AddProfile = ({ props, setProfile, currentUser }) => {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [open, setOpen] = useState(false);
  const [Image, setImage] = useState('https://i.ibb.co/WKrPzZd/iu.jpg');
  const [file, setFile] = useState(null);
  const [fileerror, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];
  const handleChange = (e) => {
    const selected = e.target.files[0];
    return selected && types.includes(selected.type)
      ? (setFile(selected), setError(''))
      : (setFile(null), setError('please select an image file (png/jpeg)'));
  };
  const AddProfile = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Your Profile will be added!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Add it!',
    }).then(async (result) => {
      if (result.value) {
        await addoneProfiles(Image, title).then(() => {
          Swal.fire({
            showConfirmButton: false,
            icon: 'success',
            timer: 1000,
            title: 'Your Profile has been Added.',
          });
          setProfile('');
        });
      }
    });
  };
  return (
    <div className='apMainDiv'>
      <ChooseProfile
        open={open}
        Image={Image}
        setImage={setImage}
        setOpen={setOpen}
      />
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

                  <Grid item>
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
