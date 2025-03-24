import TaskList from "@/components/TaskList";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Task Dashboard</h1>
      <TaskList />
    </div>
  );
}