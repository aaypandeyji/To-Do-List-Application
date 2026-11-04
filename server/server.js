import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import dns from "dns";
import taskRoutes from "./routes/taskRoutes.js";

dns.setServers([
  "8.8.8.8",
  "8.8.4.4"
]);


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


console.log("ENV CHECK:");
console.log(process.env.PORT);
console.log(process.env);
console.log(process.env.MONGO_URI);


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected ✅");
  })
  .catch((error) => {
    console.log("MongoDB Failed ❌");
    console.log(error);
  });

app.use("/api/tasks",taskRoutes);

app.get("/", (req, res)=>{
    res.send("Task Manager API Running");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});