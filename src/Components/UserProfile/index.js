import React, { useEffect, useState, useRef } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { auth, firestore } from '../../Firebase';
import { setUserProfile } from '../../Redux/User/userActionGenerator';
import { useHistory } from 'react-router-dom';
import {
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from '@material-ui/core';

const UserProfile = ({ img, profileName, setUserProfile, currentUser }) => {
  const history = useHistory();
  const [profile, setProfile] = useState([]);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  useEffect(() => {
    const fethcdata = () => {
      firestore
        .collection(currentUser.uid)
        .doc('userprofile')
        .collection('profiles')
        .onSnapshot((snapshot) => {
          setProfile(snapshot.docs.map((doc) => doc.data()));
        });
    };
    fethcdata();
  }, [currentUser.uid]);
  const handleClick = (data) => {
    setUserProfile(data);
  };
  // useEffect(() => {
  //   setUserProfile(profile);
  //   profile && history.push('/movie');
  // }, [history, profile, setUserProfile]);
  return (
    <div className='UserProfile'>
      <div>
        <div
          className='User'
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup='true'
          onClick={handleToggle}
        >
          <div className='name'>{profileName}</div>
          <div className='image'>
            <img src={img} alt='' />
          </div>
        </div>
      </div>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper className='profile_dropdown'>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id='menu-list-grow'
                  onKeyDown={handleListKeyDown}
                >
                  {profile.map((data, index) => (
                    <MenuItem key={index} onClick={() => handleClick(data)}>
                      <img src={data.img} style={{ width: '35px' }} alt='' />
                      &nbsp;
                      <h4 onClick={() => setOpen(false)}>{data.profile}</h4>
                    </MenuItem>
                  ))}

                  <MenuItem onClick={() => history.push('/manage')}>
                    Manage Profile
                  </MenuItem>
                  <MenuItem onClick={() => auth.signOut()}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setUserProfile: (user) => dispatch(setUserProfile(user)),
});
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
  img: user.userProfile.img,
  profileName: user.userProfile.profile,
});
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
