import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";
import LoadingBox from "../Nofitication/LoadingBox";
import MessageBox from "../Nofitication/MessageBox";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  return (
    <>
      <div className="login">
        <h1>Register</h1>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <form method="post" onSubmit={submitHandler}>
          <div className=" txt_field">
            <input
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <span></span>
            <label> Name</label>
          </div>
          <div className=" txt_field">
            <input
              type="text"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <span></span>
            <label> Email</label>
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
          <input type="submit" value="Register" />
          <div className="signup_link">
            <a href="/login">Login</a>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterForm;
