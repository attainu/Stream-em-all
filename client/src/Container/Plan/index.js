import React, { useState, useEffect } from 'react';
import PackageCard from '../../Components/PackageCard';
import Footer from '../../Components/LPFooter';
import { firestore } from '../../Firebase';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const stripekey =
  'pk_test_51HFF8bFYHbXxM4QyCgBnncjVHgDpdnaWhbUdK34GqX017fzipaUgI9ERGNcgNo3Y5XlyeFUgbnOSMJHJdSCAeH1i006HAKUp58';
const Plan = ({ currentUser }) => {
  const [seletedPlan, setSeletedPlan] = useState({
    planName: 'Netflix Premium',
    amount: 1250,
  });
  const [data, setData] = useState([]);
  useEffect(() => {
    const fethcdata = () => {
      firestore.collection(currentUser.uid).onSnapshot((snapshot) => {
        setData(snapshot.docs.map((doc) => doc.data()));
      });
    };
    fethcdata();
  }, [currentUser.uid]);

  const product = {
    name: seletedPlan.planName,
    price: seletedPlan.amount,
    productBy: 'Netflix',
  };

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    return fetch('http://localhost:5001/paymemt', {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        const data = response.json();
        const { status } = response;
        console.log('Status', status);
        return data;
      })
      .then((response) => {
        console.log('Response ', response);
        console.log('Response recipt url ', response.result.receipt_url);
        if (response) {
          return firestore
            .collection(currentUser.uid)
            .add({
              subscriptionStatus: true,
              resUrl: response.result.receipt_url,
            })
            .then(() => {});
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (data[0]) {
    return <Redirect to='/video' />;
  }
  return (
    <div>
      <PackageCard
        seletedPlan={seletedPlan}
        setSeletedPlan={setSeletedPlan}
        token={makePayment}
        stripeKey={stripekey}
        name={seletedPlan.planName}
        amount={seletedPlan.amount * 100}
        data={stripekey}
        email={currentUser.email}
      />
      <Footer props={'#fff'} />
    </div>
  );
};
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
export default connect(mapStateToProps)(Plan);
