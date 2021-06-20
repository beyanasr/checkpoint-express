const express = require("express");
const dateTime = require("./middleware/timer");
const app = express();
app.use(express.json());
app.use(dateTime);
app.listen(5000, (err) => {
  err ? console.log(err) : console.log(`server running `);
});

app.use(express.static('components'))
