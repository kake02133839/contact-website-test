export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-6 mt-10">
      <div className="text-sm">
        &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </div>
      <div className="mt-2">
        <a
          href="https://bit.ly/4iJ4576"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:underline"
        >
          デザインテンプレートを見る
        </a>
      </div>
    </footer>
  );
}
