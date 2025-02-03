import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";

export default function ServiceSection() {
  const services = [
    {
      title: "Metal manufacturing",
      icon: "/icons/metal-manufacturing.svg",
    },
    {
      title: "Moulding plants",
      icon: "/icons/moulding-plants.svg",
    },
    {
      title: "Steel generation",
      icon: "/icons/steel-generation.svg",
    },
    {
      title: "Construction works",
      icon: "/icons/construction-works.svg",
    },
  ];

  return (
    <>
      <section className="py-48 px-8 md:pt-64 bg-white text-gray-900">
        <div className="md:w-[1100px] mx-auto">
          {/* Title Section */}
          <div className="w-full flex md:flex-row flex-col gap-10">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase">
                What We Offer
              </h3>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">
                Engineering solutions for all industries
              </h2>
            </div>

            <div>
              <p className="mt-4 text-gray-600">
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco.
              </p>
              <p className="mt-2 text-gray-600">
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
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 cursor-pointer text-gray-500 text-xl transition-transform duration-100 hover:translate-x-2">
                  <ArrowRightAltSharpIcon />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-neutral-100 text-gray-900">
        <div className="md:w-[1100px] mx-auto flex flex-col-reverse md:flex-row gap-12 md:gap-0 items-start">
          {/* Left Side - Image Content */}
          <div className="md:w-1/2">
            <div className="relative md:w-3/4 w-full">
              <img
                src="/images/women-foundry.png"
                alt="Foundry"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end items-center p-4 text-white ">
                <h3 className="text-lg font-semibold">Foundry</h3>
                <button className="text-bgPrimary font-semibold bg-white px-4 py-2 mt-2">
                  Check Out Products
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Text content */}
          <div className="md:w-1/2 flex flex-col-reverse gap-8 md:gap-0 justify-between md:h-[750px]">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase">
                Professional Approach
              </h3>
              <h2 className="md:text-5xl text-4xl font-bold text-gray-900 mt-2">
                World class quality is our priority
              </h2>
              <p className="mt-4 text-gray-600">
                Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                sit aspernatur aut odit aut fugit sed quia.
              </p>
            </div>

            <div>
              <img
                src="/images/steel-coils.png"
                alt="Steel Coils"
                className="md:w-full object-cover rounded-lg md:rounded-none"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
