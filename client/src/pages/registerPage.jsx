import React from 'react';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Register Account</h1>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-700">E-mail</label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>

          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Confirm password"
            />
          </div>

          <div>
            <label className="block text-gray-700">Role</label>
            <select
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              defaultValue=""
            >
              <option value="" disabled>Select your role</option>
              <option value="student">Student</option>
              <option value="mentor">Mentor</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
            Register
          </button>

          <div className="text-center text-gray-600">
            Already registered? <a href="#" className="text-blue-500 hover:underline">Login</a>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500">
          Design and Innovation Centre — DIC UIET<br />
          <strong>Empowering Ideas, Engineering the Future</strong>
        </div>

        <div className="flex flex-col gap-3">
          <button className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100">
            Continue with Google
          </button>
          <button className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100">
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
``