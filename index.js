// const fs = require("fs");
import fs from "fs";
//Read File
fs.readFile("student.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

//Write
fs.writeFile("student.json", "hello", (err) => {
  if (err) {
    return err;
  }
});

//Create
fs.writeFileSync("hello.json", "Hello");

//Update
fs.appendFile("hello.json", " New data", (err) => {
  if (err) throw err;
});
const users = [
  {
    id: 1,
    name: "Rahul",
    age: 21,
    course: "B.Tech",
  },
  {
    id: 2,
    name: "Amit",
    age: 22,
    course: "BCA",
  },
];

//update
fs.appendFile("hello.json", JSON.stringify(users, null, 4), (err) => {
  if (err) throw err;
});

//delete
fs.unlink("student.json", (err) => {
  if (err) throw err;
  console.log("File deleted");
});

// 200 → Success
// 201 → Created
// 204 → Success, no content

// 301 → Permanently moved
// 302 → Temporarily moved
// 304 → Not modified

// 400 → Bad request
// 401 → Not authenticated
// 403 → Not allowed
// 404 → Not found
// 405 → Wrong HTTP method
// 409 → Conflict
// 422 → Validation error
// 429 → Too many requests

// 500 → Server error
// 502 → Bad gateway
// 503 → Service unavailable
// 504 → Gateway timeout
