'use client';

import { useEffect } from 'react';
import 'fullpage.js/dist/fullpage.min.css'; // CSSだけは事前に読み込んでOK

import HeroVideoSection from "@/components/HeroVideoSection";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorksSection from "@/components/WorksSection";
import ContactSection from "@/components/ContactSection";
import RightSideNavbar from "@/components/RightSideNavbar";
import Footer from "@/components/Footer";

export default function Page() {
  useEffect(() => {
    // ✅ 遅延インポートで windowエラーを防ぐ
    import('fullpage.js').then((fullpage) => {
      new fullpage.default('#fullpage', {
        autoScrolling: true,
        scrollHorizontally: true,
        anchors: ['hero-video', 'hero', 'about', 'works', 'contact'],
        navigation: true,
        navigationPosition: 'right',
        showActiveTooltip: true,
        responsiveWidth: 768, // スマホ時は通常スクロール
        // licenseKey: 'YOUR_KEY_IF_NEEDED', // 必要に応じて
      });
    });

    return () => {
      if (typeof window !== 'undefined' && (window as any).fullpage_api) {
        (window as any).fullpage_api.destroy('all');
      }
    };
  }, []);

  return (
    <>
      <RightSideNavbar />
      <div id="fullpage">
        <div className="section"><HeroVideoSection /></div>
        <div className="section"><HeroSection /></div>
        <div className="section"><AboutSection /></div>
        <div className="section"><WorksSection /></div>
        <div className="section"><ContactSection /></div>
      </div>
      <Footer />
    </>
  );
}
