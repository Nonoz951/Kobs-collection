import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { signUpuserWithEmailAndPassword, signInWithGoogle } from "../firebase/functions";  // Ensure you have this in your Firebase functions

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);
  
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSigningUp(true);

    try {
      // Check if passwords match
      if (password !== confirmPassword) {
        setError("Passwords do not match!");
        setIsSigningUp(false);
        return;
      }

      // Proceed with signup
      setError("");
      console.log("Signing up:", { name, email, password });

      await signUpuserWithEmailAndPassword(email, password);

      navigate("/auth/login");
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to sign up. Please try again.");
      setIsSigningUp(false);
    } finally {
      setIsSigningUp(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signInWithGoogle();  
      navigate("/");  
    } catch (err) {
      console.error(err);
      setError("Google signup failed. Please try again.");
    }
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
            Register
          </h1>

          {/* Display Error Message */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="John Doe"
                aria-label="Full Name"
                autoFocus
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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

            <div>
              <label htmlFor="check-password" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="check-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="********"
                aria-label="Confirm Password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSigningUp}
              className={`w-full py-2 rounded-lg transition duration-300 ${
                isSigningUp
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-primary text-white hover:bg-primary-dark"
              }`}
            >
              {isSigningUp ? "Signing Up..." : "Sign Up"}
            </button>

            <div className="flex items-center justify-center my-4">
              <span className="text-gray-500">or</span>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignUp}
              className="w-full flex items-center justify-center border py-2 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              <FcGoogle className="mr-2 text-2xl" /> Sign Up with Google
            </button>
          </form>
        </div>

        <p className="text-primary text-xl mt-4">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-400 underline hover:text-red-500">
            Login here.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
