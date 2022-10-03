const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("It worked and today is a wonderful day!");
});

app.listen(3000);
