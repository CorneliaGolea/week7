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
  const deleteBook = await Book.deleteOne({ title: request.body.title });

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
const updateAuthor = async (request, response) => {
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

//////////STRETCH
const updateByTitleDynamic = async (request, response) => {
  console.log(request.originalUrl);
  const book = await Book.findOneAndUpdate(
    { title: request.body.title },
    { [request.body.key]: request.body.value },
    { returnDocument: "after" }
  );

  const successResponse = {
    message: "success",
    book: book,
  };

  response.send(successResponse);
};
///////

// const deleteAllBooks = async (request, response) => {
//   console.log(request.originalUrl);
//   const books = await Book.deleteMany();

//   const successResponse = {
//     message: "success",
//     books: books,
//   };

//   response.send(successResponse);
// };

////////

const deleteOneOrAll = async (request, response) => {
  console.log(request.originalUrl);
  let result;
  if (!request.body.title) {
    result = await Book.deleteMany();
  } else if (request.body.title) {
    result = await Book.deleteOne({ title: request.body.title });
  }

  // const books = await Book.deleteMany();

  const successResponse = {
    message: "success",
    result: result,
  };

  response.send(successResponse);
};
////////////////////

const findOne = async (request, response) => {
  console.log(request.originalUrl);

  const books = await Book.find({ title: request.params.title });

  const successResponse = {
    message: "success",
    books: books,
  };

  response.send(successResponse);
};

module.exports = {
  findAllBooks: findAllBooks,
  deleteBook: deleteBook,
  createBook: createBook,
  updateAuthor: updateAuthor,
  ///stretch
  updateByTitleDynamic: updateByTitleDynamic,
  // deleteAllBooks: deleteAllBooks,
  deleteOneOrAll: deleteOneOrAll,
  findOne: findOne,
};
