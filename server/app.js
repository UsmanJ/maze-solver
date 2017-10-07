import express from "express";
import bodyParser from "body-parser";
import { setupMaze, solveMaze } from "./controllers/maze";

const app = express();
const port = process.env.PORT || 9000;

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.post("/solve-maze", (req, res) => {
  const mazeArray = req.body.mazeArray;
  const startX = req.body.startX;
  const startY = req.body.startY;

  setupMaze(mazeArray);
  const solution = solveMaze(startY, startX);
  solution
    ? res.json({ status: "OK", solution: solution })
    : res.send("An error occured.");
});

app.listen(port, () => {
  console.log("Running on PORT: " + port);
});

export default app;
