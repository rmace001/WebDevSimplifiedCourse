if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

const indexRouter = require("./routes/index");
const authorRouter = require("./routes/authors");

// set the view engine
app.set("view engine", "ejs");

// set where views are coming from, where views of our files are gonna go
app.set("views", __dirname + "/views");

// every file is put inside this layout file, avoiding duplication of
// header/footer HTML and CSS
app.set("layout", "layouts/layout");

// we want to use expressLayouts
app.use(expressLayouts);

// stylesheets, javascript, all images go in public
app.use(express.static("public"));

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

// log the db connection
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));

app.use("/", indexRouter);
app.use("/authors", authorRouter);

// tell our app to listen, pull from and env var for z
// when we deploy, the server's going to tell us what
// port we are listening to, not us, for development we can
// default this to port 3000
app.listen(process.env.PORT || 3000);
