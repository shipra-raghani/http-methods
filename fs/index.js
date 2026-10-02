const fs = require("fs");

// fs.readFile("data.txt", "utf8", (err, data) => {
//   if (err) {
//     return err;
//   }
//   console.log(data);
// });

// fs.writeFile("data.txt", "Learning Java Script", (err) => {
//   if (err) {
//     return err;
//   }
//   console.log("File written!");
// });

//For creating
fs.writeFileSync("hello.txt", "Learning React");

fs.appendFile