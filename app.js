console.log("Server is starting...");

const express = require("express");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) log("ERROR:", err);
  else user = JSON.parse(data);
});

// MongoDB connect
const db = require("./server").db();
const mongodb = require("mongodb");
// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code

app.post("/create-item", (req, res) => {
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    if (err) {
      console.log("somethin went wrong");
    } else {
      res.end("successfully added");
    }
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      if (err) {
        console.log(err);
        return res.status(500).json({ state: "error" });
      }
      res.json({ state: "success" });
    },
  );
});

app.post("/delete-all", (req, res) => {
  rejaList = [];
  res.render("reja", { user: user, rejaList: rejaList });
});

app.get("/", function (req, res) {
  console.log("user entered /create-item");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        console.log(data);
        res.render("reja", { items: data });
      }
    });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

module.exports = app;
