const express = require("express");
const router = express.Router();
const Book = require("../models/books");
const Author = require("../models/author");

// all books route
router.get("/", async (req, res) => {
  res.send("All Books");
});

// new book route, note how we call `get` for the new action

router.get("/new", async (req, res) => {
  try {
    const authors = await Author.find({});
    const book = new Book();
    res.render("books/new", {
      authors: authors,
      book: book,
    });
  } catch (error) {
    res.redirect("/books");
  }
});

// create book route
router.post("/", async (req, res) => {
  res.send("Create Book");
});

module.exports = router;
