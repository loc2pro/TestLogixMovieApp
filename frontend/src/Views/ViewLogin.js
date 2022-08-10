import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import LoginForm from "../components/auth/LoginForm";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

function ViewAuth(props) {
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <>
      <Header />
      <LoginForm />
      <Footer />
    </>
  );
}

export default ViewAuth;
