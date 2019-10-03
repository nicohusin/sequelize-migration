const express = require("express");

const adminRouter = require('./app/routes/admin')

const app = express();
const PORT = process.env.PORT || 3005;

app.get("/", (req, res) => res.send("Blink Blink Blink"));

app.use("/admin", adminRouter)

app.listen(PORT, () =>
  console.log(`server is running on http://localhost: ${PORT}`)
);
