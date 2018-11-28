"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/products", (req, res) => {
  return res.json([{ name: "Foo" }]);
});

app.listen(port, err => {
  if (err) {
    throw err;
  }
  console.log("SERVER: ProductService listening at", port);
});
