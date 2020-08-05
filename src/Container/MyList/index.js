import React, { useEffect, useState } from 'react';
import { firestore } from '../../Firebase';

const MyList = () => {
  const [listItems, setListItems] = useState('');
  useEffect(() => {
    firestore.collection('listitems').onSnapshot((snapshot) => {
      setListItems(snapshot.docs.map((doc) => doc.data().list));
    });
  }, []);
  return <div>{listItems}</div>;
};

export default MyList;
