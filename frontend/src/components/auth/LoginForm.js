import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../actions/userActions";
import LoadingBox from "../Nofitication/LoadingBox";
import MessageBox from "../Nofitication/MessageBox";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(signin(email, password));
  };

  return (
    <>
      <div className="login">
        <h1>Login</h1>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <form method="post" onSubmit={submitHandler}>
          <div className=" txt_field">
            <input
              type="text"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <span></span>
            <label> Username</label>
          </div>
          <div className=" txt_field">
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <span></span>
            <label> Password</label>
          </div>
          <input type="submit" value="Login" />
          <div className="signup_link">
            Not a member<a href="/register">Register</a>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
