const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");

app.get("/", (request, response) => {
  const qualitys = [
    { title: "D", subtitle: "esenvolver paginas html com JS" },
    { title: "E", subtitle: "ncarar desafios mais rapidos" },
    { title: "M", subtitle: "anobrar as dificuldades" },
    { title: "A", subtitle: "morzinho" },
    { title: "I", subtitle: "nveja os outros frameworks" },
    { title: "S", subtitle: "atisfaz os devs" },
  ];
  response.render("index", { qualitys });
});
app.get("/about", (request, response) => response.render("about"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
