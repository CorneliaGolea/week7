require("dotenv").config();
const express = require("express");
console.log("!!!!!!!!", process.env.MONGODB_URI);
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

async function connection() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Successfully connected");
  } catch (error) {
    console.log(error);
  }
}

connection();

// const myName = "cornelia";

// require("dotenv").config();
// console.log(process.env.MY_NAME);
// console.log(process.env.I_LIKE_CHEESE);

app.get("/books", (request, response) => {
  console.log(request.originalUrl);
  const book = {
    title: "lord of the rings",
    author: "tolkein",
    genre: "fantasy",
  };

  const successResponse = {
    message: "success",
    book: book,
  };

  response.send(successResponse);
});

app.post("/books", (request, response) => {
  console.log(request.body.title);
  const newBook = {
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  };
  console.log("hello world");

  // create a book on the de(
  //     title: request.body.title,
  // )
  const successResponse = {
    message: "success",
    newBook: newBook,
  };

  response.send(successResponse);
});

app.listen(5001, () => {
  console.log("Server is listening");
});
