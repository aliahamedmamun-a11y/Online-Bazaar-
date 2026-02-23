export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 p-10 rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Welcome to Online Bazaar
        </h1>
        <p className="text-lg text-gray-200 mb-6">
          Your one-stop shop for modern products
        </p>
        <a
          href="/products"
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition duration-300"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}
