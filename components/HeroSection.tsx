export default function HeroSection() {
  return (
    <section className="relative md:pt-64 pt-64 flex items-center justify-center h-screen md:h-screen bg-bgDark text-white md:px-16">
      <div className="container mx-auto flex flex-col-reverse gap-10 md:gap-0 md:flex-row items-center">
        {/* Left: Image */}
        <div className="flex justify-center md:block w-full md:w-1/2">
          <img
            src="/images/hero-bg.png"
            alt="Industrial Work"
            className="shadow-lg w-3/4 md:w-[600px] rounded-lg md:rounded-none"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left px-6 md:px-0 md:pl-10 mt-0 md:mt-[-150px]">
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
