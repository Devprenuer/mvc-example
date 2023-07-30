import express from "express";
import bodyParser from "body-parser";

// import controllers
import { 
  queryUser,
  queryUserHtml,
  queryUserJson
} from "./controllers/userController";

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello Babel");
});

// simple route that maps the a controller
// that prints a greeting to the user given
// in the query string
app.get("/query-user", queryUser);

// example of the same route but responding with
// an html page
app.get("/query-user-html", queryUserHtml);

// example of the same route but responding with
// a json object
app.get("/query-user-json", queryUserJson);


app.listen(4000, () => {
  console.log(`app is listening to port 4000`);
});
