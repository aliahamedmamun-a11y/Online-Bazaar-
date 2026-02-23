export default function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <img
        src={product.image || "/logo.png"}
        alt={product.name}
        className="w-full h-40 object-cover rounded transition duration-500 hover:opacity-80"
      />
      <h2 className="text-lg font-semibold mt-2 dark:text-white">
        {product.name}
      </h2>
      <p className="text-gray-600 dark:text-gray-300">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-3 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
}
