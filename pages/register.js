export default function Register() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center dark:text-white">
          Create an Account
        </h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
