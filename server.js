// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const filepath = path.join(__dirname, "data", "data.txt");
// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   if (req.url === "/") {
//     res.write("hello");
//     res.end();
//   } else if (req.url === "/form") {
//     res.setHeader("Content-Type", "text/html");
//     res.write(
//       "<form action= '/submit' method= 'POST'> <input name='data' /> <button>Submit</button> </form>"
//     );
//     res.end();
//   } else if (req.url === "/submit") {
//     let data = "";
//     req.on("data", (chunk) => {
//       data += chunk;
//     });
//     req.on("end", () => {
//       fs.readFile(filepath, (err, data) => {
//         console.log(data.toString());
//       });
//       fs.writeFile(filepath, data, () => {
//         console.log("saved");
//       });
//     });
//     res.write("Received");
//     res.end();
//   }
// });

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

const authRoute = require("./routes/auth");
const productsRoute = require("./routes/products");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use("/auth", authRoute);
app.use("/product", productsRoute);

app.use("/", (req, res) => {
  res.render("home", { user: "Osama" });
});

app.listen(3000);
