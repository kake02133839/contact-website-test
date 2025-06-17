"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      <motion.img
        src="/images.png"
        alt="高級感ある背景"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8 }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.h1
          className="text-5xl md:text-[3.5rem] font-serif text-white mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          革新と美しさを、あなたへ
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          上質な体験を追求するラグジュアリー・ポートフォリオ
        </motion.p>
      </div>
    </section>
  );
}
