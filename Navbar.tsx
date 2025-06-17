"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <nav className="max-w-screen-lg mx-auto flex justify-between items-center px-4 py-3">
        <div className="text-xl font-bold text-blue-600">MyPortfolio</div>
        <ul className="flex space-x-4 text-gray-700 font-medium">
          <li>
            <a href="#hero" className="hover:text-blue-600">ホーム</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600">自己紹介</a>
          </li>
          <li>
            <a href="#works" className="hover:text-blue-600">実績</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">お問い合わせ</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
