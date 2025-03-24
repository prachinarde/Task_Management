"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-lg font-bold">Task Manager</Link>
        <div>
          {user ? (
            <>
              <Link href="/dashboard" className="px-4">Dashboard</Link>
              <button onClick={logout} className="px-4">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="px-4">Login</Link>
              <Link href="/register" className="px-4">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
