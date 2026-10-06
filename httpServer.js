// const express = require("express");
import express from "express";
const app = express();
const port = 3000;
app.use(express.json());
const data = [
  {
    id: 1,
    name: "Shipra",
    email: "shipra@gmail.com",
  },
  {
    id: 2,
    name: "Rishika",
    email: "rishika@gmail.com",
  },
];
app.get("/", (req, res) => {
  res.send(data);
});

app.post("/", (req, res) => {
  const newUser = {
    id: data.length + 1,
    name: req.body.name,
    email: req.body.email,
  };
  // res.status(201);
  data.push(newUser);
  res.send({ message: "Data Created Sucessfully", data: data });
});

app.put("/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = data.find((user) => user.id === userId);
  if (!user) {
    res.status(404);
    res.send({ message: "User Not Found of this Id" });
  }

  user.name = req.body.name;
  user.email = req.body.email;
  res.send({ message: "User Updated Successfully", data: data });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.delete("/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = data.filter((user) => user.id !== userId);

  res.status(200);
  res.send(user);
});
// import http from "http";

// const server = http.createServer((req, res) => {
//   if (req.method === "GET") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(data));
//   }
//   if (req.method === "POST") {
//     let body = "";

//     req.on("data", (chunk) => {
//       body += chunk;
//     });
//     console.log(body);
//     req.on("end", () => {
//       const newUser = JSON.parse(body);

//       newUser.id = data.length + 1;

//       data.push(newUser);

//       res.writeHead(201, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(data));
//     });
//   }

//   //Put Method
//   else if (req.method === "PUT") {
//     let body = "";

//     req.on("data", (data) => {
//       body += data;
//     });

//     req.on("end", () => {
//       const updateUser = JSON.parse(body);
//       const id = Number(req.url.slice(req.url.lastIndexOf("/") + 1));
//       const user = data.find((user) => user.id === id);
//       if (!user) {
//         res.writeHead(404, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ message: "User Not Found" }));
//       }
//       user.name = updateUser.name;
//       user.email = updateUser.email;

//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(user));
//     });
//   } else if (req.method === "DELETE") {
//     const id = Number(req.url.slice(req.url.lastIndexOf("/") + 1));
//     console.log(id);
//     const deletedUser = data.filter((user) => user.id !== id);
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(deletedUser));
//   }
// });
// server.listen(3000, () => {
//   console.log("server is running");
// });
