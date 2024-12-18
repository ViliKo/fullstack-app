const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

let counter = 3;

let db = [
  { id: 1, name: "jack" },
  { id: 2, name: "tina" },
];

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/customers", (req, res) => {
  res.send(db);
});

app.get("/customers/:urlId([0-9]+)", (req, res) => {
  const id = Number(req.params.urlId);
  const temp = db.find((customer) => customer.id === id);
  if (temp) {
    res.send(temp);
  } else {
    res.status(404).end();
  }
});

app.post("/customers", (req, res) => {
  const customer = req.body;
  customer.id = counter++;
  db.push(customer);
  res.send(customer);
});

app.delete("/customers/:urlId([0-9]+)", (req, res) => {
  const id = Number(req.params.urlId);
  db = db.filter((customer) => customer.id != id);
  res.status(204).end();
});

const server = app.listen(port, () => {
  console.log(`My app listening on port ${port}`);
});

process.on("SIGINT", () => {
  console.log("Gracefully shutting down Express.js server...");
  server.close(() => {
    console.log("Server closed.");
    process.exit(0);
  });
});
