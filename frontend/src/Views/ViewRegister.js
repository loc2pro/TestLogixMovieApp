import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import RegisterForm from "../components/auth/RegisterForm";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

function ViewRegister(props) {
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
      <RegisterForm />
      <Footer />
    </>
  );
}

export default ViewRegister;
