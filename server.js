const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const adminRouter = require("./app/routes/admin");
const blogRouter = require("./app/routes/blog");

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Blink Blink Blink"));
app.use("/admin", adminRouter);
app.use("/blog", blogRouter);

//catch 404 and forward to error handler
app.use(function(req, res, next){
  const err= new Error("Not Found")
  err.status = 404
  next(err)
})

//development error handler
//will print stacktrace
if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err
    });
  });
}
app.listen(PORT, () =>
  console.log(`server is running on http://localhost: ${PORT}`)
);
