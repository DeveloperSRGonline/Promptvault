const express = require("express");
const authRoutes = require("./routes/auth.route");
const cookieParser = require("cookie-parser");
const promptRoutes = require("./routes/prompt.route");
const cors = require('cors');

const app = express();
app.use(cors({
  origin: "http://localhost:5173", // your Vite frontend
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/prompts", promptRoutes);

module.exports = app;
