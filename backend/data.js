import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Loc",
      email: "admin@gmail.com",
      password: bcrypt.hashSync("1234", 8),
    },
    {
      name: "Phuoc",
      email: "user@gmail.com",
      password: bcrypt.hashSync("1234", 8),
    },
  ],
  movies: [
    {
      title: "The Quest ad",
      image:
        "https://m.media-amazon.com/images/M/MV5BN2Q4OGFhMjUtMzQ3NC00ZmE5LThhZDktM2NmYTYwZGMxZjc1XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_.jpg",
      reviews: [
        {
          user: "62d6d2999dac26b9f3c3e2b3",
        },
      ],
    },
    {
      title: "The Quest adad",
      image:
        "https://m.media-amazon.com/images/M/MV5BN2Q4OGFhMjUtMzQ3NC00ZmE5LThhZDktM2NmYTYwZGMxZjc1XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_.jpg",
      reviews: [
        {
          user: "62d6d2999dac26b9f3c3e2b3",
        },
      ],
    },
    {
      title: "The Quest 2da",
      image:
        "https://m.media-amazon.com/images/M/MV5BN2Q4OGFhMjUtMzQ3NC00ZmE5LThhZDktM2NmYTYwZGMxZjc1XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_.jpg",
      reviews: [
        {
        
          user: "62d6d2999dac26b9f3c3e2b3",
        },
      ],
    },
    {
      title: "The Quest adad2",
      image:
        "https://m.media-amazon.com/images/M/MV5BN2Q4OGFhMjUtMzQ3NC00ZmE5LThhZDktM2NmYTYwZGMxZjc1XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_.jpg",
      reviews: [
        {
          user: "62d6d2999dac26b9f3c3e2b3",
        },
      ],
    },
    {
      title: "The Quest 1983ađa6",
      image:
        "https://m.media-amazon.com/images/M/MV5BN2Q4OGFhMjUtMzQ3NC00ZmE5LThhZDktM2NmYTYwZGMxZjc1XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_.jpg",
      reviews: [
        {
          user: "62d6d2999dac26b9f3c3e2b3",
        },
      ],
    },
  ],
};
export default data;
