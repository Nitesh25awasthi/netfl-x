import express from "express";
const app = express();

// to make app understand json
app.use(express.json());

let movieList = [];
//routes
app.get(`/say-hello`, (req, res) => {
  return res.status(200).send(`Hello`);
});

//add movie
app.post(`/movie/add`, (req, res) => {
  const newMovie = req.body;
  //add new movie to movieList

  movie.List.push(newMovie);

  //send response
  return res.status(200).send({ message: "Movie is added successfully" });
});

//get movie
app.get("/movie/list", (req, res) => {
  return res.status(200).send({ message: "success", movie: movieList });
});
//network port and server
const PORT = 8001;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
