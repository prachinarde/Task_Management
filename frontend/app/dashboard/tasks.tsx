import { useState } from "react";
import { getTaskSuggestion } from "@/utils/api";

export default function TasksPage() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // AI Task Suggestion Handler
  const handleSuggestTask = async () => {
    setLoading(true);
    const suggestion = await getTaskSuggestion("Suggest a new task for productivity");
    setTask(suggestion || ""); // Set suggested task
    setLoading(false);
  };

  // Handle Task Submission
  const handleAddTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, task]);
    setTask(""); // Clear input after adding task
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-white">Task Manager</h1>

      {/* Task Input & AI Suggestion Button */}
      <div className="flex gap-2 mt-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task"
          className="border p-2 w-full rounded"
        />
        <button 
          onClick={handleSuggestTask} 
          disabled={loading}
          className="bg-blue-500 text-white p-2 rounded"
        >
          {loading ? "Generating..." : "Suggest Task"}
        </button>
        <button 
          onClick={handleAddTask}
          className="bg-green-500 text-white p-2 rounded"
        >
          Add Task
        </button>
      </div>

      {/* Task List */}
      <ul className="mt-4">
        {tasks.map((task, index) => (
          <li key={index} className="p-2 bg-gray-700 text-white rounded mt-2">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}
