import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectID, ref: "User" },
  },
  {
    timestamps: true,
  }
);
const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);
const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
