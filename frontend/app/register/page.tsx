"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/utils/api";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    try {
      await api.post("/auth/register", { email, password });
      alert("Registration successful!");
      router.push("/login");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded">
        <h2 className="mb-4 text-lg font-bold">Register</h2>
        <input type="email" placeholder="Email" className="border p-2 w-full mb-2"
          onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="border p-2 w-full mb-2"
          onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleRegister} className="bg-green-500 text-white px-4 py-2 rounded">Register</button>
      </div>
    </div>
  );
}
