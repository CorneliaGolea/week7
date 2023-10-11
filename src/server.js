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

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
  },
  genre: {
    type: String,
  },
});

const Book = mongoose.model("book", bookSchema);

// const myName = "cornelia";

// require("dotenv").config();
// console.log(process.env.MY_NAME);
// console.log(process.env.I_LIKE_CHEESE);

app.get("/books", async (request, response) => {
  console.log(request.originalUrl);
  const books = await Book.find();

  const successResponse = {
    message: "success",
    books: books,
  };

  response.send(successResponse);
});

app.put("/books", async (request, response) => {
  console.log(request.originalUrl);
  const updateBook = await Book.findOneAndUpdate(
    { title: request.body.title },
    { author: request.body.author },
    { returnDocument: "after" }
  );

  const successResponse = {
    message: "success",
    updateBook: updateBook,
  };

  response.send(successResponse);
});

app.delete("/books", async (request, response) => {
  console.log(request.originalUrl);
  const deleteBook = await Book.deleteOne({ title: "book3" });

  const successResponse = {
    message: "success",
    deleteBook: deleteBook,
  };

  response.send(successResponse);
});

app.patch("/books", async (request, response) => {
  console.log(request.originalUrl);
  const findOneAndUpdate = await Book.findOneAndUpdate(
    { title: request.body.title },
    { author: request.body.author },
    { genre: request.body.genre },
    { returnDocument: "after" }
  );

  const successResponse = {
    message: "success",
    patchBook: patchBook,
  };

  response.send(successResponse);
});

app.post("/books", async (request, response) => {
  const newBook = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });
  console.log("!!!!!!:", newBook);

  // console.log(request.body.title);
  // const newBook = {
  //   title: request.body.title,
  //   author: request.body.author,
  //   genre: request.body.genre,
  // };
  // console.log("hello world");

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
