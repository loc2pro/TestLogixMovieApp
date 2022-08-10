import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signout } from "../../actions/userActions";

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  document.addEventListener("DOMContentLoaded", function () {
    let menu = document.querySelector("#menu-bars");
    let navbar = document.querySelector(".navbar");

    menu.onclick = () => {
      navbar.classList.toggle("active");
      menu.classList.toggle("fa-times");
    };

    window.onscroll = () => {
      navbar.classList.remove("active");
      menu.classList.remove("fa-times");
    };
  });

  const signoutHandler = () => {
    dispatch(signout());
    history.push("/signin");
  };

  return (
    <header>
      <a href="/" className="logo">
        <span>Big </span>Star
      </a>

      <nav className="navbar">
        <a href="/">home</a>
        <a href="#services">about</a>
        <a href="#contact">movie</a>
        <a href="#contact">contact</a>
      </nav>
      <nav className="navbar-right"></nav>

      <div className="icons">
        <i class="fas fa-user"></i>
        {userInfo ? (
          <div>
            <span style={{ margin: "10px" }}>Welcome {userInfo.name}</span>
            <a href="/login">
              <button className="btn" onClick={signoutHandler}>
                Logout
              </button>
            </a>
          </div>
        ) : (
          <a href="/login">
            <button className="btn">Signin</button>
          </a>
        )}
      </div>
    </header>
  );
}

export default Header;
