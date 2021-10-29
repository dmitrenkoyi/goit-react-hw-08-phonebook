import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import Container from "./components/Container";
import AppBar from "components/AppBar/AppBar";
import Loader from "components/Loader";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";
import { authOperations, authSelectors } from "redux/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.module.css";

const HomePage = lazy(() => import("./views/HomeViews.js"));
const RegisterView = lazy(() => import("./views/RegisterView.js"));
const LoginView = lazy(() => import("./views/LoginView.js"));
const PhonebookView = lazy(() => import("./views/PhonebookView.js"));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getRefreshing);
  const isError = useSelector(authSelectors.getError);
  const customId = "custom-id-yes";

  const errorMassage = () =>
    toast.error(`${isError}`, {
      toastId: customId,
    });

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  isError && errorMassage();

  return (
    // !isRefreshing && (
    <>
      <ToastContainer position="top-center" />
      <AppBar />
      <Container>
        {!isRefreshing && (
          <Switch>
            <Suspense fallback={<Loader />}>
              <PublicRoute path="/" exact>
                <HomePage />
              </PublicRoute>

              <PublicRoute path="/register" restricted>
                <RegisterView />
              </PublicRoute>

              <PublicRoute path="/login" restricted redirectTo="/phonebook">
                <LoginView />
              </PublicRoute>

              <PrivateRoute path="/phonebook" redirectTo="/login">
                <PhonebookView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        )}
      </Container>
    </>
  );
  // );
}
