const express = require("express");
const dotnev = require("dotenv").config();
const port = process.env.PORT || 8080;
const app = express();
const { connectDB } = require("./db/index.js");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

connectDB();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1/users", require("./routes/user.js"));

app.listen(port, () => console.log(`server is listening on port: ${port}`));
