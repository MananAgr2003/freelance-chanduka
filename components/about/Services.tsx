import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";

export default function AboutServices() {
  const services = [
    {
      title: "Metal manufacturing",
      icon: "/icons/metal-manufacturing-light.svg",
    },
    {
      title: "Moulding plants",
      icon: "/icons/moulding-plants-light.svg",
    },
    {
      title: "Steel generation",
      icon: "/icons/steel-generation-light.svg",
    },
    {
      title: "Construction works",
      icon: "/icons/construction-works-light.svg",
    },
  ];

  return (
    <section className="bg-bgSecondary min-h-screen">
      <div className="md:w-[1100px] md:h-[600px] h-[150px] mx-auto relative">
        <img
          src="/images/about-video.png"
          alt="About video"
          className="w-full px-6 md:p-0 absolute -top-20"
        />
      </div>

      <div className="md:w-[1100px] mx-auto mt-12 pb-32 px-4 md:px-0">
        {/* Title Section */}
        <div className="w-full flex md:flex-row flex-col gap-10">
          <div>
            <h3 className="text-sm font-semibold text-neutral-200 uppercase">
              What We Offer
            </h3>
            <h2 className="text-4xl font-bold text-white mt-2">
              Engineering solutions for all industries
            </h2>
          </div>

          <div className="text-neutral-200">
            <p className="mt-4">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco.
            </p>
            <p className="mt-2">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="text-left">
              <div className="flex justify-left mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-16 w-16"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 cursor-pointer text-neutral-50 text-xl transition-transform duration-100 hover:translate-x-2">
                <ArrowRightAltSharpIcon />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
