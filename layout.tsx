// src/app/layout.tsx
import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ActivityLP",
  description: "ポートフォリオ用のLPサイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="ja">
      <body className="relative min-h-screen bg-white text-black">
  {children}
</body>

    </html>
  );
}

