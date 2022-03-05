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
- To start mongodb/brew/mongodb-community now and restart at login: `brew services start mongodb/brew/mongodb-community`
- Or, if you don't want/need a background service you can just run: `mongod --config /usr/local/etc/mongod.conf`

- start the mongo db service using brew
- in project directory, run `npm i mongoose`

- `npm i --save-dev dotenv`
