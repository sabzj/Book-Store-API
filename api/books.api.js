// import { json } from "body-parser";
import { readFileSync, writeFileSync } from "node:fs";
import path from "path";
export const filePath = path.join(path.resolve(), "./../data/books.json");

async function initializeBooksDB() {
  try {
    const books = readBooks();
    if (books.length === 0) {
      //fetch data from mock api
      const data = await fetch(
        "https://6578511ef08799dc8044e5b2.mockapi.io/EBookStore"
      ).then((res) => res.json());
      console.log(data);
      //write data inside books.json
      writeFileSync(filePath, JSON.stringify(data, null, 2));
    }
  } catch (error) {}
}

function readBooks() {
  try {
    const books = readFileSync(filePath, "utf-8");
    return JSON.parse(books);
  } catch (error) {
    console.log("error", error);
    return false;
  }
}

function writeNewBooks(newbook) {
  try {
    const books = readBooks;
    books.push(newbook);
    writeFileSync(filePath, JSON.stringify(newbook));
    return true;
  } catch (error) {
    console.log("error:", error);
  }
}

export { initializeBooksDB, readBooks, writeNewBooks };
