import express from "express";
import config from "./config"; //instead of hardcoding a port

const app = express();

app.use(express.static("public")); //static middleware statically served
app.set("view engine", "ejs"); //ejs template -> render templates

app.get("/", (req, res) => {
  res.render("index", { ans: "Dante" });
});

app.listen(config.port, function listenhandler() {
  console.info(`Running on ${config.port}...`);
});
