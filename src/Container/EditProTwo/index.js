import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import Logo from '../../Components/Logo';
import { firestore } from '../../Firebase';
import './index.scss';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    minWidth: 500,
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

export default function ComplexGrid({ props, setProfile }) {
  const history = useHistory();
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
        <div>Edit Profile</div>

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
                  <FormControl className={classes.formControl} disabled>
                    <InputLabel htmlFor='name-native-disabled'>
                      Allowed Movies:
                    </InputLabel>
                    <NativeSelect
                      inputProps={{
                        name: 'name',
                        id: 'name-native-disabled',
                      }}
                    >
                      <optgroup label='Author'>
                        <option value='hai'>All Maturity Level</option>
                      </optgroup>
                      <optgroup label='Contributors'>
                        <option value='olivier'>Olivier</option>
                        <option value='kevin'>Kevin</option>
                      </optgroup>
                    </NativeSelect>
                  </FormControl>
                  <FormControl className={classes.formControl} disabled>
                    <InputLabel htmlFor='name-native-disabled'>
                      Language
                    </InputLabel>
                    <NativeSelect
                      inputProps={{
                        name: 'Language',
                        id: 'name-native-disabled',
                      }}
                    >
                      <optgroup label='Author'>
                        <option value='hai'>English</option>
                      </optgroup>
                      <optgroup label='Contributors'>
                        <option value='olivier'>Olivier</option>
                        <option value='kevin'>Kevin</option>
                      </optgroup>
                    </NativeSelect>
                  </FormControl>
                  {/* <Typography variant='body2' gutterBottom>
                    Full resolution 1920x1080 • JPEG
                  </Typography>
                  <Typography variant='body2' color='textSecondary'>
                    ID: 1030114
                  </Typography> */}

                  <Grid item>
                    <Typography
                      variant='body2'
                      onClick={() => deleteProfile()}
                      style={{ cursor: 'pointer' }}
                    >
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
        <div>
          <button onClick={() => updateProfile()}>SAVE</button>
          <button onClick={() => setProfile('')}>CANCEL</button>
          and
        </div>
      </div>
    </div>
  );
}
