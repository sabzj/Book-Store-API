import express from "express";
import booksRouter from "./../routes/books.router.js";
import { initializeBooksDB } from "../api/books.api.js";
const server = express();
// fetch link = save in local database
initializeBooksDB();

// router middleware
server.use("/books", booksRouter);

const PORT = 2222;

server.listen(PORT, () => {
  console.log(`server is listening to ${PORT}`);
});

// import express from "express";
// import booksRouter from "./../routes/books.router.js";
// import { initializeBooksDB } from "../api/books.api.js";

// const server = express();

// // Initialize books database with error handling
// initializeBooksDB()
//   .then(() => {
//     // router middleware
//     server.use("/books", booksRouter);

//     const port = 2222;

//     server.listen(port, () => {
//       console.log(`Server is listening on port ${port}`);
//     });
//   })
//   .catch((error) => {
//     console.error("Error initializing books database:", error);
//   });
