import http from "http";
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

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  }
  if (req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });
    console.log(body);
    req.on("end", () => {
      const newUser = JSON.parse(body);

      newUser.id = data.length + 1;

      data.push(newUser);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newUser));
    });
  }

  //Put Method
  else if (req.method === "PUT") {
    let body = "";

    req.on("data", (data) => {
      body += data;
    });

    req.on("end", () => {
      const updateUser = JSON.parse(body);

      const user = data.find((user) => user.id === updateUser.id);
      if (!user) {
        res.writeHead(404, { "Content-Type": "application/json" });
      }
      user.name = updateUser.name;
      user.email = updateUser.email;

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(user));
    });
  } else if (req.method === "DELETE") {
    let body = "";

    req.on("data", (data) => {
      body += data;
    });

    req.on("end", () => {
      const { id } = JSON.parse(body);

      const index = data.findIndex((user) => user.id === id);

      if (index === -1) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "User Not Found" }));
        return;
      }
      const deletedUser = data.splice(index, 1);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(deletedUser));
    });
  }
});
server.listen(3000, () => {
  console.log("server is running");
});
