import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserBillings } from '../../actions';

const UserBillings = () => {
  let [billings, setBillings] = useState([]);
  let user = useSelector((state) => state.auth.user);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getUserBillings(user._id, (res) => {
        if (res.status === 'success') {
          setBillings(res.data.billings);
        } else {
          alert(res.data.response.message);
        }
      })
    );
  }, [user, dispatch]);
  return (
    <>
      <h1> My Biilings </h1>
      <table className="booking_table">
        <tr>
          <th> Billing Name </th>
          <th> Billing Amount </th>
          <th> Tour </th>
          <th> Billing AT</th>
        </tr>
        {billings.length > 0 ? (
          billings.map((billing) => {
            return (
              <tr>
                <td> {billing.billingName} </td>
                <td> {billing.billingAmount} </td>
                <td> {billing.booking.tour.name} </td>
                <td> {new Date(billing.billingAt).toLocaleString()} </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="4"> There are no billings</td>
          </tr>
        )}
      </table>
    </>
  );
};

export default UserBillings;
