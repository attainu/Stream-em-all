import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function DialogSelect({ open, setOpen, Image, setImage }) {
  const classes = useStyles();

  const handleChange = (event) => {
    setImage(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Select from the Default photos</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel id='demo-controlled-open-select-label'>
                Image
              </InputLabel>
              <Select
                labelId='demo-controlled-open-select-label'
                id='demo-controlled-open-select'
                value={Image}
                onChange={handleChange}
              >
                <MenuItem value={'https://i.ibb.co/ZGwhrNH/iu-2.jpg'}>
                  <img
                    src='https://i.ibb.co/ZGwhrNH/iu-2.jpg'
                    style={{ maxWidth: '4rem' }}
                    alt='data'
                  />
                  <h3>A</h3>
                </MenuItem>
                <MenuItem value={'https://i.ibb.co/JpdSW1q/iu-4.jpg'}>
                  <img
                    src='https://i.ibb.co/JpdSW1q/iu-4.jpg'
                    style={{ maxWidth: '4rem' }}
                    alt='data'
                  />
                  <h3>B</h3>
                </MenuItem>
                <MenuItem value={'https://i.ibb.co/WKrPzZd/iu.jpg'}>
                  <img
                    src='https://i.ibb.co/WKrPzZd/iu.jpg'
                    style={{ maxWidth: '4rem' }}
                    alt='data'
                  />
                  <h3>C</h3>
                </MenuItem>
                <MenuItem value={'https://i.ibb.co/vvK8FX6/iu-3.jpg'}>
                  <img
                    src='https://i.ibb.co/vvK8FX6/iu-3.jpg'
                    style={{ maxWidth: '4rem' }}
                    alt='data'
                  />
                  <h3>D</h3>
                </MenuItem>
              </Select>
            </FormControl>
            {/* <FormControl className={classes.formControl}>
              <InputLabel id='demo-dialog-select-label'>Age</InputLabel>
              <Select
                labelId='demo-dialog-select-label'
                id='demo-dialog-select'
                value={age}
                onChange={handleChange}
                input={<Input />}
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl> */}
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleClose} color='primary'>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
