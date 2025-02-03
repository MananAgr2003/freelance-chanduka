export default function HeroSection() {
  return (
    <section className="relative pt-64 flex items-center justify-center h-screen bg-bgDark text-white px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/hero-bg.png"
            alt="Industrial Work"
            width={600}
            height={400}
            className="shadow-lg"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left md:pl-10" style={{marginTop: "-150px"}}>
          <h1 className="text-4xl text-white md:text-6xl font-bold leading-tight">
            Factory Industrial <br /> Leader in Power
          </h1>
          <p className="mt-4 text-neutral-400">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit sed quia.
          </p>
          <div className="mt-6">
            <a
              href="#about"
              className="px-6 py-3 bg-bgPrimary hover:bg-blue-700 text-white font-semibold shadow-md transition duration-300"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
