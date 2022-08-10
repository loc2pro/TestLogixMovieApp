import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { listMovies } from "../actions/movieActions";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";

function Home(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(listMovies());
  }, [dispatch]);

  const movieList = useSelector((state) => state.movieList);
  const { movies } = movieList;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  useEffect(() => {
    if (!userInfo) {
      props.history.push("/login?redirect=/");
    }
  }, [userInfo, history]);
  console.log("test", movies);
  return (
    <>
      <Header />
      <Main movies={movies} />
      <Footer />
    </>
  );
}

export default Home;
