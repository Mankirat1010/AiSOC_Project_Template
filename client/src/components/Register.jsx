import React, { useState } from 'react';
import axios from 'axios';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    rollNumber: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    setLoading(true);
    try {
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      };

      if (formData.role === 'student') {
        userData.rollNumber = formData.rollNumber;
      }

      const res = await axios.post(
        'http://localhost:5000/api/users/signup',
        userData,
        { withCredentials: true }
      );

      alert('Registration successful!');
      navigate('/login');
      console.log(res.data);

      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: '',
        rollNumber: '',
      });
    } catch (err) {
      console.error(err);
      alert(
        err.response?.data?.error ||
          err.response?.data?.message ||
          'Registration failed.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Register Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter your name"
              required
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-gray-700">E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
              required
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter your password"
              required
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Confirm password"
              required
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-gray-700">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
              required
              disabled={loading}
            >
              <option value="" disabled>
                Select your role
              </option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          {formData.role === 'student' && (
            <div>
              <label className="block text-gray-700">Roll Number</label>
              <input
                type="text"
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter your roll number"
                required
                disabled={loading}
              />
            </div>
          )}

          <button
            type="submit"
            className={`w-full py-2 rounded-lg text-white ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
            } transition`}
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>

          <div className="text-center text-gray-600">
            Already registered?{' '}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-blue-500 hover:underline"
            >
              Login
            </a>
          </div>
        </form>

        <div className="text-center text-xs text-gray-500">
          Design and Innovation Centre — DIC UIET
          <br />
          <strong>Empowering Ideas, Engineering the Future</strong>
        </div>
      </div>
    </div>
  );
}
