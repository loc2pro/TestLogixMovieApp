import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { likeMovies } from "../../actions/movieActions";

function Main(props) {
  const dispatch = useDispatch();
  const { movies } = props;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  //   const likedMovie = useSelector((state) => state.likedMovie);
  //   const { like } = likedMovie;
  console.log("movies.map",movies);
  console.log("userInfo",userInfo);
  const handleLike = (e, id) => {
    e.preventDefault();
    dispatch(likeMovies(id, userInfo?._id));
  };

  return (
    <section class="featured" id="featured">
      <h1 class="heading">
        <span>Big Star</span> Movie
      </h1>

      <div class="box-container">
        {movies &&
          movies?.map((item, key) => (
            <div class="box" key={item._id}>
              <div class="image-container">
                <img src={item.image} alt="" />
              </div>
              <div class="content">
                <div class="location">
                  <h3>{item.title}</h3>
                </div>

                <div class="buttons">
                  <a href="#" class="btn">
                    {item.reviews.length}likes
                  </a>
                  <button onClick={(e) => handleLike(e, item._id)} class="btn">
                    { item.reviews &&
                    item.reviews.find(
                      (value) => value.user === userInfo?._id
                    )  ? (
                      <a>Unlike</a>
                    ) : (
                      <a>Like</a>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Main;
