import Tours from './Components/Tours/tours';
import Footer from './Components/UI/Footer';
import Header from './Components/UI/header';
import { Route, Routes } from 'react-router-dom';
import Tour from './Components/Tours/TourDetails/tour';
import Login from './Components/Auth/login';
import Account from './Components/Account';
import PageNotFound from './Components/UI/404';
import Bookings from './Components/Account/bookings';
import UserReviews from './Components/Account/reviews';
import UserBillings from './Components/Account/billings';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetUserByToken } from './actions/auth';
function App() {
  let dispatch = useDispatch();
  let user = useSelector((state) => state.auth.user);
  useEffect(() => {
    if (!user) {
      dispatch(GetUserByToken());
    }
  }, [user, dispatch]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Tours />} />
        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<Account />} />
        <Route path="/:slug" element={<Tour />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/reviews" element={<UserReviews />} />
        <Route path="/billing" element={<UserBillings />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
