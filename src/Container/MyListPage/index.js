import React from 'react'; //, { useEffect, useState }
// import { firestore } from '../../Firebase';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import TitleList from '../../Components/TitleList';
import { connect } from 'react-redux';

const MyList = ({ currentUser }) => {
  console.log(currentUser.uid);
  // const [listItems, setListItems] = useState('');
  // useEffect(() => {
  //   return (
  //     // listItems === ''
  //     //   ? firestore.collection(currentUser.uid).add({
  //     //       list: 'avenger',
  //     //       profiles: [
  //     //         { cat: { list: { a: 1, b: 2, c: 3, d: 4, e: 5 } } },
  //     //         { person: { list: { a: 1, b: 2, c: 3, d: 4, e: 5 } } },
  //     //         { dog: { list: { a: 1, b: 2, c: 3, d: 4, e: 5 } } },
  //     //         { bird: { list: { a: 1, b: 2, c: 3, d: 4, e: 5 } } },
  //     //       ],
  //     //       subscriptionStatus: false,
  //     //     })
  //     //   : null,
  //     // firestore.collection(currentUser.uid).onSnapshot((snapshot) => {
  //     //   setListItems(snapshot.docs.map((doc) => doc.data().list));
  //     // })
  //   );
  // }, [currentUser.uid, listItems]);

  return (
    <div>
      <Header />
      <TitleList />
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
    </div>
  );
};
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
export default connect(mapStateToProps)(MyList);
