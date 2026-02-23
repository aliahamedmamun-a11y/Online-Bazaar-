// pages/cancel.js
export default function Cancel() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-4">
        Payment Cancelled ❌
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Your transaction was not completed.
      </p>
      <a
        href="/cart"
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition duration-300"
      >
        Go back to Cart
      </a>
    </div>
  );
}
