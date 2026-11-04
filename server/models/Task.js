import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    date: {
      type: String,
      required: true,
    },

    startTime: {
      type: String,
    },

    endTime: {
      type: String,
    },

    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);


const Task = mongoose.model("Task", taskSchema);

export default Task;