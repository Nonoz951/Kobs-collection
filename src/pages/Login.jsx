import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Clear any previous error
    setError("");

    // Simulate login logic (replace with your API call)
    console.log("Logging in with:", { email, password });

    // Example API call to your backend
    // axios.post('/api/login', { email, password })
    //   .then(response => console.log(response))
    //   .catch(err => setError("Invalid email or password"));
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row">
      {/* Logo Section */}
      <div className="w-full md:w-1/2 rounded-md">
        <img
          src={logo}
          className="w-full h-64 md:h-full object-cover"
          alt="logo"
        />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex items-center flex-col gap-2 justify-center p-6 bg-gray-50">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-primary mb-6 text-center">
            Welcome Back
          </h1>

          {/* Display Error */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
              {error}
            </div>
          )}

          {/* Login Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="email@example.com"
                aria-label="Email"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="********"
                aria-label="Password"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition duration-300"
            >
              Sign In
            </button>

            {/* Divider */}
            <div className="flex items-center justify-center my-4">
              <span className="text-gray-500">or</span>
            </div>

            {/* Google Sign In */}
            <button
              type="button"
              className="w-full flex items-center justify-center border py-2 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              <FcGoogle className="mr-2 text-2xl" /> Sign In with Google
            </button>
          </form>
        </div>

        {/* Redirect to Signup */}
        <p className="text-primary text-xl mt-4">
          Don't have an account?{" "}
          <Link
            to="/auth/signup"
            className="text-blue-400 underline hover:text-red-500"
          >
            Sign up here.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
