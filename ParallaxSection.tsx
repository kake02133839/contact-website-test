"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current!;
    const img = el.querySelector("img")!;
    gsap.fromTo(img, { y: -50 }, {
      y: 50,
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <img
        src="/images.jpeg"
        alt="パララックス背景"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex items-center justify-center h-full text-white bg-black/40">
        <h2 className="text-4xl font-serif">没入感の演出</h2>
      </div>
    </div>
  );
}
