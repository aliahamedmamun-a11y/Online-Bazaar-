export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-4">
        Payment Successful 🎉
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Thank you for shopping at Online Bazaar!
      </p>
      <a
        href="/products"
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
      >
        Continue Shopping
      </a>
    </div>
  );
}
