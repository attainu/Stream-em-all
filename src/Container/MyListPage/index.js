import React, { useEffect, useState } from 'react';
import { firestore } from '../../Firebase';
import Header from '../../Components/Header';

const MyList = () => {
  const [listItems, setListItems] = useState('');
  useEffect(() => {
    firestore.collection('listitems').onSnapshot((snapshot) => {
      setListItems(snapshot.docs.map((doc) => doc.data().list));
    });
  }, []);
  return (
    <div>
      <Header />
      {listItems}
    </div>
  );
};

export default MyList;
