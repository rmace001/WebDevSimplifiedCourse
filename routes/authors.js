const express = require("express");

const router = express.Router();
const Author = require("../models/author");
const Book = require("../models/book");
// all authors route
router.get("/", async (req, res) => {
  let searchOptions = {};
  if (req.query.name != null && req.query.name !== "") {
    searchOptions.name = new RegExp(req.query.name, "i");
  }
  try {
    const authors = await Author.find(searchOptions);
    res.render("authors/index", {
      authors: authors,
      searchOptions: req.query,
    });
  } catch {
    res.redirect("/");
  }
});

// new author route, note how we call `get` for the new action

router.get("/new", (req, res) => {
  res.render("authors/new", { author: new Author() });
});

// create author route
router.post("/", async (req, res) => {
  const author = new Author({
    name: req.body.name,
  });
  try {
    // everything in mongoose and mongodb is done asynchronously,
    // so we use await to wait for that call to be completed
    const newAuthor = await author.save();
    res.redirect(`authors/${newAuthor.id}`)
  } catch {
    res.render("authors/new", {
      author: author,
      errorMessage: "Error creating Author",
    });
  }
});

// there will be a variable called id that's passed along with our request
// this will be for showing our user
router.get("/:id", async (req, res) => {
  // simple send so we can see some data
  // params variable gives us everything we define inside our url path
  try {
    const author = await Author.findById(req.params.id);
    const books = await Book.find( { author: author.id }).limit(6).exec();
    res.render("authors/show", {
      author: author,
      booksByAuthor: books
    })
  } catch {
    res.redirect("/")
  }
})

router.get("/:id/edit", async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    res.render("authors/edit", { author: author });
  } catch {
    res.redirect("/authors");
  }
})
// in REST, we like to use "put" to make updates
// we need to install library to make put/delete requests
router.put("/:id", async (req, res) => {
  let author;
  try {
    author = await Author.findById(req.params.id);
    author.name = req.body.name;
    await author.save();
    res.redirect(`/authors/${newAuthor.id}`)
  } catch {
    if (author == null) {
      res.redirect("/");
    } else {
      res.render("authors/edit", {
        author: author,
        errorMessage: "Error updating Author",
      });
    }
  }
})

router.delete("/:id", async (req, res) => {
  let author;
  try {
    author = await Author.findById(req.params.id);
    await author.remove();
    res.redirect("/authors")
  } catch {
    if (author == null) {
      res.redirect("/");
    } else {
      res.redirect(`/authors/${author.id}`);
    }
  }
})


module.exports = router;
