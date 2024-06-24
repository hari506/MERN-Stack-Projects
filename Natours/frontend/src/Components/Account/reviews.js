import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserReviews } from '../../actions';

const UserReviews = () => {
  let [reviews, setReviews] = useState([]);
  let dispatch = useDispatch();
  let user = useSelector((state) => state.auth.user);
  useEffect(() => {
    dispatch(
      getUserReviews(user._id, (data) => {
        if (data.status === 'success') {
          setReviews(data.data.reviews);
        } else {
          alert('some thing went wrong');
        }
      })
    );
  }, [user, dispatch]);

  return (
    <div>
      <h1> My Reviews </h1>
      <table className="booking_table">
        <th> Review </th>
        <th> Rating </th>
        <th> Tour </th>
        <th> Reviewed At</th>
        {reviews.length > 0 ? (
          reviews.map((review) => {
            return (
              <tr>
                <td> {review.review} </td>
                <td> {review.rating} </td>
                <td> {review.tour.name} </td>
                <td> {new Date(review.createdAt).toLocaleString()} </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="4"> You Don't Have Any Reviews </td>
          </tr>
        )}
      </table>
    </div>
  );
};

export default UserReviews;
