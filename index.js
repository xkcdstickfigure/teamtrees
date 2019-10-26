var counter = 0;
const request = require("request");
const express = require("express");
const app = express();
app.listen(8080);

//Really bad scraping system
setInterval(() => {
  request("https://teamtrees.org", (err, res, body) => {
    if (err) return;
    if (res.statusCode != 200) return;
    counter = Number(body.split(`<div id="totalTrees" class="counter" data-count="`)[1].split(`"`)[0]);
  });
}, 1000);

//Trees endpoint
app.get("/trees", (req, res) => {
  res.json(counter);
});

//Static
app.use(express.static(__dirname + "/static"));