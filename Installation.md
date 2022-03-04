# Installation

1. Create a directory and run these commands inside.

- `npm init -y`
- `npm i express express-ejs-layouts`
- `npm i --save-dev nodemon`

2. Inside _package.json_, replace the default scripts field with:

```
  "scripts": {
    "start": "node server.js",
    "devStart": "nodemon server.js"
  }
```

3. Create _server.js_,

- Create routes
- Then, work on integrating routes with views

4. run `npm install ejs --save`

5. Get our models integrated, and connect to a local mongodb database

- install mongodb
