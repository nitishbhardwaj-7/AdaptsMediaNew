import React from 'react';

const OrangeVideo = ({ children }) => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* 1. The Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-fallback.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/orange-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 2. The Dark Overlay (Crucial for Text Contrast) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

      {/* 3. The Content Layer */}
      <div className="relative z-20">
        {children}
      </div>
    </section>
  );
};

export default OrangeVideo;