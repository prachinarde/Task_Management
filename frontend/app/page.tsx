import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to Task Manager</h1>
      </div>
    </div>
  );
}
