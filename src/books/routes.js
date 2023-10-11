const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");

const {
  findAllBooks,
  createBook,
  deleteBook,
  findOneAndUpdate,
} = require("./controllers");

bookRouter.get("/books", findAllBooks);
bookRouter.delete("/books", deleteBook);
bookRouter.post("/books", createBook);
bookRouter.put("/books", findOneAndUpdate);

// app.put("/books/dynamic", async (request, response) => {
//   console.log(request.originalUrl);
//   const findOneAndUpdate = await Book.findOneAndUpdate(
//     { title: request.body.title },
//     { author:  },
//     { returnDocument: "after" }
//   );

//   const successResponse = {
//     message: "success",
//     patchBook: patchBook,
//   };

//   response.send(successResponse);
// });

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

module.exports = bookRouter;
