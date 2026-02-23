export default function Footer() {
  return (
    <footer className="bg-indigo-600 dark:bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <h2 className="text-lg font-bold">Online Bazaar</h2>
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:underline">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:underline">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:underline">
            Instagram
          </a>
        </div>
      </div>
      <div className="text-center mt-4 text-sm text-gray-200 dark:text-gray-400">
        © {new Date().getFullYear()} Online Bazaar. All rights reserved.
      </div>
    </footer>
  );
}
