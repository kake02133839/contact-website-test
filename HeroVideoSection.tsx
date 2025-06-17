export default function HeroVideoSection() {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/firstvideo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="relative z-10 flex items-center justify-center h-screen ">
  <h1 className="text-6xl font-serif text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text tracking-wide drop-shadow-[0_2px_4px_rgba(255,255,255,0.15)]">
    kake.s Development
  </h1>
</div>


    </section>
  );
}

