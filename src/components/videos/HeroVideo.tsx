const HeroVideo = () => {
  return (
    <video
  autoPlay
  muted
  loop
  playsInline
  // poster="/images/hero-fallback.jpg"
  className="w-full h-full object-cover"
>
  {/* <source src="/videos/hero-background.webm" type="video/webm" /> */}
  <source src="/videos/hero-background.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
  )
}

export default HeroVideo