import { Router, json } from "express";
import { readBooks, writeNewBooks } from "../api/books.api.js";
const router = Router();

router.use(json());

router
  .route("/")
  .get((req, res) => {
    const books = readBooks();
    res.send(books);
  })

  .post((req, res) => {
    try {
      const newbook = req.body;
      writeNewBooks(newbook);
      res.send(newbook);
    } catch (error) {
      console.log("Error creating Book:", error);
    }
  });

// get a single book by id
//Delete a single book by id
// Update a single book by id

router
  .route("/:id")
  .get((req, res) => {
    try {
      const bookId = req.params.id;
      const books = readBooks();
      const book = books.find((b) => b.id === bookId);
      res.send(book);
    } catch (error) {
      console.log("error:", error);
    }
  })

  .put((req, res) => {
    try {
      // const bookId = req.params.id;
      const books = readBooks();
      const updateBook = { ...books[index], user, rating, comment };
      books[index] = updateBook;
      writeNewBooks(books);
      res.send(updateBook);
    } catch (error) {
      console.log("error", error);
    }
    // res.send("Put (update) bokk by id");
  })

  .delete((req, res) => {
    res.send("delet book by id");
  });

export default router;
