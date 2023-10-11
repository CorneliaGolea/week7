const Book = require("./model");

const findAllBooks = async (request, response) => {
  const books = await Book.find();
  const successResponse = {
    message: "success",
    books: books,
  };

  response.send(successResponse);
};

//////////////

const deleteBook = async (request, response) => {
  console.log(request.originalUrl);
  const deleteBook = await Book.deleteOne({ title: "book3" });

  const successResponse = {
    message: "success",
    deleteBook: deleteBook,
  };

  response.send(successResponse);
};

///////////////
const createBook = async (request, response) => {
  const newBook = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });
  console.log("!!!!!!:", newBook);
  const successResponse = {
    message: "success",
    newBook: newBook,
  };

  response.send(successResponse);
};
////////
const findOneAndUpdate = async (request, response) => {
  console.log(request.originalUrl);
  const book = await Book.findOneAndUpdate(
    { title: request.body.title },
    { author: request.body.author },
    { returnDocument: "after" }
  );

  const successResponse = {
    message: "success",
    book: book,
  };

  response.send(successResponse);
};

module.exports = {
  findAllBooks: findAllBooks,
  deleteBook: deleteBook,
  createBook: createBook,
  findOneAndUpdate: findOneAndUpdate,
};
