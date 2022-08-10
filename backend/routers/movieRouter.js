import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Movie from "../models/movieModel.js";

const movieRouter = express.Router();

movieRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const movies = await Movie.find({});
    return res.json({ movies, success: true });
  })
);

movieRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await Product.remove({});
    const createdMovies = await Movie.insertMany(data.movies);
    res.send({ createdMovies });
  })
);

movieRouter.post(
  "/like/:id",
  expressAsyncHandler(async (req, res) => {
    const movieId = req.params.id;
    const userId = req.body.userId;


    const movie = await Movie.findById(movieId);
    if (movie) {
      if (movie.reviews.find((x) => x.user.toString() === userId)) {
        const removeIndex = movie.reviews
          .map((x) => x.user.toString())
          .indexOf(userId);
        movie.reviews.splice(removeIndex, 1);
        await movie.save();
        // return res.status(200).send(movie.reviews);
        return res.json({ movie, success: true });
      } else {
        movie.reviews.push({ user: userId });
        const liked = await movie.save();
        // return res.status(200).send({
        //   movie,
        // });
        return res.json({ movie, success: true });
      }
    } else {
      res.status(404).send({ message: "Movie Not Found" });
    }
  })
);

export default movieRouter;
