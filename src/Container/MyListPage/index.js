import React, { useEffect, useState } from 'react'; //
import { firestore } from '../../Firebase';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import { connect } from 'react-redux';

const MyList = ({ currentUser, userProfile }) => {
  const [listItems, setListItems] = useState('');
  const person = userProfile.profile;
  useEffect(() => {
    const fethcdata = () => {
      firestore
        .collection(currentUser.uid)
        .doc(person)
        .get()
        .then((doc) => setListItems(doc.data().list));
    };
    fethcdata();
  }, [currentUser.uid, person]);
  console.log(listItems);
  const handleClick = () =>
    firestore
      .collection(currentUser.uid)
      .doc(person)
      .collection('list')
      .add({ user: 'anish' });
  return (
    <div>
      {/* {listItems} */}
      <Header />

      {/* <TitleList /> */}
      <div>
        Home
        <button>
          <Link to='/sdfsdf'>Not found</Link>
        </button>
      </div>
      <div>
        <button>
          <Link to='/signin'>signin</Link>
        </button>
      </div>
      <div>
        <button>
          <Link to='/signup'>signup</Link>
        </button>
        <button>
          <Link to='/'>manageprofile</Link>
        </button>
        <button>
          <Link to='/tvshow'>tvShow</Link>
        </button>
      </div>
      <button style={{ marginTop: '10vh' }} onClick={handleClick}>
        handleClick
      </button>
    </div>
  );
};
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
  userProfile: user.userProfile,
});
export default connect(mapStateToProps)(MyList);
