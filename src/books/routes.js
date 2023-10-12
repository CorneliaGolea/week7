const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");

const {
  findAllBooks,
  createBook,
  deleteBook,
  updateAuthor,

  updateByTitleDynamic,
  // deleteAllBooks,
  deleteOneOrAll,
  findOne,
} = require("./controllers");

bookRouter.get("/books", findAllBooks);
bookRouter.delete("/books", deleteBook);
bookRouter.post("/books", createBook);
bookRouter.put("/books", updateAuthor);

bookRouter.put("/books/dynamic", updateByTitleDynamic);
// bookRouter.delete("/books/deleteAll", deleteAllBooks);
bookRouter.delete("/books/deleteOneOrAll", deleteOneOrAll);
bookRouter.get("/books/:title", findOne);
/////////////////////////////
// console.log(request.body.title);
//   title: request.body.title,
//   author: request.body.author,
//   genre: request.body.genre,
// };
// console.log("hello world");

// create a book on the de(
//     title: request.body.title,
// )

module.exports = bookRouter;
