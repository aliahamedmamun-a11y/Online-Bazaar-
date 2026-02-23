// components/Blog.js
export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Big Sale Coming Soon!",
      date: "Feb 20, 2026",
      excerpt: "Get ready for our mega sale with up to 50% off selected items.",
    },
    {
      id: 2,
      title: "New Arrivals in Electronics",
      date: "Feb 15, 2026",
      excerpt: "We’ve added the latest gadgets to Online Bazaar. Check them out now!",
    },
    {
      id: 3,
      title: "Customer Loyalty Program",
      date: "Feb 10, 2026",
      excerpt: "Earn points with every purchase and redeem them for discounts.",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12">
      <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">
        Latest Updates & Offers
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6"
          >
            <h3 className="text-lg font-semibold mb-2 dark:text-white">
              {post.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {post.date}
            </p>
            <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
