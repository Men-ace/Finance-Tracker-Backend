import { Routes, Route } from "react-router-dom";

import {
  HomePage,
  DashboardPage,
  SingUpPage,
  VerifyUser,
  SignInPage,
  ForgetPasswordPage,
  BookLandingPage,
  Books,
  EditBookPage,
  NewBookPage,
  ReviewsPage,
  UserPage,
  Profile,
  BorrowPage,
} from "../pages";
import { DefaultLayout } from "@components/layouts/DefaultLayout";
import { UserLayout } from "@components/layouts/UserLayout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* publice pages  */}
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="book/:slug" element={<BookLandingPage />} />
        <Route path="signup" element={<SingUpPage />} />
        <Route path="activate-user" element={<VerifyUser />} />
        <Route path="login" element={<SignInPage />} />
        <Route path="forget-password" element={<ForgetPasswordPage />} />
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Route>

      {/* private pages  */}
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="books" element={<Books />} />
        <Route path="new-book" element={<NewBookPage />} />
        <Route path="edit-book/:_id" element={<EditBookPage />} />
        <Route path="burrow-history" element={<BorrowPage />} />

        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="all" element={<UserPage />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
