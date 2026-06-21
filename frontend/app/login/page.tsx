"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    alert("Login Successful!");
    router.push("/player-dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="bg-gray-900 p-10 rounded-2xl w-[400px] shadow-xl">
        <h1 className="text-3xl font-bold text-green-400 text-center mb-6">
          SportConnect India
        </h1>

        <h2 className="text-white text-xl text-center mb-6">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg mb-4 bg-gray-800 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg mb-4 bg-gray-800 text-white"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-500 text-black p-3 rounded-lg font-bold"
        >
          Login
        </button>

       <button
  onClick={() => {
    alert("Google Login Coming Soon!");
  }}
  className="w-full mt-4 border border-white text-white p-3 rounded-lg"
>
  Continue with Google
</button>

        <p className="text-gray-400 text-center mt-6">
          New User? Register
        </p>
      </div>
    </div>
  );
}