"use client";

import { useEffect, useState } from "react";
import { api } from "@/utils/api";

interface Task {
  _id: string;
  title: string;
  description: string;
  status: "Pending" | "In Progress" | "Completed";
}

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data.tasks);
    } catch (error) {
      alert("Failed to fetch tasks!");
    }
  };

  const filteredTasks = tasks.filter((task) =>
    filter === "All" ? true : task.status === filter
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Task List</h2>

      {/* Task Filter Dropdown */}
      <div className="mb-4">
        <label className="mr-2 font-bold">Filter:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Task List */}
      <ul>
        {filteredTasks.map((task) => (
          <li key={task._id} className="border p-4 mb-2 rounded shadow">
            <h3 className="font-bold">{task.title}</h3>
            <p>{task.description}</p>
            <p>
              Status:{" "}
              <span
                className={`font-bold ${
                  task.status === "Completed"
                    ? "text-green-500"
                    : task.status === "In Progress"
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                {task.status}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}