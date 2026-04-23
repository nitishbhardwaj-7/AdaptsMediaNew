const AboutHero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-br from-[#4c3592] via-[#e21b22] to-[#4c3592] flex items-center justify-center px-6 py-12 text-white md:px-16 lg:px-24">

      {/* Hero Content */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 w-[1450px]">
        {/* Left Side */}
        <div className="flex items-center">
          <h1 className="text-5xl tracking-wide md:text-7xl">
            About Us
          </h1>
        </div>

        {/* Right Side */}
        <div className="relative z-10 flex flex-col justify-center max-w-md">
          <h2 className="mb-6 text-3xl leading-snug md:text-5xl">
            Services Built to <br /> Drive Real Growth.
          </h2>
          <p className="text-2xl font-extralight leading-tight tracking-wide text-white">
            From strategy to execution, we create integrated solutions 
            that help brands connect, perform, and scale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;