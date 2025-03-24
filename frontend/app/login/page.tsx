"use client";

import { useState } from "react";
import { api } from "@/utils/api";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", { email, password });
      login(res.data.token); // Store token and redirect
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded">
        <h2 className="mb-4 text-lg font-bold">Login</h2>
        <input type="email" placeholder="Email" className="border p-2 w-full mb-2"
          onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="border p-2 w-full mb-2"
          onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
      </div>
    </div>
  );
}
