import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
  allowedHeaders: "Content-Type,Authorization, Cache-Control, Expires, Pragma",
};

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 Server is up and running!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server started on http://localhost:${PORT}`);
});
