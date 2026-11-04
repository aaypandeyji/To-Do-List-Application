
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import dns from "dns";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      process.env.FRONTEND_URL
    ].filter(Boolean),
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Task Manager API Running");
});

app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

startServer();
