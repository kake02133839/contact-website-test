"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-blue-50 py-16 px-6">
      <motion.div
        className="max-w-xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">お問い合わせ</h2>
        {submitted ? (
          <p className="text-center text-green-600 font-semibold">送信が完了しました！ありがとうございます。</p>
        ) : (
          <form
  action="https://formspree.io/f/xovwdbbo"
  method="POST"
  className="bg-white p-6 rounded-lg shadow-md space-y-4"
  
>
  <input type="hidden" name="_autoresponse" value="お問い合わせありがとうございます。内容を確認の上、ご連絡差し上げます。" />

  <div>
    <label className="block text-gray-700">お名前</label>
    <input
      type="text"
      name="name"
      required
      className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
    />
  </div>
  <div>
    <label className="block text-gray-700">メールアドレス</label>
    <input
      type="email"
      name="email"
      required
      className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
    />
  </div>
  <div>
    <label className="block text-gray-700">メッセージ</label>
    <textarea
      name="message"
      required
      className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
      rows={5}
    ></textarea>
  </div>
  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
  >
    送信
  </button>
</form>


        )}
      </motion.div>
    </section>
  );
}
