import express from "express";

import {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  toggleTask,
} from "../controllers/taskController.js";

const router = express.Router();

// GET ALL TASKS
router.get("/", getTasks);

// CREATE TASK
router.post("/", createTask);

// GET SINGLE TASK
router.get("/:id", getTask);

// UPDATE TASK
router.put("/:id", updateTask);

// DELETE TASK
router.delete("/:id", deleteTask);

// COMPLETE / INCOMPLETE
router.patch("/:id/toggle", toggleTask);

export default router;
