const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");

const tasks = JSON.parse(
  fs.readFileSync("./dbshop.json", { encoding: "UTF-8" })
);
const saveTasks = tasks =>
  new Promise(resolve =>
    fs.writeFile(
      "./dbshop.json",
      JSON.stringify(tasks),
      {
        encoding: "UTF-8"
      },
      resolve
    )
  );

app 
  .use(cors())
  .use(express.json())
  .get("/dbshop", (req, res) => res.send(tasks))
  .post("/dbshop", (req, res) => {
    const task = req.body;
    task.id = tasks.length + 1;
    tasks.push(task);
    saveTasks(tasks).then(() => res.send(true));
  })
  .listen(3000, () => console.log("server started on port 3000"));