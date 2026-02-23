export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahim",
      review: "Online Bazaar is amazing! Fast delivery and great products.",
    },
    {
      name: "Karim",
      review: "I love the clean design and easy checkout process.",
    },
    {
      name: "Ayesha",
      review: "Best shopping experience I’ve had online!",
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12">
      <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">
        What Our Customers Say
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6"
          >
            <p className="text-gray-700 dark:text-gray-300 mb-4">"{t.review}"</p>
            <h3 className="font-semibold text-indigo-600 dark:text-indigo-400">
              - {t.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
