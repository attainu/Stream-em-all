import React, { useState } from 'react';
import PackageCard from '../../Components/PackageCard';
import Footer from '../../Components/LPFooter';
// import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';

const stripekey =
  'pk_test_51HFF8bFYHbXxM4QyCgBnncjVHgDpdnaWhbUdK34GqX017fzipaUgI9ERGNcgNo3Y5XlyeFUgbnOSMJHJdSCAeH1i006HAKUp58';
const Plan = ({ currentUser }) => {
  const [seletedPlan, setSeletedPlan] = useState({
    planName: 'Netflix Premium',
    amount: 1250,
  });
  const [product] = useState({
    name: seletedPlan.planName,
    price: seletedPlan.amount,
    productBy: 'Netflix',
  });

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    return fetch('http://localhost:5000/paymemt', {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log('Response ', response);
        const { status } = response;
        console.log('Status', status);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {/* <StripeCheckout
        image='https://dwglogo.com/wp-content/uploads/2019/02/Netflix_N_logo.png'
        token={makePayment}
        stripeKey={stripekey}
        name={seletedPlan.planName}
        currency='INR'
        amount={seletedPlan.amount * 100}
        key={stripekey}
        email={currentUser.email}
        allowRememberMe={false}
      > */}
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
      {/* </StripeCheckout> */}
    </div>
  );
};
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
export default connect(mapStateToProps)(Plan);
