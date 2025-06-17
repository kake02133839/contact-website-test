"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* 背景画像 */}
      <motion.img
        src="/images.png" // ここはファイル名を正確に記載（publicフォルダに置いてください）
        alt="高級感ある背景"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8 }}
      />

      {/* 黒のオーバーレイ */}
      <div className="absolute inset-0 bg-black/60" />

      {/* コンテンツ */}
      <motion.div
        className="relative z-10 max-w-screen-lg mx-auto text-center flex flex-col justify-center h-full px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-white">自己紹介</h2>
        <p className="mt-4 text-lg text-gray-200">
          フロントエンド開発とUI/UXデザインの1年の経験があります。

        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"].map((skill) => (
            <motion.div
              key={skill}
              className="p-4 bg-white/20 backdrop-blur-md rounded-lg shadow text-xl font-semibold text-white"
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

