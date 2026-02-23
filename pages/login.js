// pages/login.js
import { signIn } from "next-auth/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LoginPage() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center dark:text-white">
            Login to Online Bazaar
          </h1>
          <button
            onClick={() => signIn("google")}
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 mb-4 transition duration-300"
          >
            Sign in with Google
          </button>
          <button
            onClick={() => signIn("github")}
            className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition duration-300"
          >
            Sign in with GitHub
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
