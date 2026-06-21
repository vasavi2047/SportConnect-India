"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [userType, setUserType] = useState("Player");

  const handleRegister = () => {
    if (userType === "Player") {
      router.push("/player-dashboard");
    } else if (userType === "Selector") {
      router.push("/selector-dashboard");
    } else if (userType === "Coach") {
      router.push("/coach-dashboard");
    } else if (userType === "Academy") {
      router.push("/academy-dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="bg-gray-900 p-10 rounded-2xl w-full max-w-xl shadow-xl">

        <h1 className="text-4xl font-bold text-green-400 text-center mb-8">
          SportConnect India
        </h1>

        <h2 className="text-white text-2xl text-center mb-8">
          Create Account
        </h2>

        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          className="w-full p-4 rounded-lg mb-4 bg-gray-800 text-white"
        >
          <option>Player</option>
          <option>Selector</option>
          <option>Coach</option>
          <option>Academy</option>
        </select>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-4 rounded-lg mb-4 bg-gray-800 text-white"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-4 rounded-lg mb-4 bg-gray-800 text-white"
        />

        <input
          type="text"
          placeholder="Mobile Number"
          className="w-full p-4 rounded-lg mb-4 bg-gray-800 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 rounded-lg mb-6 bg-gray-800 text-white"
        />

        <button
          onClick={handleRegister}
          className="w-full bg-green-500 hover:bg-green-400 text-black p-4 rounded-lg font-bold text-lg"
        >
          Register
        </button>

        <p className="text-center text-gray-400 mt-6">
          Already have an account? Login
        </p>
      </div>
    </div>
  );
}