const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

app.get("/express_test", (req, res) => {
  var fs = require("fs");
  var text = fs.readFileSync("./mytest.txt", "utf-8").split("\n");
  var filteredwords = [];
  var assignWordTypeList = assignWordType();
  for (var i = 0; i < 25; i++) {
    filteredwords.push({
      key: i,
      word: text[Math.floor(Math.random() * text.length)],
      type: assignWordTypeList[i],
      isRevealed: false
    });
  }
  res.send({ express: filteredwords });
});

assignWordType = () => {
  var count = [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
  ];
  var maxCount = [9, 8, 7, 1];
  var assignWordTypeList = [];
  var type = null;
  for (var i = 0; i < 25; i++) {
    do {
      type = Math.floor(Math.random() * maxCount.length);
    } while (count[type][1] >= maxCount[type]);
    assignWordTypeList.push(type);
    count[type][1]++;
  }
  return assignWordTypeList;
};
