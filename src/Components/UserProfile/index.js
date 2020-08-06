import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { auth } from '../../Firebase';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const UserProfile = ({ img, profileName }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

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
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

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
                  <MenuItem onClick={handleClose}>Manage Profile</MenuItem>
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

const mapStateToProps = ({ user }) => ({
  img: user.userProfile.img,
  profileName: user.userProfile.profile,
});
export default connect(mapStateToProps)(UserProfile);

//        <div className='UserProfile-menu'>
//         <div className='UserProfileSwitch'>
//           <ul>
//             <li>
//               <div className='UserProfile-image'>
//                 <img src={img} alt='' />
//               </div>
//               <div className='UserProfile-name'>Alexander</div>
//             </li>
//             <li>
//               <div className='UserProfile-image'>
//                 <img src='' alt='' />
//               </div>
//               <div className='UserProfile-name'>Mattias</div>
//             </li>
//           </ul>
//         </div>
//         <div className='UserNavigation'>
//           <ul>
//             <li>Your Account</li>
//             <li>Help Center</li>
//             <li>Sign out of Netflix</li>
//           </ul>
//         </div>
//       </div>

//     </div>
