import React, { useState, useEffect } from 'react';
import PackageCard from '../../Components/PackageCard';
import Footer from '../../Components/LPFooter';
import { Redirect } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { setStatus, Payment } from '../../Redux/User/userActionGenerator';

const stripekey =
  'pk_test_51HFF8bFYHbXxM4QyCgBnncjVHgDpdnaWhbUdK34GqX017fzipaUgI9ERGNcgNo3Y5XlyeFUgbnOSMJHJdSCAeH1i006HAKUp58';
const Plan = ({ currentUser, subscriptionStatus }) => {
  const dispatch = useDispatch();
  const [seletedPlan, setSeletedPlan] = useState({
    planName: 'Netflix Premium',
    amount: 12500,
  });
  useEffect(() => {
    dispatch(setStatus());
  });

  const product = {
    name: seletedPlan.planName,
    price: seletedPlan.amount,
    productBy: 'Netflix',
  };

  const makePayment = async (token) => {
    Payment({
      token,
      product,
    });
  };

  if (subscriptionStatus) {
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
  subscriptionStatus: user.subscriptionStatus,
});
export default connect(mapStateToProps)(Plan);
