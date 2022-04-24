// WEEK 1
//pwd- print working directory
//redir- remove directory
// REPL Read Eval Print Loop
// links and recordings to the previous classes
// the package.json file gives information about the file you are working on
// the scripts in them tell how your codes will act when you run them 
// the nodmon is used to automate reload of cganges 
// to get started
// npm i nodmon
// on the package.json add  "start:watch": "nodemon anyapp.js"
// as a back-end developer, you often work on projects that involves the operating system
// console.log(os.platform) // => Gives the os platform
// console.log(os)...
// the fs module provides a good API to interact with the file system
// visit nodejs documentation to lear about the fs module 
//...creates a new Git repository
// npm init create a new package.json file

// WEEK 2
// *building our first server
// request handles  everything that comes from user
// response handles everything that comes from the server
// the most important property we need from our request are
// request .methods
// request .url
// request .headers
//* Working with status codes abd headers

// *responding with plain texts
// covert javasript object to json
// you can use curl to talk to our server and get whatever response
// our server is going to give  
// curl -i 127.0.0.1:5000 gives information  about your server
//*  responding with json

// monitoring files for changes
//{
  //  "name": "my_express",
//    "version": "1.0.0",
 //   "description": "",
 //   "main": "changes.js",
  //  "scripts": {
 //     "start": "node changes.js",
 //     "dev":"nodemon changes.js",
 //     "test": "echo \"Error: no test specified\" && exit 1"
 //   },
 //   "author": "Victor Mathias",
 //   "license": "ISC",
 //   "dependencies": {
 //     "nodemon": "^2.0.15"
 //   }
 // }
  // handling errors
  // * url paths any / you add in the url you will still get the same 
  //response
  // the way we can handle that is using our request.url properties
  // using this, we can know which path the user is using
  // makind a get request
  // as a nodejs you may often need to make request to an external server
   // * making a post put delete request
   



   // in this course, we are using the expressjs web framework to 
   // create scalable projects or servers



   // DBMS and DATABASE
// A database management system  is a software program that enables the creation and management of databases
// relational DBMS 
// 1. MySQL
// Non realational DBMS
//1. MongoDM(NoSQL) 
//data is stored in form of Json, runs over multiple servers
// course oucome
// i. Database creation
// ii. tables
// iii. adding data to your database
// iv Querying a database
// v Relational database design

//DATABASE 
// A database is a collection of data
// data can be store as a text file
// data can be stord as a spreadsheet
// but for very large data, that's where DBMS comes in
