"use client";
import { motion } from "framer-motion";

const works = [
  {
    title: "企業サイト",
    description: "ReactとNext.jsで制作したコーポレートサイト。",
    image: "/images.jpeg",
    link: "#",
  },
  {
    title: "サービスLP",
    description: "Tailwind CSSでスタイリングしたサービス紹介ページ。",
    image: "/images.jpeg",
    link: "#",
  },
  {
    title: "ポートフォリオ",
    description: "自身の実績を紹介するレスポンシブなサイト。",
    image: "/images.jpeg",
    link: "#",
  },
];

export default function WorksSection() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">制作実績</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={work.image} alt={work.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{work.title}</h3>
                <p className="text-gray-600 mt-2">{work.description}</p>
                <a
                  href={work.link}
                  className="inline-block mt-4 text-blue-600 hover:underline font-semibold"
                >
                  詳しく見る →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

