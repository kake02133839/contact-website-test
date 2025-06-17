"use client";

export default function RightSideNavbar() {
  return (
    <nav className="fixed top-10 right-4 z-50 flex flex-col space-y-4 bg-red-500 p-4 text-white shadow-lg">
      <a href="#hero" className="block hover:scale-110 transition-transform">ホーム</a>
      <a href="#about" className="block hover:scale-110 transition-transform">自己紹介</a>
      <a href="#works" className="block hover:scale-110 transition-transform">実績</a>
      <a href="#contact" className="block hover:scale-110 transition-transform">お問い合わせ</a>
    </nav>
  );
}
