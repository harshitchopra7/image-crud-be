const express = require("express");
const cors = require("cors");

const uploadRoute = require("./routes/uploadRoute");
const updateRoute = require("./routes/updateRoute");
const fetchRoute = require("./routes/fetchRoute");
const deleteRoute = require("./routes/deleteRoute");

const app = express();
const PORT = 9999;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// upload, update, delete, fetch

// /upload, /update/, /delete, /fetch

app.use("/upload", uploadRoute);
app.use("/update", updateRoute);
app.use("/fetch", fetchRoute);
app.use("/delete", deleteRoute);
