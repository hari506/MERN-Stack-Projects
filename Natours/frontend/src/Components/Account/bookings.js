import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooking } from '../../actions';

const Bookings = () => {
  let [bookigs, setBookings] = useState([]);
  let user = useSelector((state) => state.auth.user);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getBooking(user._id, (data) => {
        console.log('data from booking --', data);
        if (data.status === 'success') {
          console.log(data.data);
          setBookings(data.data.bookings);
        } else {
          alert('some thing went wrong');
        }
      })
    );
  }, [user, dispatch]);

  return (
    <div>
      <h1>My Booking</h1>
      <table className="booking_table">
        <tr>
          <th> Booking Name</th>
          <th>Booking At</th>
          <th> Tour </th>
          <th>bookingAmount</th>
        </tr>
        {bookigs.length > 0 ? (
          bookigs.map((booking, index) => {
            return (
              <tr key={index}>
                <td> {booking.bookingName} </td>
                <td> {new Date(booking.bookingAt).toLocaleString()}</td>
                <td> {booking.tour.name}</td>
                <td> {booking.bookingAmount}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="4"> You Don't Have Any Bookings </td>
          </tr>
        )}
      </table>
    </div>
  );
};

export default Bookings;
