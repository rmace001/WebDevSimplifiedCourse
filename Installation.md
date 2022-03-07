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

- ensure this project is on a remote git repo
- Install Heroku CLI
- run `heroku login`
- run the remote setup command: `heroku git:remote -a mybrary-web-dev-rogith`
  To use the Heroku CLI's autocomplete --
  Via homebrew's shell completion: 1) Follow homebrew's install instructions https://docs.brew.sh/Shell-Completion
  NOTE: For zsh, as the instructions mention, be sure compinit is autoloaded
  and called, either explicitly or via a framework like oh-my-zsh. 2) Then run
  $ heroku autocomplete --refresh-cache
  OR
  Use our standalone setup: 1) Run and follow the install steps:
  $ heroku autocomplete

zsh completions have been installed to:
/usr/local/share/zsh/site-functions

6. Mongo db data

- Create a cluster on MongoDB Atlas
- user: admin
- pw: KYtwira5F4gHeaVc
- setup accessible from any ip: 0.0.0.0/0

## Setup Routes

- setup routes/authors.js, the authors controller

## Setup Views

- create authors.js inside views folder
  - Create author model (7:50 course 2)

Books Index/Create/New Routes

- setup routes, headers, models
- setup our new books page to add books to view later
